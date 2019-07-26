require(["jquery"], function($) {
	
	require(["modal"]);
	require(["base64"]);
	require(["pushstream"]);
	
	require(['chat']);
	
	window.goldGame = gkGame; //old game alias
	//window.mlf_chat = mlf_chat;
	
	window.audioElements = [
	new Audio('https://g520.ru/upload/alice-sounds-game-win-1.mp3'),
	new Audio('https://g520.ru/upload/alice-sounds-game-win-1.mp3'),
	new Audio('https://g520.ru/upload/alice-sounds-things-sword-2.mp3')
	];
	window.playAudioElement = function(key){
		//console.log(key);
		//console.log(typeof window.audioElements[key]);
		if(typeof window.audioElements[key] !== 'undefined'){
			window.audioElements[key].play();
		}
	}

	
	$(document).ready(function(){
		
		var init_game_yandex = function(key){
			gkGame.autKey = key;
			//YaGames.init();
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
			gkGame.loader.loader.onComplete.add(function(e){
				gkGame.debug('loader.onComplete',e);
				if(gkGame.app === null) {
					mlf_chat.loadChat();
				}
				gkGame.init_game();
			});
		}
		
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
					init_game_yandex(playerAut);
				}
			});
		}else{
			init_game_yandex(playerAut);
		}
	});
	
	$(window).on('resize',function() {
		gkGame.setResize();
		gkGame.setCenter();
	});
	$(window).on('orientationchange',function() {
		gkGame.setResize();
		gkGame.setCenter();
	});
	
	$(document).on('click','.commandButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		if(command == 'start_move'){
			gkGame.drawSetka();
			$('#contentModal').modal('hide');
			$('#contentModal2').modal('hide');
			return;
		}
		
		$('#contentModal .modal-body').append('<div class="preload"><div class="load"></div></div>');
		gkGame.sendCommand(command,function(dt){
			if(!dt){
				$('#contentModal2').modal('hide');
				$.ajax({
						url: gkGame.curUrl+'api/game/ratusha/',
						data: {key: gkGame.autKey},
						dataType : "html",
						type: "GET",
						success: function (data, textStatus) {
							$('#contentModal .modal-body').html(data);
						}
				});
			}else{
				//show_message
			}
		});
	});
	
	$(document).on('click','.commandResButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		gkGame.sendCommand(command,function(dt){
			//console.log(dt);
			if($('#contentModal2 .modal-body .messResWrapper .message-container').length >= 2){
				var cn = $('#contentModal2 .modal-body .messResWrapper .message-container').length - 1;
				$('#contentModal2 .modal-body .messResWrapper .message-container').each(function(){
					if(cn > 0) {
						cn -= 1;
						$(this).slideUp();
					}
				});
			}
			$('#contentModal2 .modal-body .messResWrapper').append(dt);
		});
	});
	
	
	$(document).on('click','.commandTorgButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		gkGame.sendCommand(command,function(dt){
			//$('.commandTorgButton_prepare_res').remove();
			//console.log(dt);
			if($('#contentModal2 .modal-body .messResWrapper .message-container').length >= 2){
				var cn = $('#contentModal2 .modal-body .messResWrapper .message-container').length - 1;
				$('#contentModal2 .modal-body .messResWrapper .message-container').each(function(){
					if(cn > 0) {
						cn -= 1;
						$(this).slideUp();
					}
				});
			}
			$('#contentModal2 .modal-body .messResWrapper').append(dt);
			if($('#contentModal2 .modal-body .messResWrapper .commandTorgButton_prepare_res').html()) {
				$('#contentModal2 .modal-body .rowResUpdate').html($('#contentModal2 .modal-body .messResWrapper .commandTorgButton_prepare_res').html());
				$('#contentModal2 .modal-body .messResWrapper .commandTorgButton_prepare_res').remove();
			}
		});
	});
	
	
	$(document).on('click','.commandUnitByButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/kasarm/getunits/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command, unit_1: $('#cassarm_unit_1').val(), unit_2: $('#cassarm_unit_2').val(), unit_3: $('#cassarm_unit_3').val(), unit_4: $('#cassarm_unit_4').val(), unit_5: $('#cassarm_unit_5').val() },
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
					$('#contentModal .modal-body .legendBlockCassarm').html($('#contentModal2 .modal-body .legendBlockCassarm').html());
				}
		});
		
		
	});
	
	$(document).on('click','.commandMapButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/maps/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command, user_map_from: $('#user_map_from').val(), user_map_to: $('#user_map_to').val()},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
				}
		});
		
		
	});
	
	$(document).on('click','.commandSendCoinButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/torg/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command, user_coin_send: $('#user_coin_send').val()},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
				}
		});
		
		
	});
	
	$(document).on('click','.commandUnitSendUsermapButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/kasarm/portal/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command, atc_unit_1: $('#atc_unit_1').val(), atc_unit_2: $('#atc_unit_2').val(), atc_unit_3: $('#atc_unit_3').val(), atc_unit_4: $('#atc_unit_4').val(), atc_unit_5: $('#atc_unit_5').val()},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
					
					$('#contentModal .modal-body .legendBlockCassarm').html($('#contentModal2 .modal-body .legendBlockCassarm').html());
					
				}
		});
		
		
	});
	
	$(document).on('click','.commandBufButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/bufs/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
				}
		});
		
		
	});
	
	$(document).on('click','.commandUnitRemoveButton',function(e){
		e.preventDefault();
		var command = $(this).attr('data-command');
		
		var page = gkGame.curUrl+'api/game/kasarm/';
			
		$('#contentModal2 .modal-body').append('<div class="preload"><div class="load"></div></div>');
		
		$.ajax({
				url: page,
				data: {key: gkGame.autKey, refresh: 1, cmd: command},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('#contentModal2').modal('hide');
					$('#contentModal .modal-body').html(data);
				}
		});
		
	});
	
	$(document).on('click','.toLevel1',function(e){
		e.preventDefault();
		//$('#menuModal').modal('hide');
		var url = $(this).attr('data-page');
		$('#contentModal .modal-body').html('<div class="preload"><div class="load"></div></div>');
		if($(this).hasClass('notsettitle')){
			
		}else if($(this).attr('title')){
			$('#contentModal .modal-title').html($(this).attr('title'));
		}else{
			$('#contentModal .modal-title').html($(this).html());
		}
		$('#contentModal').modal('show');
		$('#contentModal .modal-body').css({height:$(window).height()*1-$('#contentModal .modal-header').height()-36*2-60});
		
		$.ajax({
				url: gkGame.curUrl+url,
				data: {key: gkGame.autKey},
				dataType : "html",
				type: "GET",
				success: function (data, textStatus) {
					$('#contentModal .modal-body').html(data);
					if(url == 'help/units/') gkGame.calc.getCalcResult();
				}
		});
		
	});
	
	$(document).on('click','.toLevel2',function(e){
		e.preventDefault();
		//$('#menuModal').modal('hide');
		var url = $(this).attr('data-page');
		$('#contentModal2 .modal-body').html('<div class="preload"><div class="load"></div></div>');
		if($(this).hasClass('notsettitle')){
			
		}else if($(this).attr('title')){
			$('#contentModal2 .modal-title').html($(this).attr('title'));
		}else{
			$('#contentModal2 .modal-title').html($(this).html());
		}
		$('#contentModal2').modal('show');
		$('#contentModal2 .modal-body').css({height:$(window).height()*1-$('#contentModal2 .modal-header').height()-36*2-60});
		
		$.ajax({
				url: gkGame.curUrl+url,
				data: {key: gkGame.autKey},
				dataType : "html",
				type: "GET",
				success: function (data, textStatus) {
					$('#contentModal2 .modal-body').html(data);
					if(url == 'help/units/') gkGame.calc.getCalcResult();
				}
		});
		
	});
	
	$(document).on('click','.openMap',function(e){
		e.preventDefault();
		
		if(window.lockClickFix) return;
		
		//$('#menuModal').modal('hide');
		$('#contentModal').modal('hide');
		$('#contentModal2').modal('hide');
		
		var id = $(this).attr('data-user');
		var map = $(this).attr('data-map');
		var type = $(this).attr('data-type');
		if(!type) type = 'player';
		
		if(!id) id = map;
		
		if(id) gkGame.loadMap(id,type);
		
	});
	
	$(document).on('click','.bottomGameBlockTabsMenu li span',function(){
		var tabId = $(this).attr('data-tab');
		$('.bottomGameBlockTabsMenu li span').removeClass('active');
		$(this).addClass('active');
		$('.bottomGameBlock .wrap').hide();
		$('.bottomGameBlock .wrap'+tabId).show();
		$('.bottomGameBlockTabsMenu .hideTab').html('X').show();
		$('.bottomGameBlock').show();
	});

	$(document).on('click','.bottomGameBlockTabsMenu .hideTab',function(e){
		e.preventDefault();
		$('.bottomGameBlockTabsMenu li span').removeClass('active');
		$('.bottomGameBlock').hide();
		$(this).html('').hide();
	});
	
	$(document).on('click','.gameZoomBlock .zoomLnk',function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			$('.gameZoomBlock .buttons').hide();
			$(this).removeClass('active');
		}else{
			$('.gameZoomBlock .buttons').css({'display':'inline-block'});
			$(this).addClass('active');
		}
	});
	
	
	$(document).on('click','.gameZoomBlock .buttons a',function(e){
		e.preventDefault();
		gkGame.setZoom($(this).attr('data-size'));
	});
	
	$(document).on('click','.avatarList .item',function(){
		$('.avatarList .item').removeClass('active');
		$(this).addClass('active');
		var path = $(this).attr('data-path');
		//$('#contentModal2 .modal-body').html('<div class="preload"><div class="load"></div></div>');
		gkGame.setAvatar(path);
	});
	
	$(document).on('click','.commandButtonSetName',function(e){
		e.preventDefault();
		var name = $('#ggame_name_input').val();
		//$('#contentModal2 .modal-body').html('<div class="preload"><div class="load"></div></div>');
		gkGame.setUsername(name);
	});
	
	$(document).on('click','.commandButtonSetPromo',function(e){
		e.preventDefault();
		var promo = $('#ggame_promo_input').val();
		//$('#contentModal2 .modal-body').html('<div class="preload"><div class="load"></div></div>');
		gkGame.setPromo(promo);
	});
	
	$(document).on('click','.topGameBlock .moreBtnMapFriendAdd',function(e){
		e.preventDefault();
		gkGame.addFriend($(this).attr('data-user'));
		$(this).remove();
	});
	
	$(document).on('click','.topGameBlock .moreBtnMapFriendDelete',function(e){
		e.preventDefault();
		gkGame.deleteFriend($(this).attr('data-user'));
		$(this).remove();
	});
	
	window.getCalcResultSet = function(){
		return gkGame.calc.getCalcResultSet();
	};
	window.getCalcResult = function(){
		return gkGame.calc.getCalcResult();
	};

	$(document).on('submit','#kalkform',function(){
		gkGame.calc.getCalcResult();
		return false;
	});
	
	
});

