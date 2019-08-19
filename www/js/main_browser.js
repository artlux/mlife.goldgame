import app from './app';
app.client_id = 'browser';
app.version = '1.0.3';
document.addEventListener('DOMContentLoaded', function(){
	app.init();
});