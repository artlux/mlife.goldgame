require.config({
    "baseUrl": "js/lib/",
	"paths": {
		'jquery' : 'jquery-1.8.3.min',
		//'jquery' : 'jquery-2.2.4.min',
		//'jquery-ui' : 'jquery-ui.min',
		'cookies' : 'cookies',
		'chat' : 'chat',
		'pixi' : 'pixi.min',
		'pixi-viewport' : 'pixi-viewport.min',
		'base64' : 'base64',
		'game' : 'game',
		'pushstream' : 'pushstream',
		'app' : '../app',
	},
	"shim": {
		"pixi": {
			"exports": "PIXI"
		},
		"game": {
			"exports": "gkGame"
		},
		"chat": {
			"exports": "mlf_chat",
			"deps":['cookies','jquery'/*,'jquery-ui'*/]
		},
		"base64": {
			"exports": "Base64"
		},
		"pushstream": {
			"exports": "PushStream"
		},
		"pixi-viewport": {
			"exports": "Viewport",
			"deps":['pixi']
		},
		"app": {
			"deps": ['pixi','pixi-viewport','base64','pushstream','game','chat'],
		}
	}
});

require(["app"]);