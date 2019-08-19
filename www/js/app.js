import { window, document } from 'ssr-window';
import $ from './lib/dom7_lib';
import gkGame from './lib/game';
import modal from './lib/modal';
import mlf_chat from './lib/chat';
import audio from './lib/audio';

import ajaxWrapper from './lib/wrapper/ajax';
$.ajax = function(options){
	ajaxWrapper(options);
};

//gkGame.debugMode = true;

let app = {};

app.client_id = 'app';
app.version = '1.0.0';

//переменные для eval
app.modules_names = function(name){
	if(name == 'gkGame') return gkGame;
	if(name == 'modal') return modal;
	if(name == 'mlf_chat') return mlf_chat;
	if(name == 'audio') return audio;
	if(name == 'dom7') return $;
};

//выполнение js скрипта из html
app.ev = function(html){
	var beforeHtml = ''+
	'var gkGame=this.modules_names("gkGame");'+
	'var modal=this.modules_names("modal");'+
	'var mlf_chat=this.modules_names("mlf_chat");'+
	'var audio=this.modules_names("audio");'+
	'var $=this.modules_names("dom7");'+
	'';
	eval(beforeHtml+html);
};

//инициализация обработчиков приложения
app.initHandlers = function(){
	
	$(window).on('resize',function() {
		gkGame.setResize();
		gkGame.setCenter();
		app.setModalsSizes();
	});
	
	window.addEventListener("orientationchange", function() {
		gkGame.setResize();
		gkGame.setCenter();
		app.setModalsSizes();
	});
	
	$(document).on('click','.openMap',function(e){
		if(!!e) e.preventDefault();
		
		if($(this).attr('data-audio')) audio.play($(this).attr('data-audio'));
		
		modal.remove();
		
		var id = $(this).attr('data-user');
		var map = $(this).attr('data-map');
		var type = $(this).attr('data-type');
		if(!type) type = 'player';
		
		if(!id) id = map;
		
		
		
		if(id) gkGame.loadMap(id,type);
		
	});
	
	$(document).on('click','.sendcommand, .commandButton',function(e){
		if(!!e) e.preventDefault();
		
		if($(this).attr('data-audio')) audio.play($(this).attr('data-audio'));
		
		var cmd = $(this).attr('data-command');
		var addpost = $(this).attr('data-addpost');
		var page = $(this).attr('data-page');
		
		if(!cmd) return false;
		
		
		//debugger;
		//if(cmd == 'build_01'){
		
		
		var dtpost = {key: gkGame.autKey, cmd: cmd};
		
		if(addpost){
			addpost = addpost.split(',');
			var k;
			for(k in addpost){
				dtpost[addpost[k]] = $('#'+addpost[k]).val();
			}
		}
		
		var replaceMenu = $(this).attr('data-replace_menu');
		
		if(page){
			
			//data-audio="money"
			//console.log(dtpost);
			
			if($(this).parents('.message-container').length){
				$(this).parents('.message-container').append(modal.loader_template());
			}
			
			if($(this).attr('data-preload_build_menu')){
				$('.modalBuild .buildContentWrap').html(modal.loader_template());
			}
			if($(this).attr('data-preload_modal')){
				
				$.ajax({
				url: gkGame.curUrl + '' + page,
					data: dtpost,
					dataType : "text",
					type: "POST",
					success: function (data, textStatus) {
						modal.setContent(data);
						
						if(replaceMenu){
							gkGame.loadGameMenu();
						}
					}
				});
				
			}else{
				
				$.ajax({
				url: gkGame.curUrl + '' + page,
					data: dtpost,
					dataType : "text",
					type: "POST",
					success: function (data, textStatus) {
						
						$('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">'+data+'</div>');
						
						if($('.modalBuild .buildContentWrap script').length){
							$('.modalBuild .buildContentWrap script').each(function(){
								//console.log($(this).html());
								app.ev($(this).html());
							});
						}
						
						if(replaceMenu){
							gkGame.loadGameMenu();
						}
					}
				});
				
			}
			
			
			
		}else{
			
			if($(this).parents('.message-container').length){
				$(this).parents('.message-container').append(modal.loader_template());
			}
			
			if($(this).attr('data-preload_build_menu')){
				$('.modalBuild .buildContentWrap').html(modal.loader_template());
			}
			
			gkGame.sendCommand(dtpost,function(dt){
				if($('.message-fixed-container .message-container .preload').length){
					$('.message-fixed-container .message-container .preload').parents('.message-container').remove();
				}
				if(dt.fixmess){
					modal.gameMessage(dt.fixmess);
					if(dt.setLoadMenu) this.loadGameMenu();
					if(dt.setLoadItems) this.loadItems();
					if(dt.closeBuildModal) $('.modalBuild').hide();
					if(dt.closeDefaultModal) modal.remove();
					if(dt.audio) audio.play(dt.audio);
					
					if(dt.draw_mode){
						gkGame.drawSetka();
						gkGame.moveCord.push(dt.draw_mode);
					}
				}
			});
		
		}
		//}
		
	});
	
};

//обработчики табов внизу страницы
app.initTabs = function(){
	
	$(document).on('click','.bottomGameBlockTabsMenu li span',function(){
		var tabId = $(this).attr('data-tab');
		audio.play('click_link');
		$('.bottomGameBlockTabsMenu li span').removeClass('active');
		$(this).addClass('active');
		$('.bottomGameBlock .wrap').hide();
		$('.bottomGameBlock .wrap'+tabId).show();
		$('.bottomGameBlockTabsMenu .hideTab').html('X').show();
		$('.bottomGameBlock').show();
	});

	$(document).on('click','.bottomGameBlockTabsMenu .hideTab',function(e){
		e.preventDefault();
		audio.play('click_link');
		$('.bottomGameBlockTabsMenu li span').removeClass('active');
		$('.bottomGameBlock').hide();
		$(this).html('').hide();
	});
	
	$(document).on('click','ul.buildTabs li a',function(e){
		if(!!e) e.preventDefault();
		audio.play('click_link');
		$('ul.buildTabs li a').removeClass('button-red');
		$('ul.buildTabs li a').addClass('button-yelow');
		$(this).addClass('button-red');
		var tabClass = $(this).attr('data-tab');
		$('.buildTab').removeClass('buildTab_active');
		$('.'+tabClass).addClass('buildTab_active');
	});
	
};

//обработчики зума
app.initZoom = function(){
	
	$(document).on('click','.gameZoomBlock .zoomLnk',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			audio.play('close');
			$('.gameZoomBlock .buttons').hide();
			$(this).removeClass('active');
		}else{
			audio.play('click_build');
			$('.gameZoomBlock .buttons').css({'display':'inline-block'});
			$(this).addClass('active');
		}
	});
	
	$(document).on('click','.gameZoomBlock .buttons a',function(e){
		e.preventDefault();
		audio.play('click_link');
		gkGame.setZoom($(this).attr('data-size'));
	});
	
};

//установка максимального размера модальных окон
app.setModalsSizes = function(){
	
	var max_height = $('.topGameBlock').height() - 60 - 40 - 40 - 5;
	$('#contentModal').attr('data-height',max_height);
	$('.modal .modal-body').css({'height':$('#contentModal').attr('data-height')+'px'});
	
};

//инициализация калькулятора
app.initCalk = function(){
	
	$(document).on('change','#kalkform .calc_mode',function(){
		gkGame.calc.getCalcResultSet();
	});
	
};

app.init = function(){
	//console.log(app.client_id);
	//console.log(app.version);
	let init_game = function(key){
		
		gkGame.autKey = key;
		
		var imgs = [
		'game_map_start_new_10_06.png',
		'build_01_new.png',
		'build_02_new.png',
		'build_02_new_lvl2.png',
		'build_03_new_lvl2.png',
		'build_03_new.png',
		'build_04_new.png',
		'build_05_new.png',
		'build_06_new.png',
		'build_06_new_lvl2.png',
		'build_07_new.png',
		'build_07_new_lvl2.png',
		'build_08_new.png',
		'build_08_new_lvl2.png',
		'build_09_new.png',
		'build_09.png',
		'build_10_new.png',
		'build_11_new.png',
		'build_12_new.png',
		'build_91_new.png',
		'build_91_new_lvl2.png',
		'lest1.png',
		'lest2.png',
		'lest3.png',
		'lest4.png',
		'lest5.png',
		'units_1.png',
		'units_2.png',
		'units_3.png',
		'units_4.png',
		'units_5.png',
		'units_6.png',
		'gold_new.png',
		'portal_new.png',
		'build_10_new_lvl2.png',
		'build_01_new_lvl2.png',
		];
		gkGame.loader.load(imgs);
		audio.load([
		{'alias':'fon_sound','src':['fon_sound.webm','fon_sound.mp3','fon_sound.wav'],'options':{autoplay:true,loop:true}},
		{'alias':'click_build','src':['click_build.webm','click_build.mp3','click_build.wav']},
		{'alias':'knock','src':['knock.webm','knock.mp3','knock.wav']},
		{'alias':'close','src':['close.webm','close.mp3','close.wav']},
		{'alias':'click_link','src':['click_link.webm','click_link.mp3','click_link.wav']},
		{'alias':'res_in','src':['res_in.webm','res_in.mp3','res_in.wav']},
		{'alias':'money','src':['money.webm','money.mp3','money.wav']},
		{'alias':'error','src':['error.webm','error.mp3','error.wav']},
		{'alias':'building','src':['building.webm','building.mp3','building.wav']},
		{'alias':'remove','src':['remove.webm','remove.mp3','remove.wav']},
		{'alias':'magic','src':['magic.webm','magic.mp3','magic.wav']},
		{'alias':'chest','src':['chest.webm','chest.mp3','chest.wav']},
		{'alias':'attack','src':['attack.webm','attack.mp3','attack.wav']},
		{'alias':'attack2','src':['attack2.webm','attack2.mp3','attack2.wav']},
		{'alias':'fanfar','src':['fanfar.webm','fanfar.mp3','fanfar.wav']},
		{'alias':'smeh','src':['smeh.webm','smeh.mp3','smeh.wav']},
		{'alias':'ping','src':['ping.webm','ping.mp3','ping.wav']},
		{'alias':'mess','src':['mess.webm','mess.mp3','mess.wav']},
		]);
		gkGame.loader.loader.onComplete.add(function(e){
			gkGame.debug('loader.onComplete',e);
			if(gkGame.app === null) {
				mlf_chat.loadChat();
				//debugger;
			}
			gkGame.init_game();
		});
		
		app.initHandlers();
		app.initTabs();
		app.initZoom();
		app.initCalk();
		app.setModalsSizes();
		modal.init();
		audio.init();
		//$('#contentModal').show();
		
	};
	
	if(this.client_id == 'yandex' || this.client_id == 'mobile_app'){
	
		var playerAut = localStorage.getItem('ggame_aut');
			
		if(!playerAut){
			$.ajax({
				url: gkGame.curUrl+'api/createGame.php',
				data: {},
				dataType : "json",
				type: "GET",
				success: function (data, textStatus) {
					playerAut = data.ggame_aut;
					localStorage.setItem('ggame_aut',data.ggame_aut);
					init_game(playerAut);
				}
			});
		}else{
			init_game(playerAut);
		}
	
	}else{
		
		init_game('');
		
	}
	
};

export default app;