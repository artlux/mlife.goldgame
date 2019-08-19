import {Howl, Howler} from 'howler';
import $ from './dom7_lib';
import gkGame from './game';
import staticFiles from './staticfiles';
var Cookies = require("cookies");

var audio = {
	volume: {
		"fon_sound":"30",
		"res_in":"90",
		"money":"90",
		"error":"90",
		"building":"90",
		"remove":"90",
		"magic":"90",
		"chest":"90",
		"attack":"80",
		"attack2":"80",
		"fanfar":"80",
		"smeh":"80",
		"click_link":"100",
		"close":"100",
		"click_build":"100",
		"mess":"10",
		"ping":"100",
	},
	path: function(name){
		var path = gkGame.loader.path+'sounds/'+name;
		if(staticFiles[name]){
			path = staticFiles[name];
		}
		return path;
	},
	sounds: {},
};

audio.CookiesWrap = {
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
};

audio.load = function(sounds){
	
	var k;
	for (k in sounds){
		var src = [];
		var k2;
		for(k2 in sounds[k]['src']){
			src.push(this.path(sounds[k]['src'][k2]));
		}
		if(!this.sounds.hasOwnProperty(sounds[k].alias)){
			if(sounds[k]['options']){
				sounds[k]['options']['src'] = src;
				this.sounds[sounds[k].alias] = new Howl(sounds[k]['options']);
				//console.log(sounds[k]['options']);
			}else{
				this.sounds[sounds[k].alias] = new Howl({src: src});
			}
		}
	}
	
};

audio.get = function(name){
	var k;
	for (k in this.sounds){
		if(k == name){
			return this.sounds[k];
		}
	}
};

audio.play = function(name){
	if(this.volume.hasOwnProperty(name)){
		if(this.volume[name]<=0) return;
		this.get(name).volume(this.volume[name]/100);
	}else{
		this.get(name).volume(0.4);
	}
	this.get(name).play();
}

audio.saveSettings = function(audio_settings){
	this.volume = audio_settings;
	this.CookiesWrap.set('audio_settings',JSON.stringify(this.volume));
};
audio.saveSettingsWrapper = function(){
	var audio_settings = {};
	$('.wrapSettingsSound input').each(function(){
		var name = $(this).attr('name');
		var val = parseInt($(this).val());
		if(name && (val >= 0)){
			var musics = $(this).attr('data-music').split(',');
			
			var k;
			for(k in musics){
				audio_settings[musics[k]] = $(this).val();
				if(musics[k] == 'fon_sound') {
					audio.get(name).volume($(this).val()/100);
				}
			}
			
		}
	});
	audio.saveSettings(audio_settings);
};

audio.init = function(){
	
	var html = '<div class="soundWrapIcon"><a href="#" class="soundIcon showModalBuild" data-page="api/settings/sound/" title="настройки звука" data-audio="click_link"></a></div>';
	$('.topGameBlock').append(html);
	
	var volume = this.CookiesWrap.get('audio_settings');
	if(!!volume) this.volume = JSON.parse(volume);
	
	if(this.volume.hasOwnProperty('fon_sound')){
		if(this.volume['fon_sound']<=0) {
			this.get('fon_sound').volume(0);
		}else{
			this.get('fon_sound').volume(this.volume['fon_sound']/100);
		}
	}else{
		this.get('fon_sound').volume(0.3);
	}
	
	$(document).on('change','.wrapSettingsSound input',function(e){
		if(!!e) e.preventDefault();
		var sound_val = parseInt($(this).val());
		$(this).parent().find('span').html(sound_val+'%');
		audio.saveSettingsWrapper();
	});
	
	$(document).on('input','.wrapSettingsSound input',function(e){
		if(!!e) e.preventDefault();
		var sound_val = parseInt($(this).val());
		$(this).parent().find('span').html(sound_val+'%');
		//audio.saveSettingsWrapper();
	});
	
	
	
	//audio.play('fon_sound');
	
};

export default audio;