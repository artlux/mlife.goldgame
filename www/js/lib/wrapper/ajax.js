import Request from './../request/request';
import app from './../../app';

let ajaxWrapper = function(options){
	options.processData = false;
	if(!options.data) options.data = {};
	options.data.client_id = app.client_id;
	options.data.version = app.version;
	if(options.type){
		options.method = options.type;
		delete options.type;
	}
	if(options.method == 'POST'){
		if(typeof options.data == 'object'){
			
			var esc = encodeURIComponent;
			var query = Object.keys(options.data)
				.map(function(k) {return esc(k) + '=' + esc(options.data[k]);})
				.join('&');
			
			options.data = query;
		}
	}
	if(options.dataType == 'html') {
		options.dataType = 'text';
	}
	options.cache = false;
	setTimeout(function(){
	Request(options);
	},100);
};

export default ajaxWrapper;