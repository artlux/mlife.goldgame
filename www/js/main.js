import app from './app';
app.client_id = 'mobile_app';
app.version = '1.0.3';
document.addEventListener('DOMContentLoaded', function(){
	app.init();
});