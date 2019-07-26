var gkGame = {
	debugMode: false,
	notCalcMode: false,
	
	moveMode: false,
	moveCord: [],
	
	autKey: '',
	
	curUrl: "https://g520.ru/game_yandex/",
	kef: 1.8,
	ksizes:{},
	mapId:null,
	type:null,
	mapData:null,
	
	app: null,
	viewport: null,
	
	friends: [],
	
	visible_sq_ar: [
	284,306,283,286,263,285,260,240,238,//1
	237,217,288,287,262,265,235,215,214,194,//1
	216,196,195,175,239,219,218,198,197,//1
	177,242,241,221,220,200,199,179,264,244,//1
	243,223,222,202,201,204,203,181,178,156,//1
	166,144,143,146,123,145,122,125,102,99,//2
	77,100,120,121,97,98,76//2
	],
	visible_sq:{},
	map_cords:[],
	
	debug: function(name,data){
		if(!this.debugMode) return;
		console.log("---"+name+"---");
		if(data !== false) console.log(data);
	},
	
	//отправка команд с клиента
	sendCommand: function(cmd, callback){
		
		$.ajax({
				url: this.curUrl+"api/send.php",
				data: {key: gkGame.autKey, cmd:cmd},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					if(typeof callback == 'function') callback.call(gkGame,data);
				}
		});
		
	},
	
	//получение объекта текстуры по названию изображения
	getImageForName: function(imageName){
		var e = gkGame.loader.loader;
		if(e.resources.hasOwnProperty(imageName)){
			return e.resources[imageName];
		}
		return false;
	},
	
	//рисовать изображение
	drawImage: function(img,x,y,w,h,mirror){
		//console.log(img);
		var imageOb = this.getImageForName(img);
		if(imageOb === false) return false;
		var image = new PIXI.Sprite(imageOb.texture);
		image.x = x;
		image.y = y;
		image.width = w;
		image.height = h;
		
		if(mirror){
			image.anchor.x = 1;
			image.scale.x *= -1; 
		}
		
		
		//console.log(this.mapData.ID);
		
		/*if((img == 'build_07_new.png' || img == 'build_06_new.png') && activeUser == this.mapData.ID && this.moveMode){
			
			image.interactive = true;
			image.buttonMode = true;
			image.on('tap', (event) => {
				console.log('tap');
			});
			image.on('click', function(event){
				console.log('click');
			});
			
		}*/
		
		this.viewport.addChild(image);
		
		
		delete image;
		this.render.render();
		
		return true;
	},
	
	//установка координат
	setSq: function(){
		
		var _top = 0;
		var _add_top = 0;
		var _left = 0;
		if(this.mapData.mapImage == 'game_map_start_new_10_06.png'){
			_add_top = 60;
		}
		
		var kef = this.kef;
		
		var h = 900;
		var w = 1280;
		
		kw = (w-80)*this.kef/12;
		h = h*this.kef;
		w = w*this.kef;
		
		if($(window).height() > $(window).width()){
			_top = _top + h/2;
			_left = _left + w/8;
		}else{
			_top = _top + h/2;
			_left = _left + w/2;
		}
		
		this.ksizes = {
			kw:kw,
			h:h,
			w:w,
			canv:{
				h:h+_top*2, 
				w: w+_left*2
			}, 
			_top: _top, 
			_left: _left,
			zoom: {
				minWidth:  window.innerWidth*0.5,
				minHeight: window.innerHeight*0.5,
				maxWidth: window.innerWidth*4,
				maxHeight: window.innerHeight*4,
			}
		};
		
		var num = 0;
		var map_cords = [[null,null,null]];
		for (i=1;i<16;i++){
			for (i2=1;i2<13;i2++){
				if(i2<12){
					num++;
					map_cords.push([i2*kw - w/25 + _left,(i*kw*0.6 - h/25 + _top + _add_top),num]);
					this.visible_sq[num] = false;
				}
				if(i<15){
					num++;
					map_cords.push([i2*kw - kw*0.5 - w/25 + _left,(i*kw*0.6 + kw*0.6*0.5 - h/25 + _top + _add_top),num]);
					this.visible_sq[num] = false;
				}
			}
		}
		this.map_cords = map_cords;
		for (k in this.visible_sq_ar){
			this.visible_sq[this.visible_sq_ar[k]] = true;
		}
		
		this.init_view();
	},
	
	//первая инициализация игры
	init_game: function(){
		if(this.app === null){
			this.loadMap(1,'player');
			this.loadItems();
			this.loadGameMenu();
			$('.bottomGameBlockWrap').css({'z-index':10});
			this.app = new PIXI.Application({
				antialias: true,
				resizeTo: window,
				transparent: true,
				resolution: 1,
				//width: window.innerWidth,
				//height: window.innerHeight,
				sharedTicker: true,
				//forceCanvas: true
			});
			
			$('.topGameBlockGameMapWrap').html(this.app.view);
			
			//this.loadChat();
		}
	},
	//инициализация view
	init_view: function(){
		if(this.viewport === null){
			// create viewport
			this.viewport = new PIXI.extras.Viewport({
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
				worldWidth: this.ksizes.canv.w,
				worldHeight: this.ksizes.canv.h,
				passiveWheel: true,	
				divWheel: $('.topGameBlockGameMapWrap').get(0),	
				interaction: gkGame.app.renderer.plugins.interaction // the interaction module is important for wheel() to work properly when renderer.view is placed or scaled
			});
			
			this.app.stage.addChild(gkGame.viewport);
			this.viewport.drag().pinch().wheel().decelerate();
			
			this.viewport.bounce();
			//this.viewport.clamp({'direction':'all'});
			
			
			//gkGame.debugMode = true;
			
			//gkGame.render.initBox();
			
			this.viewport.on('clicked',function(){gkGame.render.render('clicked')});
			
			//this.viewport.on('bounce-x-start',function(){gkGame.render.start('bounce-x-start')});
			//this.viewport.on('bounce-y-start',function(){gkGame.render.start('bounce-y-start')});
			//this.viewport.on('drag-start',function(){gkGame.render.start('drag-start')});
			//this.viewport.on('mouse-edge-start',function(){gkGame.render.start('mouse-edge-start')});
			
			//this.viewport.on('pinch-start',function(){gkGame.render.start('pinch-start')});
			//this.viewport.on('snap-start',function(){gkGame.render.start('snap-start')});
			//this.viewport.on('snap-zoom-start',function(){gkGame.render.start('snap-zoom-start')});
			//this.viewport.on('wheel',function(){gkGame.render.start('wheel')});
			//this.viewport.on('zoomed',function(){gkGame.render.start('zoomed')});
			
			
			//this.viewport.on('bounce-x-end',function(){gkGame.render.stop('bounce-x-end')});
			//this.viewport.on('bounce-y-end',function(){gkGame.render.stop('bounce-y-end')});
			//this.viewport.on('moved-end',function(){gkGame.render.stop('moved-end')});
			//this.viewport.on('drag-end',function(){gkGame.render.stop('drag-end')});
			
			//this.viewport.on('mouse-edge-end',function(){gkGame.render.stop('mouse-edge-end')});
			//this.viewport.on('pinch-end',function(){gkGame.render.stop('pinch-end')});
			//this.viewport.on('snap-end',function(){gkGame.app.stop('snap-end')});
			//this.viewport.on('snap-zoom-end',function(){gkGame.app.stop('snap-zoom-end')});
			//this.viewport.on('zoomed-end',function(){gkGame.app.stop('zoomed-end')});
			
			
			this.viewport.on('moved',function(e){gkGame.render.renderTimeout('moved',1000);});
			this.viewport.on('zoomed',function(){gkGame.render.renderTimeout('zoomed',1000)});
			
			this.setResize();
			this.setCenter();
			if($(window).width()>680){
				if($(window).width()>$(window).height()){
					this.viewport.fit(true, this.ksizes.canv.w*0.5, this.ksizes.canv.h*0.5);
				}else{
					this.viewport.fit(true, this.ksizes.canv.w*0.8, this.ksizes.canv.h*0.8);
				}
			}else{
				this.viewport.fitHeight(this.ksizes.canv.h*0.8,true);
			}
			
			this.render.stop();
			
			
			gkGame.debug('init_view',this.ksizes.canv);
		}else{
			this.viewport.removeChildren();
			this.setResize();
			this.setCenter();
			
		}
	},
	
	//ресайз
	setResize: function(){
		if(this.notCalcMode) return;
		if(this.viewport !== null){
			this.viewport.screenWidth = window.innerWidth;
			this.viewport.screenHeight = window.innerHeight;
			
			this.viewport.clampZoom(this.ksizes.zoom);
			
			
			//this.viewport.bounce({'sides':'all','friction':0.1});
			//this.viewport.clamp({'left': -window.innerWidth/3, 'right': this.ksizes.w+window.innerWidth/3, 'top': -window.innerHeight/3, 'bottom': this.ksizes.h+window.innerHeight/3, });
			
			/*this.viewport.resize({
				screenWidth: window.innerWidth,
				screenHeight: window.innerHeight,
				worldWidth: this.ksizes.w,
				worldHeight: this.ksizes.h,
			});*/
			//gkGame.debug('setResize',[window.innerWidth,window.innerHeight]);
			this.render.renderTimeout('setResize',1000);
		}
	},
	setCenter: function(){
		if(this.notCalcMode) return;
		if(this.viewport !== null){
			this.viewport.moveCenter(this.ksizes.canv.w/2, (this.ksizes.canv.h/2));
			this.render.renderTimeout('setCenter',1000);

		}
	},
	
	setZoom: function(zoom, step){
		zoom = parseInt(zoom);
		if(!zoom || isNaN(zoom)) zoom = 0;
		
		if(!step) step = 5;
		if(zoom>step) zoom = step;
		
		var dist_step = (this.ksizes.zoom.maxWidth - this.ksizes.zoom.minWidth)/step;
		
		var zoomState = [];
		var i;
		for(i = step; i >= 0; i-=1){
			zoomState.push(dist_step*((i<step)?i:step) + this.ksizes.zoom.minWidth);
		}
		delete i;
		
		//key 0 is default min zoom, reverse (world -> to screen)
		if(zoom in zoomState){
			var zommChange = zoomState[zoom] - this.viewport.worldScreenWidth;
			this.viewport.zoom(zommChange, true);

			this.render.render();
		}
	},
	
	//сортировка зданий для отрисовки
	sortBuilds: function(){
		var sortable = [];
		for(kb in this.mapData.dt){
			var sq = parseInt(this.mapData.dt[kb].sq);
			if(sq in this.map_cords)
				sortable.push([kb, this.map_cords[sq][1]]);
		}
		sortable.sort(function(a, b) {
			return a[1] - b[1];
		});
		
		var sortBuilds = [];
		
		for(kb in sortable){
			sortBuilds.push(this.mapData.dt[sortable[kb][0]]);
		}
		
		this.mapData.dt = sortBuilds;
		
		delete sortBuilds, sortable;
	},
	
	//отрисовка единичного здания
	drawBuild: function(build_data){
		if(build_data.level === null) build_data.level = 1;
		build_data.sq = parseInt(build_data.sq);
		if((build_data.build_id !== null) && (build_data.sq>0) && (typeof build_data.ofset === 'object') && (typeof build_data.size === 'object')){
			var imageKey = false;
			if(build_data.hasOwnProperty('image')) imageKey = build_data.image;
			if(!imageKey && this.getImageForName(build_data.build_id+'_new.png')) imageKey = build_data.build_id+'_new.png';
			if(!imageKey && this.getImageForName(build_data.build_id+'.png')) imageKey = build_data.build_id+'.png';
			
			if(imageKey && (this.getImageForName(imageKey))){
				this.drawImage(
					imageKey, 
					this.map_cords[build_data.sq][0] + build_data.ofset.x*this.kef, 
					this.map_cords[build_data.sq][1] + build_data.ofset.y*this.kef,
					build_data.size.width*this.kef,
					build_data.size.height*this.kef,
					build_data.inv
				);
			}
			
			if(build_data.level == 2){
				imageKey = false;
				if(build_data.hasOwnProperty('image')) imageKey = build_data.image;
				if(!imageKey && this.getImageForName(build_data.build_id+'_new_lvl2.png')) imageKey = build_data.build_id+'_new_lvl2.png';
				if(!imageKey && this.getImageForName(build_data.build_id+'_lvl2.png')) imageKey = build_data.build_id+'_lvl2.png';
				
				if(imageKey && (this.getImageForName(imageKey))){
					this.drawImage(
						imageKey, 
						this.map_cords[build_data.sq][0] + build_data.ofset.x*this.kef, 
						this.map_cords[build_data.sq][1] + build_data.ofset.y*this.kef,
						build_data.size.width*this.kef,
						build_data.size.height*this.kef,
						build_data.inv
					);
				}
			}
			
			if(build_data.num && !!build_data.unit) this.drawBands(build_data);
			
		}
	},
	
	//войска
	drawUnits: function(){
		
		this.debug('рисование войск игрока',this.mapData.units);
		
		var fontSize = ($(window).width()>680 ? 18*this.kef : 36*this.kef);
		var style = new PIXI.TextStyle({
			fill: "#FF0000",
			stroke: "#FFFFFF",
			fontSize: fontSize,
			strokeThickness: 2,
			fontWeight: "bold",
			fontFamily: "Verdana",
		});
		
		var temp_units_draw = [];
		
		if(this.mapData.level >= 25 && this.mapData.level < 31){
			
			temp_units_draw = [
			[1,37,-162,-62,-152,-12,56,56,true],
			[2,37,-116,-36,-108,-14,56,56,true],
			[3,37,-162,-8,-152,42,56,56,true],
			[4,37,-116,18,-108,68,56,56,true],
			[5,37,-116,-90,-108,-40,56,56,true],
			[6,37,-69,-64,0,0,56,56,true],
			];
			
			
		}else if(this.mapData.level > 5) {
			
			temp_units_draw = [
			[1,273,20,-62,30,-12,56,56,false],
			[2,273,-26,-36,-18,14,56,56,false],
			[3,273,20,-8,30,42,56,56,false],
			[4,273,-26,18,-18,68,56,56,false],
			[5,273,-26,-90,-18,-40,56,56,false],
			[6,273,-72,-64,0,0,56,56,false],
			];
			
		}
		
		for (k in temp_units_draw){
			var itm = temp_units_draw[k];
			this.drawImage('units_'+itm[0]+'.png',this.map_cords[itm[1]][0] + itm[2]*this.kef, this.map_cords[itm[1]][1] + itm[3]*this.kef,itm[6]*this.kef, itm[7]*this.kef,itm[8]);
			if(itm[0] !== 6){
				var text = new PIXI.Text(this.mapData.units[itm[0]],style);
				text.x = this.map_cords[itm[1]][0] + itm[4]*this.kef;
				text.y = this.map_cords[itm[1]][1] + itm[5]*this.kef - fontSize;
				this.viewport.addChild(text);
				delete text;
			}
		}
		delete style;
		delete fontSize;
		this.render.render();
	},
	
	//название королевства
	drawName: function(){
		if(!this.mapData.ratusha) return;
		if(this.mapData.name){
			
			var wd = this.mapData.name.length*8;
			var wd2 = (this.mapData.ID.length+2)*6;
			if(wd>200) wd = this.mapData.name.length*6;
			
			//палка
			var line = new PIXI.Graphics();
			line.moveTo(this.map_cords[213][0]+44*this.kef, this.map_cords[213][1]-33*this.kef);
			line.lineStyle(2, 0xfff787);
			line.lineTo(this.map_cords[213][0]+44*this.kef,this.map_cords[213][1]-33*this.kef+31*this.kef);
			this.viewport.addChild(line);
			delete line;
			
			//круг
			var circle = new PIXI.Graphics();
			circle.beginFill(0xfff787);
			circle.drawCircle(0, 0, 2*this.kef);
			circle.x = this.map_cords[213][0]+44*this.kef;
			circle.y = this.map_cords[213][1]-33*this.kef;
			circle.alpha = 1;
			this.viewport.addChild(circle);
			delete circle;
			
			//прямоугольник
			var sq = new PIXI.Graphics();
			sq.beginFill(0x000000);
			sq.drawRect(0, 0, (wd + 10)*this.kef, 18*this.kef);
			sq.x = this.map_cords[213][0]+45*this.kef;
			sq.y = this.map_cords[213][1]-30*this.kef;
			sq.alpha = 0.8;
			this.viewport.addChild(sq);
			delete sq;
			
			//прямоугольник
			var sq = new PIXI.Graphics();
			sq.beginFill(0x000000);
			sq.drawRect(0, 0, (wd2 + 10)*this.kef, 12*this.kef);
			sq.x = this.map_cords[213][0]+43*this.kef - (wd2 + 10)*this.kef;
			sq.y = this.map_cords[213][1]-30*this.kef;
			sq.alpha = 0.5;
			this.viewport.addChild(sq);
			delete sq;
			
			var fontSize = 12*this.kef;
			var style = new PIXI.TextStyle({
				fill: "#fff787",
				stroke: "#000000",
				fontSize: fontSize,
				strokeThickness: 0,
				fontWeight: "normal",
				fontFamily: "Verdana",
			});
			var text = new PIXI.Text(this.mapData.name,style);
			text.x = this.map_cords[213][0]+50*this.kef;
			text.y = this.map_cords[213][1]-29*this.kef;
			text.width = wd*this.kef;
			text.alpha = 0.8;
			this.viewport.addChild(text);
			delete text;
			
			var fontSize = 10*this.kef;
			var style = new PIXI.TextStyle({
				fill: "#fff787",
				stroke: "#000000",
				fontSize: fontSize,
				strokeThickness: 0,
				fontWeight: "normal",
				fontFamily: "Verdana",
			});
			var text = new PIXI.Text('№ '+this.mapData.ID,style);
			text.x = this.map_cords[213][0]+48*this.kef - (wd2 + 10)*this.kef;
			text.y = this.map_cords[213][1]-30*this.kef;
			text.width = wd2*this.kef;
			text.alpha = 0.5;
			this.viewport.addChild(text);
			delete text;
			
			this.render.render();
		}
	},
	
	//бандиты
	drawBands: function(build_data){
		var num = build_data.sq;
		var units = build_data.unit;
		var number = build_data.num;
		
		var fontSize = ($(window).width()>680 ? 15*this.kef : 15*this.kef);
		var style = [
			new PIXI.TextStyle({
				fill: "#FFFFFF",
				fontSize: fontSize,
				fontWeight: "bold",
				fontFamily: "Verdana",
			}),
			new PIXI.TextStyle({
				fill: "#000000",
				stroke: "#FFFFFF",
				strokeThickness: 2,
				fontSize: fontSize,
				fontWeight: "bold",
				fontFamily: "Verdana",
			})
		];
		
		var tx = [];
		if(units[1]>0) tx.push(units[1]+'к');
		if(units[2]>0) tx.push(units[2]+'л');
		if(units[3]>0) tx.push(units[3]+'м');
		if(units[4]>0) tx.push(units[4]+'а');
		if(units[5]>0) tx.push(units[5]+'в');
		
		//круг
		var circle = new PIXI.Graphics();
		circle.beginFill(0x711E07);
		circle.drawCircle(0, 0, 18*this.kef);
		circle.x = this.map_cords[num][0]+60*this.kef;
		circle.y = this.map_cords[num][1]-41*this.kef;
		circle.alpha = 0.5;
		this.viewport.addChild(circle);
		delete circle;

		//текст в круге
		var text = new PIXI.Text(number,style[0]);
		if(parseInt(number)>9){
			text.x = this.map_cords[num][0] + 50*this.kef;
		}else{
			text.x = this.map_cords[num][0] + 55*this.kef;
		}
		text.y = this.map_cords[num][1] - 36*this.kef - fontSize;
		text.alpha = 0.7;
		this.viewport.addChild(text);
		delete text;

		
		//войска
		for (k in tx){
			
			var text = new PIXI.Text(tx[k],style[1]);
			text.x = this.map_cords[num][0] + 2*this.kef;
			text.y = this.map_cords[num][1] - 26*this.kef + 16*this.kef*k - fontSize - 10;
			
			this.viewport.addChild(text);
			delete text;
			
		}
		this.render.render();
	},
	
	//показ ресурсов
	drawRes: function(){
		var ht = '';
		for (k in this.mapData.res){
			ht += '<span class="item'+k+'"><b></b> <i>'+this.mapData.res[k]+'</i></span>';
		}
		$('.gameLegend .wrap').append('<div class="resValues">'+ht+'</div>');
	},
	
	//рисование уровня
	drawLevel: function(){
		if(this.mapData.level) $('.level_'+this.mapData.ID).html(this.mapData.level);
		if(!this.mapData.ratusha) return;
		if(this.mapData.level){
			//круг
			var circle = new PIXI.Graphics();
			circle.beginFill(0xfff787);
			circle.drawCircle(0, 0, 10*this.kef);
			circle.x = this.map_cords[213][0]+44*this.kef;
			circle.y = this.map_cords[213][1]-40*this.kef;
			circle.alpha = 1;
			this.viewport.addChild(circle);
			delete circle;
			
			var fontSize = 12*this.kef;
			var style = new PIXI.TextStyle({
				fill: "#000000",
				stroke: "#fff787",
				fontSize: fontSize,
				strokeThickness: 0,
				fontWeight: "bold",
				fontFamily: "Verdana",
			});
			var text = new PIXI.Text(this.mapData.level,style);
			text.x = this.map_cords[213][0]+39*this.kef;
			text.y = this.map_cords[213][1]-48*this.kef;
			text.width = 10*this.kef;
			text.alpha = 1;
			this.viewport.addChild(text);
			delete text;
			
			$('.level_'+this.mapData.ID).html(this.mapData.level);
			
			this.render.render();
		}
	},
	
	//рисование рейтинга
	drawReith: function(){
		if(this.mapData.reith){
			$('.reith_'+this.mapData.ID).html(this.mapData.reith);
		}
	},
	
	drawGlobalTop: function(){
		if(this.mapData.hasOwnProperty('users_html')){
			var tabId = 3;
			$('.bottomGameBlockTabsMenu .tabLink3').css({'display':'block'});
			$('.bottomGameBlockTabsMenu li span').removeClass('active');
			$('.bottomGameBlockTabsMenu .tabLink3 span').addClass('active');
			$('.bottomGameBlock .wrap').hide();
			$('.bottomGameBlock .wrap'+tabId).show().html(this.mapData.users_html);
			$('.bottomGameBlockTabsMenu .hideTab').html('X').show();
			$('.bottomGameBlock').show();
		}
	},
	
	hideGlobalTop: function(){
		$('.bottomGameBlockTabsMenu .tabLink3').hide();
		$('.bottomGameBlock .wrap3').hide();
		if($('.bottomGameBlockTabsMenu .tabLink3 span').hasClass('active')){
			$('.bottomGameBlockTabsMenu li span').removeClass('active');
			$('.tabLink1 span').addClass('active');
			$('.bottomGameBlock .wrap').hide();
			$('.bottomGameBlock .wrap1').show();
			$('.bottomGameBlockTabsMenu .hideTab').html('X').show();
			$('.bottomGameBlock').show();
		}
	},
	
	//отрисовка карты
	drawMap: function(imageName){
		//console.log(this.imageLoader.images[imageName]);
		this.drawImage(imageName, this.ksizes._left, this.ksizes._top, this.ksizes.w, this.ksizes.h);
		
		this.setResize();
		this.setCenter();
		
	},
	
	//ссылки на карте
	drawLink: function(){
		var link = this.mapData.mapLink;
		$('.gameLegend .wrap').html('');
		$('.gameLegend .wrap').append(link);
		if(this.type == 'player'){
			if(this.friends.indexOf(this.mapData.ID) != -1){
				$('.gameLegend .moreBtnMapFriendAdd').remove();
				$('.gameLegend .moreBtnMapFriendDelete').show();
			}
		}
	},
	
	//инициализация карты
	init_map: function(notLoader){
		
		if(notLoader) this.notCalcMode = true;
		
		mapData = this.mapData;
		
		this.setSq();
		
		if(this.type == 'player'){
			
			this.drawMap(mapData.mapImage);
			this.drawLink();
			
			this.sortBuilds();
		
			for(k in this.mapData.dt){
				var itm = this.mapData.dt[k];
				this.drawBuild(itm);
			}
			
			this.drawUnits();
			this.drawName();
			this.drawLevel();
			this.drawReith();
			this.drawRes();
			this.hideGlobalTop();
			this.moveMode = false;
			
			
		}else if(this.type == 'global'){
			this.drawMap(mapData.mapImage);
			this.drawLink();
			this.drawGlobalTop();
			this.sortBuilds();
			
			for(k in this.mapData.dt){
				var itm = this.mapData.dt[k];
				this.drawBuild(itm);
			}
			
		}else if(this.type == 'map'){
			this.drawMap(mapData.mapImage);
			this.drawLink();
			this.hideGlobalTop();
			this.sortBuilds();
			
			for(k in this.mapData.dt){
				var itm = this.mapData.dt[k];
				this.drawBuild(itm);
			}
			
		}
		
		this.loader.hideLoader(100);
		
	},
	
	//установка аватара
	setAvatar: function(path){
		if(path){
			
			$.ajax({
					url: this.curUrl+"api/setAvatar.php",
					data: {key: gkGame.autKey, path:path},
					dataType : "html",
					type: "POST",
					success: function (data, textStatus) {
						gkGame.loadGameMenu();
					}
			});
			
		}
	},
	
	
	//установка названия
	setUsername: function(name){
		//if(name){
			
			$.ajax({
					url: this.curUrl+"api/setUsername.php",
					data: {key: gkGame.autKey, name:name},
					dataType : "html",
					type: "POST",
					success: function (data, textStatus) {
						gkGame.loadGameMenu();
						$('.setUsernameWrapper').html(data);
					}
			});
			
		//}
	},
	
	//установка промо
	setPromo: function(promo){
		//if(name){
			
			$.ajax({
					url: this.curUrl+"api/setPromo.php",
					data: {key: gkGame.autKey, promo:promo},
					dataType : "html",
					type: "POST",
					success: function (data, textStatus) {
						gkGame.loadGameMenu();
						$('.setPromoWrapper').html(data);
					}
			});
			
		//}
	},
	
	//добавить друга
	addFriend: function(user){
		$.ajax({
				url: this.curUrl+"api/addFriend.php",
				data: {key: gkGame.autKey, USER_TO:user},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					gkGame.loadItems();
				}
		});
	},
	
	//удалить друга
	deleteFriend: function(user){
		$.ajax({
				url: this.curUrl+"api/addFriend.php",
				data: {key: gkGame.autKey, USER_TO:user, mode: 'delete'},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					gkGame.loadItems();
				}
		});
	},
	
	//список друзей
	loadItems: function(){
		$.ajax({
				url: this.curUrl+"api/getItems.php",
				data: {key: gkGame.autKey},
				dataType : "html",
				type: "GET",
				success: function (data, textStatus) {
					
					$('.bottomGameBlock .wrap2').html(data);
					
					gkGame.friends = [];
					$('.bottomGameBlock .wrap2 .openMap').each(function(){
						if($(this).attr('data-user')) gkGame.friends.push($(this).attr('data-user'));
					});
					
					gkGame.debug('loadItems, set friends',gkGame.friends);
					
				}
		});
	},
	
	//меню игрока
	loadGameMenu: function(){
		$.ajax({
				url: this.curUrl+"api/getMenu.php",
				data: {key: gkGame.autKey},
				dataType : "html",
				type: "POST",
				success: function (data, textStatus) {
					$('.bottomGameBlock .wrap1').html(data);
					gkGame.pull.setPublicChanel();
					gkGame.debug('loadGameMenu and start setPublicChanel');
					if($('.userMapItemAuth').length){
						$('.bottomGameBlockTabsMenu .tabLink2').css({'display':'block'});
					}else{
						$('.bottomGameBlockTabsMenu .tabLink2').hide();
					}
				}
		});
	},
	
	//отрисовка сетки
	drawSetka: function(showAll){
		this.moveMode = true;
		
		for(k in this.mapData.dt){
			var itm = this.mapData.dt[k];
			this.drawBuild(itm);
		}
		
		this.moveCord = [];
		
		for (k in this.map_cords){
			if(showAll || this.visible_sq[this.map_cords[k][2]]){
				this.addStroke(this.map_cords[k][0],this.map_cords[k][1],this.ksizes.kw);
				this.addNum(this.map_cords[k][0],this.map_cords[k][1],this.ksizes.kw,this.map_cords[k][2]);
			}
		}

	},
	//отрисовка квадрата сетки
	addStroke: function(start_x,start_y,kw){
		//this.debug('addStroke',[start_x,start_y,kw]);
		var liners = [
			(kw*0.6/2),
			(kw/2),
			kw
		];
		
		var line = new PIXI.Graphics();
		line.moveTo(start_x, start_y);
		line.lineStyle(2, 0xFFFFFF);
		
		line.lineTo(start_x+liners[1],start_y-liners[0]);
		line.lineTo(start_x+liners[2],start_y);
		line.lineTo(start_x+liners[1],start_y+liners[0]);
		line.lineTo(start_x, start_y);
		
		
		
		this.viewport.addChild(line);
		
		delete line;
		this.render.render();
		
	},
	//отрисовка номера на сетке
	addNum: function(start_x,start_y,kw,num){
		var kef = this.kef;
		
		var fontSize = ($(window).width()>680 ? 16*this.kef : 20*this.kef);
		var style = new PIXI.TextStyle({
			fill: "#FF0000",
			stroke: "#FFFFFF",
			fontSize: fontSize,
			strokeThickness: 2,
			fontWeight: "bold",
			fontFamily: "Verdana",
		});
		
		var text = new PIXI.Text(num,style);
		text.x = start_x+12*kef;
		text.y = start_y+6*kef - fontSize;
		
		var activeUser = $('.userMapItemAuth .openMap').attr('data-user');
		if(activeUser == this.mapData.ID && this.moveMode){
		
			text.interactive = true;
			text.buttonMode = true;
			text.on('tap', function(event){
				if(gkGame.moveCord.length == 1 && gkGame.moveCord[0] == this._text){
					gkGame.moveCord = [];
				}else{
					gkGame.moveCord.push(this._text);
				}
				if(gkGame.moveCord.length == 2){
					gkGame.sendCommand('move_'+gkGame.moveCord[0]+'_'+gkGame.moveCord[1],function(dt){
						gkGame.loadMap(gkGame.mapData.ID,'player',true);
					});
				}
			});
			text.on('click', function(event){
				if(gkGame.moveCord.length == 1 && gkGame.moveCord[0] == this._text){
					gkGame.moveCord = [];
				}else{
					gkGame.moveCord.push(this._text);
				}
				if(gkGame.moveCord.length == 2){
					gkGame.sendCommand('move_'+gkGame.moveCord[0]+'_'+gkGame.moveCord[1],function(dt){
						gkGame.loadMap(gkGame.mapData.ID,'player',true);
					});
				}
			});
		
		}
		
		this.viewport.addChild(text);
		delete text;
		this.render.render();
		
	},
	
	mapMagic: {
		update_res: function(data){
			$('.topGameBlock .gameLegend .item1 i').html(data.res_1);
			$('.topGameBlock .gameLegend .item2 i').html(data.res_2);
			$('.topGameBlock .gameLegend .item3 i').html(data.res_3);
			$('.topGameBlock .gameLegend .item4 i').html(data.res_4);
			$('.topGameBlock .gameLegend .item5 i').html(data.res_5);
			$('.topGameBlock .gameLegend .item6 i').html(data.res_6);
		},
		update_reith: function(user,val){
			$('.reith_'+user).html(val);
		},
		redraw_global_map_icon: function(){
			$.ajax({
					url: gkGame.curUrl+"api/getGlobalMapIcon.php",
					data: {key: gkGame.autKey},
					dataType : "html",
					type: "POST",
					success: function (data, textStatus) {
						$('.globalMapItem').html(data);
					}
			});
		}
	},
	
	loadMap: function(mapId,type,notLoader){
		
		if(notLoader){
			
		}else{
			this.loader.showLoader();
		}
		
		this.mapId = mapId;
		this.type = type;
		
		this.debug('загрузка карты',[mapId, type]);
		
		$.ajax({
				url: this.curUrl+"api/mapsData.php",
				data: {key: gkGame.autKey, id: mapId, type:type},
				dataType : "json",
				type: "POST",
				success: function (data, textStatus) {
					
					gkGame.debug('инит карты',data);
					gkGame.mapData = data;
					
					gkGame.pull.setChanel();
					
					if(data.hasOwnProperty('images') && data.images.length){
						var addImages = [];
						for(k in data.images){
							var img_path = data.images[k];
							if(!gkGame.getImageForName(img_path)){
								addImages.push(img_path);
							}
						}
						if(addImages.length){
							gkGame.loader.load(addImages);
							gkGame.loader.loader.onComplete.add(function(e){
								gkGame.debug('loader.onComplete',e);
								gkGame.init_map(notLoader);
							});
						}else{
							gkGame.init_map(notLoader);
						}
					}else{
						gkGame.init_map(notLoader);
					}
					
				}
		});
		
	},
	
	
	
	//render wrapper
	render: {
		stat: null,
		statusCount: 0,
		showStatus: false,
		timer: null, 
		
		initBox: function(){
			$('body').append('<div id="renderStatus" style="position:fixed;right:5px;top:5px;background:#000000;color:#ffffff;paddinf:5px;text-align:center;width:250px;z-index:200;font-size:12px;"></div>');
			this.showStatus = true;
		},
		
		setStatus: function(v){
			this.stat = v;
			this.statusCount++;
			gkGame.debug(v,this.statusCount);
			if(this.showStatus){
				$('#renderStatus').html(v);
			}
		},
		
		start: function(type){
			if(!type) type = '';
			if(type) type = ' '+type;
			gkGame.app.start();
			this.setStatus('start'+type,false);
		},
		
		stop: function(type){
			if(!type) type = '';
			if(type) type = ' '+type;
			gkGame.app.stop();
			this.setStatus('stop'+type,false);
		},
		
		render: function(type){
			if(!type) type = '';
			if(type) type = ' '+type;
			this.setStatus('render'+type,false);
			gkGame.app.render();
		},
		
		renderTimeout: function(type, timeout){
			if(!type) type = '';
			if(type) type = ' '+type;
			this.setStatus('render'+type+', timeout: '+timeout);
			if(typeof this.timer !== null) clearTimeout(this.timer);
			gkGame.app.start();
			gkGame.app.render();
			this.timer = setTimeout(function(){gkGame.render.stop(type+', timeout: '+timeout);},timeout);
		},
	},
	
	//веб сокеты и longpull
	pull: {
		
		pushstream: null,
		pushstream_public: null,
		pushstreamLastChanel: null,
		
		setPublicChanel: function(){
			if(!this.pushstream_public){
				if(typeof PushStream !== 'undefined'){
					var chanelId = $('#setPublicChanel').attr('data-chanel');
					if(chanelId){
						this.parent().debug('init chanell',chanelId);
						this.pushstream_public = new PushStream({
						  host: 'push.mlife.by',
						  port: window.location.port,
						  modes: "websocket",
						  tagArgument: 'tag',
						  timeArgument: 'time',
						  useJSONP: true,
						  timeout: 30000000000,
						  useSSL: true,
						});
						this.pushstream_public.addChannel(chanelId);
						this.pushstream_public.onmessage = gkGame.pull.onmessage;
						this.pushstream_public.connect();
					}
				}else{
					this.parent().debug('PushStream not defined');
				}
			}
		},
		
		setChanel: function(){
		
			if((typeof this.parent().mapData != 'object') || (!this.parent().mapData.hasOwnProperty('chanellId'))) return false;
			
			if(!this.parent().mapData.chanellId) return false;
			
			if(this.parent().mapData.chanellId === this.pushstreamLastChanel) return false;
			this.pushstreamLastChanel = this.parent().mapData.chanellId;
			
			if(this.pushstream){
				this.pushstream.disconnect();
			}
			if(typeof PushStream !== 'undefined'){
				this.parent().debug('init chanell',this.parent().mapData.chanellId);
				this.pushstream = new PushStream({
				  host: 'push.mlife.by',
				  port: window.location.port,
				  modes: "websocket",
				  tagArgument: 'tag',
				  timeArgument: 'time',
				  useJSONP: true,
				  timeout: 30000000000,
				  useSSL: true,
				});
				this.pushstream.addChannel(this.parent().mapData.chanellId);
				this.pushstream.onmessage = gkGame.pull.onmessage;
				this.pushstream.connect();
			}else{
				this.parent().debug('PushStream not defined');
			}
			
		},
		
		onmessage: function(text, id, channel){
			var data = JSON.parse(Base64.decode(text));
			gkGame.debug('onmessage',data);
			if(data.type == 'gold_pub'){
				if(data.cmd == 'redraw_global_map_icon'){
					gkGame.mapMagic.redraw_global_map_icon();
					if(data.mapId == gkGame.mapData.ID){
						gkGame.loadMap(data.mapId,'global',true);
					}else if(data.userId == gkGame.mapData.ID){
						gkGame.loadMap(data.userId,'player',true);
					}
				}else if(data.cmd == 'reload_client'){
					window.location.reload();
				}
			}else if(data.type=='player' && data.userId == gkGame.mapData.ID){
				if(data.cmd == 'update_res'){
					gkGame.mapMagic.update_res(data.data);
					gkGame.mapMagic.update_reith(data.userId, data.data.res_all);
				}else if(data.cmd == 'add_build'){
					gkGame.loadMap(data.userId,data.type,true);
				}else if(data.cmd == 'redraw'){
					gkGame.loadMap(data.userId,data.type,true);
				}else if(data.cmd == 'show_setka'){
					gkGame.drawSetka();
				}
			}else if((data.type=='map' || data.type=='global') && data.cmd=='redraw_map'){
				if(data.mapId == gkGame.mapData.ID){
					gkGame.loadMap(data.mapId,data.type,true);
				}else if(data.userId == gkGame.mapData.ID){
					gkGame.loadMap(data.userId,'player',true);
				}
			}
		},
		
		parent: function(){
			return gkGame;
		},
	
	},
	//загрузка и подгрузка ресурсов
	loader: {
		
		path: 'https://g520.ru/images/',
		
		loader: null,
		
		init: function(){
			this.loader = new PIXI.Loader();
		},
		
		load: function(images, re_init){
			if(this.loader === null || re_init) this.init();
			
			for (k in images){
				this.loader.add(images[k], this.path+images[k]);
			}
			this.loader.load(function(loader, resources){});
			this.loader.onProgress.add(function(e){
				gkGame.loader.showLoader('<span class="progress"><span class="persent" style="width:'+e.progress+'%;"></span></span>');
			});
		},
		
		showLoader: function(text){
			this.hideDisable();
			if(!text) text = '';
			$('.loaderGame').show();
			$('.loaderGame .preloaderText').html('идет загрузка<br>'+text);
		},
		
		hideLoader: function(timeout){
			setTimeout(function(){
				$('.loaderGame').hide();
				$('.loaderGame .preloaderText').html('идет загрузка<br>');
			},timeout);
			if(!!this.parent().mapData.disable) {
				this.showDisable();
			}
		},
		
		showDisable: function(){
			$('.topGameBlock').append('<div class="mapDisable not_game_moving"><div class="mapDisableWrap">карта завершена</div></div>');
		},
		
		hideDisable: function(){
			$('.mapDisable').remove();
		},
		
		parent: function(){
			return gkGame;
		},
		
	},
	//калькулятор
	calc: {
		getCalcResult: function(){
			var dt = $('#kalkform').serialize();
			//console.log(dt);
			
			$.ajax({
					url: this.parent().curUrl+"api/calc.php",
					data: $('#kalkform').serialize(),
					dataType : "html",
					type: "POST",
					success: function (data, textStatus) {
						$('#kalkform').html(data);
					}
			});
		},
		getCalcResultSet : function(){
			var dt = $('#kalkform').serializeArray();
			var val = [0,0];
			
			for(k in dt){
				dt[k]['value'] = parseInt(dt[k]['value']);
				if(isNaN(dt[k]['value'])) dt[k]['value'] = 0;
				if(dt[k]['name'].indexOf('atk_')===0){
					val[0] = val[0] + dt[k]['value'];
				}else if(dt[k]['name'].indexOf('zaw_')===0){
					val[1] = val[1] + dt[k]['value'];
				}
			}
			
			$('#res_atk').val(val[0]);
			$('#res_zaw').val(val[1]);
		},
		parent: function(){
			return gkGame;
		},
	}
	
};