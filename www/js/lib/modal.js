import { window, document } from 'ssr-window';
import gkGame from './game';
import audio from './audio';
import app from './../app';

import ajaxWrapper from './wrapper/ajax';

import $ from './dom7_lib';
$.ajax = function(options){
	ajaxWrapper(options);
};

let modal = {};

modal.loader_template = function(){
	return '<div class="preload"><div class="load"></div></div>';
};

modal.template = function(){
	
	let ht = '<div class="modal-content">'+
		this.loader_template()+
		'<div class="modal-header">'+
			'<button type="button" class="close">&times;</button>'+
			'<h4 class="modal-title"></h4>'+
		'</div>'+
		'<div class="modal-body"></div>'+
    '</div>';
	
	return ht;
};

modal.hide = function(){
	$('#contentModal').hide();
};

modal.show = function(current){
	$('#contentModal').show();
	if(!current){
		$('.contentModalWrapper').append(this.template());
	}else{
		var len = $('#contentModal .modal-content').length;
		if(!len) {
			$('.contentModalWrapper').append(this.template());
		}else{
			let i = 0;
			$('#contentModal .modal-content').each(function(){
				i += 1;
				if(i == len){
					$('#contentModal .modal-content').prepend(this.loader_template());
				}
			});
		}
		
	}
	$('.modal .modal-body').css({'height':$('#contentModal').attr('data-height')+'px'});
	this.sorting();
};

modal.setContent = function(content){
	var len = $('#contentModal .modal-content').length;
	if(len){
		let i = 0;
		$('#contentModal .modal-content').each(function(){
			i += 1;
			if(len == i) {
				$(this).find('.modal-body').html('<div class="wrapContentBg">'+content+'</div>');
				$(this).find('.preload').remove();
				if($(this).find('.meta-modal-title')){
					if($(this).find('.meta-modal-title').attr('content')){
						modal.setTitle($(this).find('.meta-modal-title').attr('content'));
					}
					
					if($(this).find('script').length){
						$(this).find('script').each(function(){
							//console.log($(this).html());
							app.ev($(this).html());
						});
					}
					
				}
			}
		});
	}else{
		$('#contentModal').hide();
	}
};

modal.setTitle = function(title){
	var len = $('#contentModal .modal-content').length;
	if(len){
		let i = 0;
		$('#contentModal .modal-content').each(function(){
			i += 1;
			if(len == i) {
				$(this).find('.modal-title').html(title);
			}
		});
	}
};

modal.sorting = function(){
	var start_zindex = 0;
	var len = $('#contentModal .modal-content').length;
	$('#contentModal .modal-content').each(function(){
		start_zindex +=1;
		if(start_zindex<len) {
			$(this).hide();
		}else{
			$(this).show();
		}
	});
	if(len<1) $('#contentModal').hide();
};

modal.remove = function(){
	this.hide();
	$('#contentModal .modal-content').remove();
};

modal.gameMessage = function(content){
	$('.message-fixed-container').append(content);
	$('.message-fixed-container').show();
};

modal.handlers = function(){
	
	$(document).on('click','.modal .close',function(e){
		e.preventDefault();
		audio.play('close');
		$(this).parents('.modal-content').remove();
		modal.sorting();
	});
	
	$(document).on('click','.message-container .close',function(e){
		e.preventDefault();
		audio.play('close');
		$(this).parents('.message-container').remove();
		if(!$('.message-fixed-container .message-container').length){
			$('.message-fixed-container').hide();
		}
	});
	
	$(document).on('click','.closeBuild',function(e){
		if(!!e) e.preventDefault();
		audio.play('close');
		$('.modalBuild').hide();
	});
	
	$(document).on('click','.showModal, .toLevel1',function(e){
		if(!!e) e.preventDefault();
		var url = $(this).attr('data-page');
		if(url){
			
			var audio_alias = $(this).attr('data-audio');
			if(audio_alias) 
				audio.play(audio_alias);
			
			if($(this).attr('data-current')){
				modal.show(true);
			}else{
				modal.show();
			}
			
			if($(this).attr('data-title')){
				modal.setTitle($(this).attr('data-title'));
			}else if($(this).attr('title')){
				modal.setTitle($(this).attr('title'));
			}
			
			$.ajax({
				url: gkGame.curUrl + '' + url,
				data: {key: gkGame.autKey},
				dataType : "text",
				type: "POST",
				success: function (data, textStatus) {
					modal.setContent(data);
				}
			});
			
		}
	});
	
	$(document).on('click','.showModalBuild',function(e){
		if(!!e) e.preventDefault();
		var title = $(this).attr('title');
		var url = $(this).attr('data-page');
		
		var audio_alias = $(this).attr('data-audio');
		if(audio_alias) 
			audio.play(audio_alias);
		
		modal.showBuildFromUrl(url,title);
	});
	
};

modal.showBuildFromUrl = function(url,title){
	
	$('.modalBuild .buildContentWrap').html(modal.loader_template());
	$('.modalBuild .titleBuild .name').html(title);
	$('.modalBuild').show();
	$('.modalBuild .buildContentWrap').css({'height':$('.modalBuild .content').height()+'px'});
	
	var addpost = {
		key: gkGame.autKey
	};
	
	if(url == 'api/settings/sound/'){
		var k;
		for(k in audio.volume){
			addpost[k] = audio.volume[k];
		}
	}
	//console.log(addpost);
	$.ajax({
		url: gkGame.curUrl + '' + url,
		data: addpost,
		dataType : "text",
		type: "POST",
		success: function (data, textStatus) {
			$('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">'+data+'</div>');
		}
	});
};

modal.showBuildContent = function(content,title){
	$('.modalBuild .buildContentWrap').html(modal.loader_template());
	$('.modalBuild .titleBuild .name').html(title);
	$('.modalBuild').show();
	$('.modalBuild .buildContentWrap').css({'height':$('.modalBuild .content').height()+'px'});
	
	$('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">'+content+'</div>');
};

modal.init = function(){
	modal.handlers();
	modal.sorting();
	//debugger;
};

export default modal;