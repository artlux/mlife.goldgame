import { window, document } from 'ssr-window';
import $ from './dom7_lib';
import gkGame from './game';
import Base64 from './base64';
import audio from './audio';

import ajaxWrapper from './wrapper/ajax';
$.ajax = function(options){
	ajaxWrapper(options);
};


var Cookies = require("cookies");
var mlf_chat = {
	CookiesWrap: {
		get: function(key){
			var value = localStorage.getItem(key);
			if(!value) value = Cookies.get(key);
			return value;
		},
		set: function(key,value,opt){
			localStorage.setItem(key,value);
			Cookies.set(key,value,opt);
			return;
		}
	},
	pushstream: null,
	mlf_chat_user: {},
	ml_chatPath: 'https://g520.ru/game.client.v.1/chat/',
	lastreplay:[],
	debug: false,
	lastcheck: 0,
	lastCord:false,
	//audio: [new Audio('https://g520.ru/upload/alice-sounds-game-ping-1.mp3')],
	playAudio:function(key){
		/*if(!key) key = 0;
		this.audio[0].load();
		setTimeout(function() {
			mlf_chat.audio[0].play();
		},0);
		*/
		if(!key) key = 'ping';
		audio.play(key);
	},
	sortEnique: function(arr){
		var res = [];
		arr.sort();
		//var i = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i] != arr[i+1]){	
				res.push(arr[i]);
			}
		}
		return res;
	},
	addCookie: function(user){
		var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');
		
		if(cur_cookie){
			cur_cookie = cur_cookie.toString().split(',');
		}else{
			cur_cookie = [];
		}
		
		cur_cookie.push(user);
		
		cur_cookie = mlf_chat.sortEnique(cur_cookie);
		
		mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT', cur_cookie.join(','), {expires: 30});
	},
	removeCookie: function(user){
		var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');
		if(cur_cookie){
			cur_cookie = cur_cookie.toString().split(',');
		}else{
			cur_cookie = [];
		}
		var new_c = [];
		var k;
		for(k in cur_cookie){
			cur_cookie[k] = parseInt(cur_cookie[k]);
			if((cur_cookie[k] > 0) && user){
				if(cur_cookie[k]!=user){
					new_c.push(cur_cookie[k]);
				}
			}
		}
		
		new_c = mlf_chat.sortEnique(new_c);
		
		mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT', new_c.join(','), {expires: 30});
	},
	checkDel: function(){
		if(mlf_chat.mlf_chat_user.isDel){
			$('#chatWrapper').addClass('chatWrapper_isDel');
		}
	},
	deleteItem: function(id){
		var from_user_id = $('#from_user_id').val();
		var token = $('#chat_token').val();
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/delete.php',
			data: {key: gkGame.autKey, from_user_id: from_user_id, token: token, id: id},
			dataType : "json",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				if(data.RES == 'ERR'){
					mlf_chat.showError(data.ERR.join('.<br>'));
				}
			},
			error: function (){
				
			}
		});
	},
	sendPrigl: function(id){
		var from_user_id = $('#from_user_id').val();
		var token = $('#chat_token').val();
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/prigl.php',
			data: {key: gkGame.autKey, from_user_id: from_user_id, token: token, id: id, mode: 'send'},
			dataType : "json",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				if(data.RES == 'ERR'){
					mlf_chat.showError(data.ERR.join('.<br>'));
				}else{
					mlf_chat.showError('Игрок приглашен.');
				}
			},
			error: function (){
				
			}
		});
	},
	banUser: function(){
		var frm = {};
		frm.from_user_id = $('#from_user_id').val();
		frm.token = $('#chat_token').val();
		//var form_data = {};
		
		$('#chatWrapper .banForm input, #chatWrapper .banForm select').each(function(){
			var name = $(this).attr('name');
			frm[name] = $(this).val();
		});
		
		
		if(mlf_chat.debug) console.log(frm);
		frm['key'] = gkGame.autKey;
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/ban.php',
			data: frm,
			dataType : "json",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				$('#chatWrapper .showItemMenu').removeClass('active');
				if(data.RES == 'ERR'){
					mlf_chat.showError(data.ERR.join('.<br>'));
				}
			},
			error: function (){
				
			}
		});
		
		
	},
	setReplay: function(name){
		mlf_chat.lastreplay.push(name);
		if(mlf_chat.lastreplay.length>3) {
			mlf_chat.lastreplay.splice(0,1);
		}
		if(mlf_chat.debug) console.log(mlf_chat.lastreplay);
		if(mlf_chat.debug) console.log(name);
		var pre_tex = '';
		var k;
		for(k in mlf_chat.lastreplay){
			if(k<3) {
				if(pre_tex.indexOf(mlf_chat.lastreplay[k]) === -1){
					pre_tex += mlf_chat.lastreplay[k]+', ';
				}
			}
		}
		$('#chatWrapper #chat_text').val(pre_tex);
		$('#chatWrapper #chat_text').focus();
	},
	message: function(text, id, channel){
		var data = JSON.parse(Base64.decode(text));
		if(mlf_chat.debug) console.log([data, text, id, channel]);
		
		if(data.MODE == 'add'){
			
			mlf_chat.playAudio('mess');
			
			var addClass = '';
			if(mlf_chat.mlf_chat_user.name){
				if(data.MESS.indexOf(mlf_chat.mlf_chat_user.name)>-1) {
					addClass += ' item_active';
					mlf_chat.playAudio();
				}
			}
			if(mlf_chat.mlf_chat_user.id == data.USER_FROM.userId){
				addClass += ' item_user';
			}
			var t = new Date(data.TIME_ADD*1000);
			var ht = '<div class="item'+addClass+'" data-id="'+data.ID+'" data-user="'+data.USER_FROM.userId+'" data-username="'+data.USER_FROM.userName+'" id="item_mess_'+data.ID+'">'+
				'<div class="logo">'+
					'<a href="'+data.USER_FROM.userProfile+'" target="_blank"><img src="'+data.USER_FROM.userAvatar+'" class="chatbro_message_image" width="32px" height="32px"></a>'+
					'<span class="type type_'+data.USER_FROM.type+'">'+data.USER_FROM.type+'</span>'+
				'</div>'+
				'<div class="text">'+
					'<div class="text_name">'+
						'<a class="name" href="'+data.USER_FROM.userProfile+'" target="_blank">'+data.USER_FROM.userName+'</a> <span class="tmDate" data-time="'+data.TIME_ADD+'">в '+((t.getHours()<10?'0':'')+t.getHours()+':'+(t.getMinutes()<10?'0':'')+t.getMinutes())+'</span>'+
						'<a href="#" class="delete">X</a>'+
						'<a href="#" class="replay">ответ</a>'+
						
					'</div>'+
					'<div class="text_input">'+
						''+data.MESS+''+
					'</div>'+
				'</div>'+
			'</div>';
			
			var ma = mlf_chat.getDomMessBlockActive();
			var scrollH = 0;
			if(ma){
				scrollH = ma.scrollHeight - ma.scrollTop - $(".messages_active").height();
			}
			$('.chat_content .messages_'+data.USER_TO.userId+' .wrapp_mess').append(ht);
			
			if($('.chat_content .messages_'+data.USER_TO.userId).hasClass('messages_active')){
			
				if(ma && scrollH <= 80){
					$(".messages_active").scrollTop(ma.scrollHeight);
				}
			
			}else{
				
				
				$('#chat_room_'+data.USER_TO.userId).removeClass('new_mess').addClass('new_mess');
				
			}
			
			
		}else if(data.MODE == 'get_ls'){
			
			var from_user_id = $('#from_user_id').val();
			
			if((data.USER_TO == from_user_id) || (data.USER_FROM == from_user_id)){
				
				mlf_chat.playAudio('mess');
				
				var createMsgWrap = false;
				
				if($('#chatWrapper .messages_'+data.USER_TO).html()){
					if(!$('#chat_room_'+data.USER_TO).hasClass('active')){
						$('#chat_room_'+data.USER_TO).removeClass('new_mess').addClass('new_mess');
						mlf_chat.playAudio();
					}
				}else{
					if(data.USER_TO != from_user_id){
						$('#chatWrapper .chat_room').append('<a href="#" id="chat_room_'+data.USER_TO+'" class="new_mess" data-chat="'+data.USER_TO+'">'+data.USER_TO_NAME+'<span class="close">X</span></a>');
						$('#chatWrapper .chat_content').append('<div class="messages messages_'+data.USER_TO+' messages_active"><div class="wrapp_mess"></div></div>');
						mlf_chat.getStartPage(data.USER_TO);
						mlf_chat.setSizes();
						mlf_chat.addCookie(data.USER_TO);
						createMsgWrap = true;
					}
				}
				if($('#chatWrapper .messages_'+data.USER_FROM).html()){
					
					if(!$('#chat_room_'+data.USER_FROM).hasClass('active')){
						$('#chat_room_'+data.USER_FROM).removeClass('new_mess').addClass('new_mess');
						mlf_chat.playAudio();
					}
					
				}else{
					if(data.USER_FROM != from_user_id){
						$('#chatWrapper .chat_room').append('<a href="#" id="chat_room_'+data.USER_FROM+'" class="new_mess" data-chat="'+data.USER_FROM+'">'+data.USER_FROM_NAME+'<span class="close">X</span></a>');
						$('#chatWrapper .chat_content').append('<div class="messages messages_'+data.USER_FROM+' messages_active"><div class="wrapp_mess"></div></div>');
						mlf_chat.getStartPage(data.USER_FROM);
						mlf_chat.setSizes();
						mlf_chat.addCookie(data.USER_FROM);
						mlf_chat.playAudio();
						createMsgWrap = true;
					}
				}
				
				if(data.USER_TO != from_user_id){
					if(!createMsgWrap) mlf_chat.getMessFromId(data.USER_TO,data.USER_FROM,data.ID);
				}else{
					if(!createMsgWrap) mlf_chat.getMessFromId(data.USER_FROM,data.USER_TO,data.ID);
				}
			}
			
		}else if(data.MODE == 'delete'){
			
			var k;
			for(k in data.ID){
				$('#item_mess_'+data.ID[k]).remove();
			}
			
		}else if(data.MODE == 'userlist'){
			if(mlf_chat.debug) console.log(data.USERS);
			
			var curDate = new Date().getTime() / 1000;
			var onlCount = 0;
			
			$('#chatWrapper .chatUsers .wrapUsers .userItem').removeClass('userItem_online');
			
			var k;
			for(k in data.USERS){
				
				var online = false;
				if((data.USERS[k]['time'] + 15*60) > curDate) {
					onlCount = onlCount+1;
					online = true;
				}
				
				if($('#chatWrapper .chatUsers .wrapUsers .userItem_'+data.USERS[k]['id']).html()){
					var t = new Date(data.USERS[k]['time']*1000);
					$('#chatWrapper .chatUsers .wrapUsers .userItem_'+data.USERS[k]['id']+' a').html('<span class="date" data-time="'+data.USERS[k]['time']+'">'+((t.getHours()<10?'0':'')+t.getHours()+':'+(t.getMinutes()<10?'0':'')+t.getMinutes())+'</span> '+data.USERS[k]['name']);
					$('#chatWrapper .chatUsers .wrapUsers .userItem_'+data.USERS[k]['id']+' a').attr('data-username',data.USERS[k]['name']);
					$('#chatWrapper .chatUsers .wrapUsers .userItem_'+data.USERS[k]['id']+' a').attr('data-user',data.USERS[k]['id']);
				}else{
					var t = new Date(data.USERS[k]['time']*1000);
					$('#chatWrapper .chatUsers .wrapUsers').prepend('<div class="userItem userItem_'+data.USERS[k]['id']+'"><a href="'+data.USERS[k]['profile']+'" data-username="'+data.USERS[k]['name']+'" data-user="'+data.USERS[k]['id']+'"><span class="date" data-time="'+data.USERS[k]['time']+'">'+((t.getHours()<10?'0':'')+t.getHours()+':'+(t.getMinutes()<10?'0':'')+t.getMinutes())+'</span> '+data.USERS[k]['name']+'</a></div>');
				}
				
				if(online){
					$('#chatWrapper .chatUsers .wrapUsers .userItem_'+data.USERS[k]['id']).addClass('userItem_online');
				}
			}
			
			$('.showUserList').html(onlCount);
			
		}
		
		if(data.MODE != 'userlist'){
			mlf_chat.checkDate();
			mlf_chat.setCord();
		}
		
	},
	showUserListSort: function(){
		var newHtml = [];
		$('#chatWrapper .chatUsers .wrapUsers .userItem').each(function(){
			newHtml.push([$(this).find('.date').attr('data-time'),'<div class="'+$(this).attr('class')+'">'+$(this).html()+'</div>']);
		});
		newHtml.sort(function(a, b) {
			return b[0] - a[0];
		});
		$('#chatWrapper .chatUsers .wrapUsers').html('');
		var k;
		for(k in newHtml){
			$('#chatWrapper .chatUsers .wrapUsers').append(newHtml[k][1]);
		}
	},
	checkDate: function(){
		
		var curDate = new Date().getTime() / 1000;
		if(!mlf_chat.lastcheck) mlf_chat.lastcheck = curDate - 60*6;
		
		if((curDate - 60*5) > mlf_chat.lastcheck) {
			//обновить онлайн
			
			if(mlf_chat.debug) console.log([curDate, mlf_chat.lastcheck]);
			
			mlf_chat.lastcheck = curDate;
			
			var from_user_id = $('#from_user_id').val();
			var token = $('#chat_token').val();
			
			$.ajax({
				url: mlf_chat.ml_chatPath+'ajax/updateUserTime.php',
				data: {key: gkGame.autKey, from_user_id: from_user_id, token: token},
				dataType : "json",
				type: "POST",
				cache: false,
				success: function (data, textStatus) {
				},
				error: function (){
				}
			});
			
		}
	},
	chat_submit: function(){
		var formData = {};
		
		$('#send_mess input, #send_mess textarea').each(function(){
			var name = $(this).attr('name');
			formData[name] = $(this).val();
		});
		
		
		$('#chatWrapper .chat_send').append('<div class="preload"><div class="load"></div></div>');
		formData['key'] = gkGame.autKey;
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/send.php',
			data: formData,
			dataType : "json",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				if(mlf_chat.debug) console.log(data);
				if(data.RES == 'OK'){
					$('#chat_text').val('');
					var ma = mlf_chat.getDomMessBlockActive();
					if(ma){
						$(".messages_active").scrollTop(ma.scrollHeight);
					}
					
					mlf_chat.lastreplay = [];
					
					$('#chatWrapper .photo_btn a').removeClass('active');
					$('#chatWrapper .file-selectdialog').hide();
					$('#chatWrapper .files-list tr').remove();
					$('#chatWrapper input[name="MESS_USER_PHOTO"]').remove();
					
				}else if(data.RES == 'ERR'){
					mlf_chat.showError(data.ERR.join('.<br>'));
				}
				$('#chatWrapper .chat_send .preload').remove();
			},
			error: function (){
				
			}
		});
	},
	setCord: function(){
		if($("#chatWrapper").attr('data-move')==1){
			var cord = [$('#chatMainWrapper').offset().top, $('#chatMainWrapper').offset().left, $('#chatMainWrapper').width(), $('#chatMainWrapper').height()];
			var setOn = false;
			if(mlf_chat.lastCord){
				if(cord.join(',') != mlf_chat.lastCord.join(',')){
					setOn = true;
				}
			}else{
				setOn = true;
			}
			if(setOn){
				if(mlf_chat.debug) console.log(cord);
				mlf_chat.lastCord = cord;
				mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_SIZES', cord.join(','), {expires: 30});
			}
		}
	},
	setSizes: function(){
		//console.log($(window).width());
		if($("#chatWrapper").attr('data-move')==1){
			
			if(!mlf_chat.lastCord){
				var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT_SIZES');
				
				if(cur_cookie){
					cur_cookie = cur_cookie.toString().split(',');
					//console.log(cur_cookie);
					if(cur_cookie.length == 4){
						if($(window).width()>=640){
							if(cur_cookie[0]>$(window).height()) cur_cookie[0] = 20;
							if(cur_cookie[1]>$(window).width()) cur_cookie[1] = 20;
							//$("#chatMainWrapper").css({'top':cur_cookie[0]+'px','left':cur_cookie[1]+'px','width':cur_cookie[2]+'px','height':cur_cookie[3]+'px'});
							var checkPos = mlf_chat.checkPosition(cur_cookie[0], cur_cookie[1]);
							//$("#chatMainWrapper").css({'top':checkPos[0]+'px','left':checkPos[1]+'px'});
							mlf_chat.lastCord = cur_cookie;
						}
					}
				}
			}
			$('#chatWrapper .closeChat').show();
		}
		
		//var h = $(window).height()-$('.logoBlock').height()-$('.legendMenu').height()-70;
		//$('#chatWrapper').height(h);
		$('#chatWrapper').css({'height':$( "#chatMainWrapper" ).height()+'px','width':$( "#chatMainWrapper" ).width()+'px'});
		var h = $('#chatWrapper').height();
		var w = $('#chatWrapper').width();
		$('#chatWrapper').height(h);
		$('#chatWrapper .chat_content').css({'height':(h-$('#chatWrapper .top_row').height()-$('#chatWrapper .chat_send').height())+'px', 'top':$('#chatWrapper .top_row').height()+'px'});
		$('#chatWrapper .messages').css({'height':(h-$('#chatWrapper .top_row').height()-$('#chatWrapper .chat_send').height())+'px'});
		$('#chatWrapper .messages .wrapp_mess').css({'padding-bottom':($('#chatWrapper .chat_room').height()+10)+'px'});
		if((w-184)<300) {
			$('#chatWrapper .messages').css({'width':w+'px'});
			$('#chatWrapper .chatUsers').removeClass('active');
		}else{
			$('#chatWrapper .messages').css({'width':(w-184)+'px'});
			$('#chatWrapper .chatUsers').addClass('active');
		}
		$('#chatWrapper #send_mess').css({'width':(w-114)+'px'});
		
		//var checkPos = mlf_chat.checkPosition($("#chatMainWrapper").offset().top, $("#chatMainWrapper").offset().left);
		//$("#chatMainWrapper").css({'top':checkPos[0]+'px','left':checkPos[1]+'px'});
	},
	getDomMessBlockActive: function(){
		var messages_active = document.getElementsByClassName("messages_active");
		if(messages_active.length){
			return document.getElementsByClassName("messages_active")[0];
		}
		return false;
	},
	getMessFromId: function(user, user_to, id){
		if(mlf_chat.debug) console.log([user, user_to, id]);
		var first = $('.messages_'+user+' .wrapp_mess .item').eq(0);
		if(first){
			var from_user_id = $('#from_user_id').val();
			var token = $('#chat_token').val();
			
			$.ajax({
				url: mlf_chat.ml_chatPath+'ajax/getMessages.php',
				data: {key: gkGame.autKey, to_user_id: user, from_user_id: from_user_id, token: token, id: id},
				dataType : "html",
				type: "POST",
				cache: false,
				success: function (data, textStatus) {
					
					var ma = mlf_chat.getDomMessBlockActive();
					var scrollH = 0;
					if(ma){
						scrollH = ma.scrollHeight - ma.scrollTop - $(".messages_active").height();
					}
					$('.messages_'+user+' .wrapp_mess').append(data);
					
					if(ma && scrollH <= 80){
						$(".messages_active").scrollTop(ma.scrollHeight);
					}
					
				},
				error: function (){
					
				}
			});
			
		}
	},
	getStartPage: function(user){
		//console.log(user);
		$('.messages_'+user+' .wrapp_mess .load_more').remove();
		
		var first = $('.messages_'+user+' .wrapp_mess .item').eq(0);
		//console.log(first);
		var lastId = 0;
		if(first){
			lastId = first.attr('data-id');
		}
		
		//var to_user_id = $('#to_user_id').val();
		var from_user_id = $('#from_user_id').val();
		var token = $('#chat_token').val();
		
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/getMessages.php',
			data: {key: gkGame.autKey, lastId: lastId, to_user_id: user, from_user_id: from_user_id, token: token},
			dataType : "html",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				$('.messages_'+user+' .wrapp_mess').prepend(data);
				var ma = mlf_chat.getDomMessBlockActive();
				if(!lastId){
					if(ma) $(".messages_active").scrollTop(ma.scrollHeight);
				}else{
					var scrollH = 0;
					if(ma){
						scrollH = ma.scrollHeight - ma.scrollTop - $(".messages_active").height();
					}
					if(ma && scrollH <= 80){
						$(".messages_active").scrollTop(ma.scrollHeight);
					}
				}
				mlf_chat.setSizes();
				
			},
			error: function (){
				
			}
		});
	},
	getActiveChat: function(){
		var from_user_id = $('#chatWrapper').attr('data-user');
		var token = $('#chatWrapper').attr('data-token');
		
		var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');
		
		$.ajax({
			url: mlf_chat.ml_chatPath+'ajax/getActiveChat.php',
			data: {key: gkGame.autKey, from_user_id: from_user_id, token: token, LAST_USERS_CHAT: cur_cookie},
			dataType : "html",
			type: "POST",
			cache: false,
			success: function (data, textStatus) {
				$('#chatWrapper').prepend(data);
				
				$('.showUserList').html($('#chatWrapper .showUserList').html());
				
				$('#chatWrapper .chat_room a').each(function(){
					var u_id = $(this).attr('data-chat');
					if(parseInt(u_id) > 2) {
						$('#chatWrapper .chat_content').append('<div class="messages messages_'+u_id+' messages_active"><div class="wrapp_mess"></div></div>');
						mlf_chat.getStartPage(u_id);
					}
				});
				
				mlf_chat.checkDel();
				//setTimeout(function(){
					mlf_chat.setSizes();
				//},500);
				var ma = mlf_chat.getDomMessBlockActive();
				if(ma){
					$(".messages_active").scrollTop(ma.scrollHeight);
				}
				
				
				$('#send_mess').keypress(function (e) {
				  if (e.which == 13) {
					mlf_chat.chat_submit();
					return false;
				  }
				});
				
				mlf_chat.checkDate();
				
				if(!mlf_chat.mlf_chat_user.id) mlf_chat.setGuestMode();
				//debugger;
			},
			error: function (){
				
			}
		});
		
	},
	showError: function(text){
		var ht = '<a href="#" class="close">закрыть</a><div class="errorMsg">'+text+'</div>';
		$('#chatWrapper .showItemMenu .wrap').html(ht);
		$('#chatWrapper .showItemMenu').addClass('active');
	},
	init: function(){
		mlf_chat.getActiveChat();
		
		if($("#chatWrapper").attr('data-move')==1){
			var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT_OPEN');
			if(cur_cookie == '1'){
				$('#chatMainWrapper').show();
				$('.chatHeadBtn').hide();
			}else{
				$('.chatHeadBtn').show();
			}
		}else{
			$('#chatMainWrapper').show();
		}
	},
	checkPosition: function(top,left){
		//console.log([top,left]);
		if($('#chatMainWrapper').width() && $('#chatMainWrapper').height() && $(window).width() && $(window).height()){
		
			var min_left = 10;
			var max_left = $(window).width() - $('#chatMainWrapper').width() - 10;
			if(left < min_left) left = min_left;
			if(left > max_left) left = max_left;
			var min_top = 10;
			var max_top = $(window).height() - $('#chatMainWrapper').height() - 50;
			if(top < min_top) top = min_top;
			if(top > max_top) top = max_top;
			
		}
		
		return [top,left];
		
		
	},
	setGuestMode: function(){
		$('#chatWrapper .load_more').hide();
		$('#chatWrapper .chat_room').hide();
		$('#chatWrapper .chat_send').html('<a href="#" class="guestBtn toLevel1" data-page="login/" title="вход в игру">вход в игру</a>');
	},
	loadChat: function(){ //старт загрузки чата
		
		$.ajax({
				url: gkGame.curUrl+"chat/load.php",
				data: {key: gkGame.autKey},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('body').append(data);
					
					mlf_chat.mlf_chat_user = {
						'id': parseInt($('#chatWrapper').attr('data-user')),
						'name': $('#chatWrapper').attr('data-name'),
						'isBan': parseInt($('#chatWrapper').attr('data-isBan')),
						'isDel': parseInt($('#chatWrapper').attr('data-isDel')),
						'isAdm': parseInt($('#chatWrapper').attr('data-isAdm')),
					};
					
					var h = $(window).height()-$('.bottomGameBlockWrap').height()-70;
					var w = $('#chatMainWrapper').width();
					$('#chatMainWrapper').css({'height':h+'px','max-height':h+'px'});
					
					$( "#chatWrapper" ).attr('data-move',1);
					$('body').append('<div class="chatHeadBtn"><a href="#"><span class="showUserList"></span></a></div>');
					
					if($(window).width()<640){
						$( "#chatMainWrapper" ).css({'position':'fixed','bottom':'0px','left':'0px;','width':'100%','height':($(window).height()-120)+'px','max-height':($(window).height()-120)+'px'});
					}else{
					
						$( "#chatMainWrapper" ).css({'position':'fixed','top':'20px','right':'20px','width':'320px','height':($(window).height()-200)+'px'});
						
						$( "#chatMainWrapper" ).on( "resize", function( event, ui ) {
							//mlf_chat.lastCord = null;
							
							mlf_chat.setSizes();
						});
						
					}
					
					mlf_chat.pushstream = new PushStream({
					  host: 'push.mlife.by',
					  port: 443,
					  modes: "websocket",
					  tagArgument: 'tag',
					  timeArgument: 'time',
					  useJSONP: true,
					  timeout: 30000000000,
					  useSSL: true,
					  backtrack:10
					});
					mlf_chat.pushstream.onmessage = mlf_chat.message;
					mlf_chat.pushstream.addChannel($('#chatWrapper').attr('data-chanel'));
					mlf_chat.pushstream.connect();
					
					mlf_chat.initHandlers();
					setTimeout(function(){
						mlf_chat.init();
					},500);
					
					
				}
		});
		
	},
	initHandlers: function(){
		
			$(document).on('click','#chatWrapper .load_more a',function(e){
				e.preventDefault();
				//console.log($(this));
				var chat = $(this).attr('data-chat');
				mlf_chat.getStartPage(chat);
			});
			
			$(document).on('click','.closeChat',function(e){
				e.preventDefault();
				$('#chatMainWrapper').hide();
				mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', '0', {expires: 30});
				$('.chatHeadBtn').show();
				mlf_chat.setSizes();
			});
			$(document).on('click','.send_chat_mess',function(e){
				e.preventDefault();
				mlf_chat.chat_submit();
			});
			
			$(document).on('click','.chatHeadBtn a',function(e){
				e.preventDefault();
				$('#chatMainWrapper').show();
				$('.chatHeadBtn').hide();
				mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', 1, {expires: 30});
				mlf_chat.setSizes();
			});

			$(document).on('click','#chatWrapper .chat_room a.active .close',function(){
				
				mlf_chat.removeCookie($(this).parents('a').attr('data-chat'));
				
				$('#chatWrapper .messages_'+$(this).attr('data-chat')).remove();
				$('#chat_room_'+$(this).parents('a').attr('data-chat')).remove();
				
				$('#chatWrapper .messages').removeClass('messages_active');
				$('#chatWrapper .chat_room a').removeClass('active');
				
				$('#chat_room_1').addClass('active');
				$('#chat_room_1').removeClass('new_mess');
				$('#chatWrapper .messages_1').addClass('messages_active');
				
				$('#chatWrapper #to_user_id').val(1);
				
				mlf_chat.setSizes();
				
			});

			$(document).on('click','#chatWrapper .chat_room a',function(e){
				e.preventDefault();
				if($(this).hasClass('active')) return;
				
				$('#chatWrapper .messages').removeClass('messages_active');
				$('#chatWrapper .chat_room a').removeClass('active');
				
				$(this).addClass('active');
				$(this).removeClass('new_mess');
				$('#chatWrapper .messages_'+$(this).attr('data-chat')).addClass('messages_active');
				
				$('#chatWrapper #to_user_id').val($(this).attr('data-chat'));
				mlf_chat.setSizes();
			});

			$(document).on('click','#chatWrapper .item .replay',function(e){
				e.preventDefault();
				mlf_chat.setReplay($(this).parents('.text_name').find('.name').text());
				
				return;
			});
			
			$(document).on('click','#chatWrapper .item .delete',function(e){
				e.preventDefault();
				var messId = $(this).parents('.item').attr('data-id');
				mlf_chat.deleteItem(messId);
				
				//$(this).parents('.item').hide();
			});
			
			$(document).on('click','#chatWrapper .showItemMenu .close',function(e){
				e.preventDefault();
				$('#chatWrapper .showItemMenu').removeClass('active');
				//Cookies.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', '0', {expires: 30});
				mlf_chat.setSizes();
			});
			
			$(document).on('click','#chatWrapper .openMap',function(e){
				e.preventDefault();
				$('#chatWrapper .showItemMenu').removeClass('active');
			});
			
			$(document).on('click','#chatWrapper .wrapUsers .userItem a',function(e){
				e.preventDefault();
				
				var ht = '';
				ht += '<a href="#" class="close">закрыть</a><div class="userWrap"><div class="name">'+$(this).attr('data-username')+'</div>'+
				'<div class="userNumber">номер королевства: '+$(this).attr('href').replace('https://g520.ru/','').replace('?id=','')+'</div>'+
				'<ul><li><a href="#" class="openMap" data-user="'+$(this).attr('href').replace('https://g520.ru/','').replace('?id=','')+'">посмотреть карту</li>';
				
				if(mlf_chat.mlf_chat_user.id && $(this).attr('data-user') != mlf_chat.mlf_chat_user.id){
					ht += '<li><a class="lsChat" href="#" data-id="'+$(this).attr('data-user')+'" data-name="'+$(this).attr('data-username')+'">личный чат</a></li>';
					ht += '<li><a class="setPrigl" href="#" data-id="'+$(this).attr('data-user')+'">пригласить на карту</a></li>';
				}
				
				if(mlf_chat.mlf_chat_user.isBan && ($(this).attr('data-user') != mlf_chat.mlf_chat_user.id)){
					ht += '<li><a class="toBanUser" data-id="'+$(this).attr('data-user')+'" href="#">заблокировать</a></li>';
				}
				
				ht += '</ul>'+
				'</div>';
				
				$('#chatWrapper .showItemMenu .wrap').html(ht);
				
				$('#chatWrapper .showItemMenu').addClass('active');
				
			});
			
			$(document).on('click','#chatWrapper .item .logo a, #chatWrapper .item a.name',function(e){
				e.preventDefault();
				
				var item = $(this).parents('.item');
				
				var ht = '';
				ht += '<a href="#" class="close">закрыть</a><div class="userWrap"><div class="name">'+item.attr('data-username')+'</div>'+
				'<div class="userNumber">номер королевства: '+item.find('.name').attr('href').replace('https://g520.ru/','').replace('?id=','')+'</div>'+
				'<ul><li><a href="#" class="openMap" data-user="'+item.find('.name').attr('href').replace('https://g520.ru/','').replace('?id=','')+'">посмотреть карту</li>';
				
				if(mlf_chat.mlf_chat_user.id && item.attr('data-user') != mlf_chat.mlf_chat_user.id){
					ht += '<li><a class="lsChat" href="#" data-id="'+item.attr('data-user')+'" data-name="'+item.attr('data-username')+'">личный чат</a></li>';
					ht += '<li><a class="setPrigl" href="#" data-id="'+item.attr('data-user')+'">пригласить на карту</a></li>';
				}
				
				if(mlf_chat.mlf_chat_user.isBan && (item.attr('data-user') != mlf_chat.mlf_chat_user.id)){
					ht += '<li><a class="toBanUser" data-id="'+item.attr('data-user')+'" href="#">заблокировать</a></li>';
				}
				
				ht += '</ul>'+
				'</div>';
				
				$('#chatWrapper .showItemMenu .wrap').html(ht);
				
				$('#chatWrapper .showItemMenu').addClass('active');
			});
			
			$(document).on('click','#chatWrapper .setPrigl',function(e){
				e.preventDefault();
				var user = $(this).attr('data-id');
				
				mlf_chat.sendPrigl(user);
				
			});
			
			$(document).on('click','#chatWrapper .lsChat',function(e){
				e.preventDefault();
				var user = $(this).attr('data-id');
				//console.log('#chatWrapper .lsChat');
				//debugger;
				if($('#chatWrapper .messages_'+user).html()){
					$('#chatWrapper .messages').removeClass('messages_active');
					$('#chatWrapper .chat_room a').removeClass('active');
					$('#chatWrapper #chat_room_'+user).addClass('active');
					$('#chatWrapper #chat_room_'+user).removeClass('new_mess');
					$('#chatWrapper .messages_'+user).addClass('messages_active');
					$('#chatWrapper #to_user_id').val(user);
				}else{
					$('#chatWrapper .messages').removeClass('messages_active');
					$('#chatWrapper .chat_room a').removeClass('active');
					$('#chatWrapper .chat_content').append('<div class="messages messages_'+user+' messages_active"><div class="wrapp_mess"></div></div>');
					$('#chatWrapper .chat_room').append('<a href="#" id="chat_room_'+user+'" class="active" data-chat="'+user+'">'+$(this).attr('data-name')+'<span class="close">X</span></a>');
					mlf_chat.getStartPage(user);
					mlf_chat.setSizes();
					$('#chatWrapper #to_user_id').val(user);
					mlf_chat.addCookie(user);
				}
				
				$('#chatWrapper .showItemMenu').removeClass('active');
				
			});

			$(document).on('click','.toBanUser',function(e){
				e.preventDefault();
				
				var user = $(this).attr('data-id');
				
				var ht = '';
				ht += '<a href="#" class="close">закрыть</a><form class="banForm" onsubmit="return false;"><input type="hidden" name="user" value="'+user+'"/><select name="time">';
				ht += '<option value="30">разблокировать</option>';
				ht += '<option value="600">10 минут</option>';
				ht += '<option value="900">15 минут</option>';
				ht += '<option value="1800">30 минут</option>';
				ht += '<option value="3600">1 час</option>';
				ht += '<option value="14400">4 часа</option>';
				ht += '<option value="28800">8 часов</option>';
				ht += '<option value="43200">12 часов</option>';
				ht += '<option value="86400">1 день</option>';
				ht += '<option value="172800">2 дня</option>';
				ht += '<option value="259200">3 дня</option>';
				ht += '<option value="604800">1 неделя</option>';
				ht += '<option value="1209600">2 недели</option>';
				ht += '</select><input type="text" name="povod" value="" placeholder="причина"/><a href="#" class="submit" name="submit">подтвердить</a></form>';
				
				$('#chatWrapper .showItemMenu .wrap').html(ht);
				
			});
			
			$(document).on('click','.banForm .submit',function(e){
				e.preventDefault();
				mlf_chat.banUser();
			});

			
			$(document).on('click','#chatWrapper .showUserList',function(e){
				e.preventDefault();
				if($('#chatWrapper .showUserList .chatUsers').hasClass('active')){
					$('#chatWrapper .showUserList .chatUsers').removeClass('active');
				}else{
					$('#chatWrapper .showUserList .chatUsers').removeClass('active').addClass('active');
					mlf_chat.showUserListSort();
				}
			});
			//
			
			$(document).on('click','#chatWrapper .showUserList',function(e){
				e.preventDefault();
				if($('#chatWrapper .chatUsers').hasClass('active')){
					$('#chatWrapper .chatUsers').removeClass('active');
				}else{
					$('#chatWrapper .chatUsers').removeClass('active').addClass('active');
				}
			});
			
			$(document).on('click','#chatWrapper .photo_btn a',function(e){
				e.preventDefault();
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					$('#chatWrapper .file-selectdialog').hide();
					//$('#chatWrapper .files-list tr').remove();
					//$('#chatWrapper input[name="MESS_USER_PHOTO"]').remove();
				}else{
					BX.onCustomEvent(BX('file-selectdialog-chatfile').parentNode, 'BFileDLoadFormController');
					$(this).addClass('active');
					$('#chatWrapper .file-selectdialog').show();
				}
			});

			$(window).on('resize',function() {
				if(!mlf_chat.lastCordLock){
				mlf_chat.lastCord = null;
				}
				mlf_chat.setSizes();
			});
			window.addEventListener("orientationchange", function() {
				if(!mlf_chat.lastCordLock){
				mlf_chat.lastCord = null;
				}
				mlf_chat.setSizes();
			});
			
	}
};

export default mlf_chat;