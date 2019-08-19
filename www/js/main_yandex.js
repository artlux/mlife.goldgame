import app from './app';
app.client_id = 'yandex';
app.version = '1.0.3';
document.addEventListener('DOMContentLoaded', function(){
	YaGames.init({}).then(ysdk => {
		app.init();
	});
});