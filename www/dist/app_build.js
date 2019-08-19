/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../Users/Andrew/AppData/Roaming/npm/node_modules/webpack/buildin/global.js":
/*!**********************************************************************************!*\
  !*** c:/Users/Andrew/AppData/Roaming/npm/node_modules/webpack/buildin/global.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dom7_lib */ "./js/lib/dom7_lib.js");
/* harmony import */ var _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/game */ "./js/lib/game.js");
/* harmony import */ var _lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/modal */ "./js/lib/modal.js");
/* harmony import */ var _lib_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/chat */ "./js/lib/chat.js");
/* harmony import */ var _lib_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/audio */ "./js/lib/audio.js");
/* harmony import */ var _lib_wrapper_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/wrapper/ajax */ "./js/lib/wrapper/ajax.js");








_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax = function (options) {
  Object(_lib_wrapper_ajax__WEBPACK_IMPORTED_MODULE_6__["default"])(options);
}; //gkGame.debugMode = true;


var app = {};
app.client_id = 'app';
app.version = '1.0.0'; //���������� ��� eval

app.modules_names = function (name) {
  if (name == 'gkGame') return _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (name == 'modal') return _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (name == 'mlf_chat') return _lib_chat__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (name == 'audio') return _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"];
  if (name == 'dom7') return _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a;
}; //���������� js ������� �� html


app.ev = function (html) {
  var beforeHtml = '' + 'var gkGame=this.modules_names("gkGame");' + 'var modal=this.modules_names("modal");' + 'var mlf_chat=this.modules_names("mlf_chat");' + 'var audio=this.modules_names("audio");' + 'var $=this.modules_names("dom7");' + '';
  eval(beforeHtml + html);
}; //������������� ������������ ����������


app.initHandlers = function () {
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).on('resize', function () {
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].setResize();
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].setCenter();
    app.setModalsSizes();
  });
  ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].addEventListener("orientationchange", function () {
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].setResize();
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].setCenter();
    app.setModalsSizes();
  });
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.openMap', function (e) {
    if (!!e) e.preventDefault();
    if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-audio')) _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play(_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-audio'));
    _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
    var id = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user');
    var map = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-map');
    var type = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-type');
    if (!type) type = 'player';
    if (!id) id = map;
    if (id) _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].loadMap(id, type);
  });
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.sendcommand, .commandButton', function (e) {
    if (!!e) e.preventDefault();
    if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-audio')) _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play(_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-audio'));
    var cmd = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-command');
    var addpost = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-addpost');
    var page = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-page');
    if (!cmd) return false; //debugger;
    //if(cmd == 'build_01'){

    var dtpost = {
      key: _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
      cmd: cmd
    };

    if (addpost) {
      addpost = addpost.split(',');
      var k;

      for (k in addpost) {
        dtpost[addpost[k]] = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#' + addpost[k]).val();
      }
    }

    var replaceMenu = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-replace_menu');

    if (page) {
      //data-audio="money"
      //console.log(dtpost);
      if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.message-container').length) {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.message-container').append(_lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].loader_template());
      }

      if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-preload_build_menu')) {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild .buildContentWrap').html(_lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].loader_template());
      }

      if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-preload_modal')) {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          url: _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].curUrl + '' + page,
          data: dtpost,
          dataType: "text",
          type: "POST",
          success: function success(data, textStatus) {
            _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].setContent(data);

            if (replaceMenu) {
              _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].loadGameMenu();
            }
          }
        });
      } else {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
          url: _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].curUrl + '' + page,
          data: dtpost,
          dataType: "text",
          type: "POST",
          success: function success(data, textStatus) {
            _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">' + data + '</div>');

            if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild .buildContentWrap script').length) {
              _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild .buildContentWrap script').each(function () {
                //console.log($(this).html());
                app.ev(_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).html());
              });
            }

            if (replaceMenu) {
              _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].loadGameMenu();
            }
          }
        });
      }
    } else {
      if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.message-container').length) {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.message-container').append(_lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].loader_template());
      }

      if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-preload_build_menu')) {
        _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild .buildContentWrap').html(_lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].loader_template());
      }

      _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].sendCommand(dtpost, function (dt) {
        if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.message-fixed-container .message-container .preload').length) {
          _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.message-fixed-container .message-container .preload').parents('.message-container').remove();
        }

        if (dt.fixmess) {
          _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].gameMessage(dt.fixmess);
          if (dt.setLoadMenu) this.loadGameMenu();
          if (dt.setLoadItems) this.loadItems();
          if (dt.closeBuildModal) _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modalBuild').hide();
          if (dt.closeDefaultModal) _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].remove();
          if (dt.audio) _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play(dt.audio);

          if (dt.draw_mode) {
            _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].drawSetka();
            _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].moveCord.push(dt.draw_mode);
          }
        }
      });
    } //}

  });
}; //����������� ����� ����� ��������


app.initTabs = function () {
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.bottomGameBlockTabsMenu li span', function () {
    var tabId = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-tab');
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_link');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlockTabsMenu li span').removeClass('active');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlock .wrap').hide();
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlock .wrap' + tabId).show();
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlockTabsMenu .hideTab').html('X').show();
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlock').show();
  });
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.bottomGameBlockTabsMenu .hideTab', function (e) {
    e.preventDefault();
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_link');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlockTabsMenu li span').removeClass('active');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlock').hide();
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).html('').hide();
  });
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', 'ul.buildTabs li a', function (e) {
    if (!!e) e.preventDefault();
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_link');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('ul.buildTabs li a').removeClass('button-red');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('ul.buildTabs li a').addClass('button-yelow');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('button-red');
    var tabClass = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-tab');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.buildTab').removeClass('buildTab_active');
    _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.' + tabClass).addClass('buildTab_active');
  });
}; //����������� ����


app.initZoom = function () {
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.gameZoomBlock .zoomLnk', function (e) {
    e.preventDefault();

    if (_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {
      _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('close');
      _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.gameZoomBlock .buttons').hide();
      _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('active');
    } else {
      _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_build');
      _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.gameZoomBlock .buttons').css({
        'display': 'inline-block'
      });
      _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
    }
  });
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.gameZoomBlock .buttons a', function (e) {
    e.preventDefault();
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_link');
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].setZoom(_lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-size'));
  });
}; //��������� ������������� ������� ��������� ����


app.setModalsSizes = function () {
  var max_height = _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.topGameBlock').height() - 60 - 40 - 40 - 5;
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#contentModal').attr('data-height', max_height);
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.modal .modal-body').css({
    'height': _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#contentModal').attr('data-height') + 'px'
  });
}; //������������� ������������


app.initCalk = function () {
  _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('change', '#kalkform .calc_mode', function () {
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].calc.getCalcResultSet();
  });
};

app.init = function () {
  //console.log(app.client_id);
  //console.log(app.version);
  var init_game = function init_game(key) {
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey = key;
    var imgs = ['game_map_start_new_10_06.png', 'build_01_new.png', 'build_02_new.png', 'build_02_new_lvl2.png', 'build_03_new_lvl2.png', 'build_03_new.png', 'build_04_new.png', 'build_05_new.png', 'build_06_new.png', 'build_06_new_lvl2.png', 'build_07_new.png', 'build_07_new_lvl2.png', 'build_08_new.png', 'build_08_new_lvl2.png', 'build_09_new.png', 'build_09.png', 'build_10_new.png', 'build_11_new.png', 'build_12_new.png', 'build_91_new.png', 'build_91_new_lvl2.png', 'lest1.png', 'lest2.png', 'lest3.png', 'lest4.png', 'lest5.png', 'units_1.png', 'units_2.png', 'units_3.png', 'units_4.png', 'units_5.png', 'units_6.png', 'gold_new.png', 'portal_new.png', 'build_10_new_lvl2.png', 'build_01_new_lvl2.png'];
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].loader.load(imgs);
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].load([{
      'alias': 'fon_sound',
      'src': ['fon_sound.webm', 'fon_sound.mp3', 'fon_sound.wav'],
      'options': {
        autoplay: true,
        loop: true
      }
    }, {
      'alias': 'click_build',
      'src': ['click_build.webm', 'click_build.mp3', 'click_build.wav']
    }, {
      'alias': 'knock',
      'src': ['knock.webm', 'knock.mp3', 'knock.wav']
    }, {
      'alias': 'close',
      'src': ['close.webm', 'close.mp3', 'close.wav']
    }, {
      'alias': 'click_link',
      'src': ['click_link.webm', 'click_link.mp3', 'click_link.wav']
    }, {
      'alias': 'res_in',
      'src': ['res_in.webm', 'res_in.mp3', 'res_in.wav']
    }, {
      'alias': 'money',
      'src': ['money.webm', 'money.mp3', 'money.wav']
    }, {
      'alias': 'error',
      'src': ['error.webm', 'error.mp3', 'error.wav']
    }, {
      'alias': 'building',
      'src': ['building.webm', 'building.mp3', 'building.wav']
    }, {
      'alias': 'remove',
      'src': ['remove.webm', 'remove.mp3', 'remove.wav']
    }, {
      'alias': 'magic',
      'src': ['magic.webm', 'magic.mp3', 'magic.wav']
    }, {
      'alias': 'chest',
      'src': ['chest.webm', 'chest.mp3', 'chest.wav']
    }, {
      'alias': 'attack',
      'src': ['attack.webm', 'attack.mp3', 'attack.wav']
    }, {
      'alias': 'attack2',
      'src': ['attack2.webm', 'attack2.mp3', 'attack2.wav']
    }, {
      'alias': 'fanfar',
      'src': ['fanfar.webm', 'fanfar.mp3', 'fanfar.wav']
    }, {
      'alias': 'smeh',
      'src': ['smeh.webm', 'smeh.mp3', 'smeh.wav']
    }, {
      'alias': 'ping',
      'src': ['ping.webm', 'ping.mp3', 'ping.wav']
    }, {
      'alias': 'mess',
      'src': ['mess.webm', 'mess.mp3', 'mess.wav']
    }]);
    _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].loader.loader.onComplete.add(function (e) {
      _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].debug('loader.onComplete', e);

      if (_lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].app === null) {
        _lib_chat__WEBPACK_IMPORTED_MODULE_4__["default"].loadChat(); //debugger;
      }

      _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].init_game();
    });
    app.initHandlers();
    app.initTabs();
    app.initZoom();
    app.initCalk();
    app.setModalsSizes();
    _lib_modal__WEBPACK_IMPORTED_MODULE_3__["default"].init();
    _lib_audio__WEBPACK_IMPORTED_MODULE_5__["default"].init(); //$('#contentModal').show();
  };

  if (this.client_id == 'yandex' || this.client_id == 'mobile_app') {
    var playerAut = localStorage.getItem('ggame_aut');

    if (!playerAut) {
      _lib_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        url: _lib_game__WEBPACK_IMPORTED_MODULE_2__["default"].curUrl + 'api/createGame.php',
        data: {},
        dataType: "json",
        type: "GET",
        success: function success(data, textStatus) {
          playerAut = data.ggame_aut;
          localStorage.setItem('ggame_aut', data.ggame_aut);
          init_game(playerAut);
        }
      });
    } else {
      init_game(playerAut);
    }
  } else {
    init_game('');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./js/lib/audio.js":
/*!*************************!*\
  !*** ./js/lib/audio.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom7_lib */ "./js/lib/dom7_lib.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom7_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./js/lib/game.js");
/* harmony import */ var _staticfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticfiles */ "./js/lib/staticfiles.js");





var Cookies = __webpack_require__(/*! cookies */ "./js/lib/cookies.js");

var audio = {
  volume: {
    "fon_sound": "30",
    "res_in": "90",
    "money": "90",
    "error": "90",
    "building": "90",
    "remove": "90",
    "magic": "90",
    "chest": "90",
    "attack": "80",
    "attack2": "80",
    "fanfar": "80",
    "smeh": "80",
    "click_link": "100",
    "close": "100",
    "click_build": "100",
    "mess": "10",
    "ping": "100"
  },
  path: function path(name) {
    var path = _game__WEBPACK_IMPORTED_MODULE_2__["default"].loader.path + 'sounds/' + name;

    if (_staticfiles__WEBPACK_IMPORTED_MODULE_3__["default"][name]) {
      path = _staticfiles__WEBPACK_IMPORTED_MODULE_3__["default"][name];
    }

    return path;
  },
  sounds: {}
};
audio.CookiesWrap = {
  get: function get(key) {
    var value = localStorage.getItem(key);
    if (!value) value = Cookies.get(key);
    return value;
  },
  set: function set(key, value, opt) {
    localStorage.setItem(key, value);
    Cookies.set(key, value, opt);
    return;
  }
};

audio.load = function (sounds) {
  var k;

  for (k in sounds) {
    var src = [];
    var k2;

    for (k2 in sounds[k]['src']) {
      src.push(this.path(sounds[k]['src'][k2]));
    }

    if (!this.sounds.hasOwnProperty(sounds[k].alias)) {
      if (sounds[k]['options']) {
        sounds[k]['options']['src'] = src;
        this.sounds[sounds[k].alias] = new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"](sounds[k]['options']); //console.log(sounds[k]['options']);
      } else {
        this.sounds[sounds[k].alias] = new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
          src: src
        });
      }
    }
  }
};

audio.get = function (name) {
  var k;

  for (k in this.sounds) {
    if (k == name) {
      return this.sounds[k];
    }
  }
};

audio.play = function (name) {
  if (this.volume.hasOwnProperty(name)) {
    if (this.volume[name] <= 0) return;
    this.get(name).volume(this.volume[name] / 100);
  } else {
    this.get(name).volume(0.4);
  }

  this.get(name).play();
};

audio.saveSettings = function (audio_settings) {
  this.volume = audio_settings;
  this.CookiesWrap.set('audio_settings', JSON.stringify(this.volume));
};

audio.saveSettingsWrapper = function () {
  var audio_settings = {};
  _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.wrapSettingsSound input').each(function () {
    var name = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('name');
    var val = parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val());

    if (name && val >= 0) {
      var musics = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-music').split(',');
      var k;

      for (k in musics) {
        audio_settings[musics[k]] = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val();

        if (musics[k] == 'fon_sound') {
          audio.get(name).volume(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val() / 100);
        }
      }
    }
  });
  audio.saveSettings(audio_settings);
};

audio.init = function () {
  var html = '<div class="soundWrapIcon"><a href="#" class="soundIcon showModalBuild" data-page="api/settings/sound/" title="настройки звука" data-audio="click_link"></a></div>';
  _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.topGameBlock').append(html);
  var volume = this.CookiesWrap.get('audio_settings');
  if (!!volume) this.volume = JSON.parse(volume);

  if (this.volume.hasOwnProperty('fon_sound')) {
    if (this.volume['fon_sound'] <= 0) {
      this.get('fon_sound').volume(0);
    } else {
      this.get('fon_sound').volume(this.volume['fon_sound'] / 100);
    }
  } else {
    this.get('fon_sound').volume(0.3);
  }

  _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(document).on('change', '.wrapSettingsSound input', function (e) {
    if (!!e) e.preventDefault();
    var sound_val = parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val());
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('span').html(sound_val + '%');
    audio.saveSettingsWrapper();
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(document).on('input', '.wrapSettingsSound input', function (e) {
    if (!!e) e.preventDefault();
    var sound_val = parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val());
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parent().find('span').html(sound_val + '%'); //audio.saveSettingsWrapper();
  }); //audio.play('fon_sound');
};

/* harmony default export */ __webpack_exports__["default"] = (audio);

/***/ }),

/***/ "./js/lib/base64.js":
/*!**************************!*\
  !*** ./js/lib/base64.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  //метод для кодировки в base64 на javascript
  encode: function encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }

    return output;
  },
  //метод для раскодировки из base64
  decode: function decode(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);
    return output;
  },
  // метод для кодировки в utf8
  _utf8_encode: function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  },
  //метод для раскодировки из urf8
  _utf8_decode: function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c1, c2;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Base64);

/***/ }),

/***/ "./js/lib/chat.js":
/*!************************!*\
  !*** ./js/lib/chat.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom7_lib */ "./js/lib/dom7_lib.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom7_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./js/lib/game.js");
/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64 */ "./js/lib/base64.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio */ "./js/lib/audio.js");
/* harmony import */ var _wrapper_ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wrapper/ajax */ "./js/lib/wrapper/ajax.js");







_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax = function (options) {
  Object(_wrapper_ajax__WEBPACK_IMPORTED_MODULE_5__["default"])(options);
};

var Cookies = __webpack_require__(/*! cookies */ "./js/lib/cookies.js");

var mlf_chat = {
  CookiesWrap: {
    get: function get(key) {
      var value = localStorage.getItem(key);
      if (!value) value = Cookies.get(key);
      return value;
    },
    set: function set(key, value, opt) {
      localStorage.setItem(key, value);
      Cookies.set(key, value, opt);
      return;
    }
  },
  pushstream: null,
  mlf_chat_user: {},
  ml_chatPath: 'https://g520.ru/game.client.v.1/chat/',
  lastreplay: [],
  debug: false,
  lastcheck: 0,
  lastCord: false,
  //audio: [new Audio('https://g520.ru/upload/alice-sounds-game-ping-1.mp3')],
  playAudio: function playAudio(key) {
    /*if(!key) key = 0;
    this.audio[0].load();
    setTimeout(function() {
    	mlf_chat.audio[0].play();
    },0);
    */
    if (!key) key = 'ping';
    _audio__WEBPACK_IMPORTED_MODULE_4__["default"].play(key);
  },
  sortEnique: function sortEnique(arr) {
    var res = [];
    arr.sort(); //var i = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i + 1]) {
        res.push(arr[i]);
      }
    }

    return res;
  },
  addCookie: function addCookie(user) {
    var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');

    if (cur_cookie) {
      cur_cookie = cur_cookie.toString().split(',');
    } else {
      cur_cookie = [];
    }

    cur_cookie.push(user);
    cur_cookie = mlf_chat.sortEnique(cur_cookie);
    mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT', cur_cookie.join(','), {
      expires: 30
    });
  },
  removeCookie: function removeCookie(user) {
    var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');

    if (cur_cookie) {
      cur_cookie = cur_cookie.toString().split(',');
    } else {
      cur_cookie = [];
    }

    var new_c = [];
    var k;

    for (k in cur_cookie) {
      cur_cookie[k] = parseInt(cur_cookie[k]);

      if (cur_cookie[k] > 0 && user) {
        if (cur_cookie[k] != user) {
          new_c.push(cur_cookie[k]);
        }
      }
    }

    new_c = mlf_chat.sortEnique(new_c);
    mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT', new_c.join(','), {
      expires: 30
    });
  },
  checkDel: function checkDel() {
    if (mlf_chat.mlf_chat_user.isDel) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').addClass('chatWrapper_isDel');
    }
  },
  deleteItem: function deleteItem(id) {
    var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
    var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/delete.php',
      data: {
        key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
        from_user_id: from_user_id,
        token: token,
        id: id
      },
      dataType: "json",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        if (data.RES == 'ERR') {
          mlf_chat.showError(data.ERR.join('.<br>'));
        }
      },
      error: function error() {}
    });
  },
  sendPrigl: function sendPrigl(id) {
    var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
    var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/prigl.php',
      data: {
        key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
        from_user_id: from_user_id,
        token: token,
        id: id,
        mode: 'send'
      },
      dataType: "json",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        if (data.RES == 'ERR') {
          mlf_chat.showError(data.ERR.join('.<br>'));
        } else {
          mlf_chat.showError('Игрок приглашен.');
        }
      },
      error: function error() {}
    });
  },
  banUser: function banUser() {
    var frm = {};
    frm.from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
    frm.token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val(); //var form_data = {};

    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .banForm input, #chatWrapper .banForm select').each(function () {
      var name = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('name');
      frm[name] = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val();
    });
    if (mlf_chat.debug) console.log(frm);
    frm['key'] = _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey;
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/ban.php',
      data: frm,
      dataType: "json",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').removeClass('active');

        if (data.RES == 'ERR') {
          mlf_chat.showError(data.ERR.join('.<br>'));
        }
      },
      error: function error() {}
    });
  },
  setReplay: function setReplay(name) {
    mlf_chat.lastreplay.push(name);

    if (mlf_chat.lastreplay.length > 3) {
      mlf_chat.lastreplay.splice(0, 1);
    }

    if (mlf_chat.debug) console.log(mlf_chat.lastreplay);
    if (mlf_chat.debug) console.log(name);
    var pre_tex = '';
    var k;

    for (k in mlf_chat.lastreplay) {
      if (k < 3) {
        if (pre_tex.indexOf(mlf_chat.lastreplay[k]) === -1) {
          pre_tex += mlf_chat.lastreplay[k] + ', ';
        }
      }
    }

    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #chat_text').val(pre_tex);
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #chat_text').focus();
  },
  message: function message(text, id, channel) {
    var data = JSON.parse(_base64__WEBPACK_IMPORTED_MODULE_3__["default"].decode(text));
    if (mlf_chat.debug) console.log([data, text, id, channel]);

    if (data.MODE == 'add') {
      mlf_chat.playAudio('mess');
      var addClass = '';

      if (mlf_chat.mlf_chat_user.name) {
        if (data.MESS.indexOf(mlf_chat.mlf_chat_user.name) > -1) {
          addClass += ' item_active';
          mlf_chat.playAudio();
        }
      }

      if (mlf_chat.mlf_chat_user.id == data.USER_FROM.userId) {
        addClass += ' item_user';
      }

      var t = new Date(data.TIME_ADD * 1000);
      var ht = '<div class="item' + addClass + '" data-id="' + data.ID + '" data-user="' + data.USER_FROM.userId + '" data-username="' + data.USER_FROM.userName + '" id="item_mess_' + data.ID + '">' + '<div class="logo">' + '<a href="' + data.USER_FROM.userProfile + '" target="_blank"><img src="' + data.USER_FROM.userAvatar + '" class="chatbro_message_image" width="32px" height="32px"></a>' + '<span class="type type_' + data.USER_FROM.type + '">' + data.USER_FROM.type + '</span>' + '</div>' + '<div class="text">' + '<div class="text_name">' + '<a class="name" href="' + data.USER_FROM.userProfile + '" target="_blank">' + data.USER_FROM.userName + '</a> <span class="tmDate" data-time="' + data.TIME_ADD + '">в ' + ((t.getHours() < 10 ? '0' : '') + t.getHours() + ':' + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes()) + '</span>' + '<a href="#" class="delete">X</a>' + '<a href="#" class="replay">ответ</a>' + '</div>' + '<div class="text_input">' + '' + data.MESS + '' + '</div>' + '</div>' + '</div>';
      var ma = mlf_chat.getDomMessBlockActive();
      var scrollH = 0;

      if (ma) {
        scrollH = ma.scrollHeight - ma.scrollTop - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").height();
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chat_content .messages_' + data.USER_TO.userId + ' .wrapp_mess').append(ht);

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chat_content .messages_' + data.USER_TO.userId).hasClass('messages_active')) {
        if (ma && scrollH <= 80) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
        }
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + data.USER_TO.userId).removeClass('new_mess').addClass('new_mess');
      }
    } else if (data.MODE == 'get_ls') {
      var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();

      if (data.USER_TO == from_user_id || data.USER_FROM == from_user_id) {
        mlf_chat.playAudio('mess');
        var createMsgWrap = false;

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + data.USER_TO).html()) {
          if (!_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + data.USER_TO).hasClass('active')) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + data.USER_TO).removeClass('new_mess').addClass('new_mess');
            mlf_chat.playAudio();
          }
        } else {
          if (data.USER_TO != from_user_id) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room').append('<a href="#" id="chat_room_' + data.USER_TO + '" class="new_mess" data-chat="' + data.USER_TO + '">' + data.USER_TO_NAME + '<span class="close">X</span></a>');
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_content').append('<div class="messages messages_' + data.USER_TO + ' messages_active"><div class="wrapp_mess"></div></div>');
            mlf_chat.getStartPage(data.USER_TO);
            mlf_chat.setSizes();
            mlf_chat.addCookie(data.USER_TO);
            createMsgWrap = true;
          }
        }

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + data.USER_FROM).html()) {
          if (!_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + data.USER_FROM).hasClass('active')) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + data.USER_FROM).removeClass('new_mess').addClass('new_mess');
            mlf_chat.playAudio();
          }
        } else {
          if (data.USER_FROM != from_user_id) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room').append('<a href="#" id="chat_room_' + data.USER_FROM + '" class="new_mess" data-chat="' + data.USER_FROM + '">' + data.USER_FROM_NAME + '<span class="close">X</span></a>');
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_content').append('<div class="messages messages_' + data.USER_FROM + ' messages_active"><div class="wrapp_mess"></div></div>');
            mlf_chat.getStartPage(data.USER_FROM);
            mlf_chat.setSizes();
            mlf_chat.addCookie(data.USER_FROM);
            mlf_chat.playAudio();
            createMsgWrap = true;
          }
        }

        if (data.USER_TO != from_user_id) {
          if (!createMsgWrap) mlf_chat.getMessFromId(data.USER_TO, data.USER_FROM, data.ID);
        } else {
          if (!createMsgWrap) mlf_chat.getMessFromId(data.USER_FROM, data.USER_TO, data.ID);
        }
      }
    } else if (data.MODE == 'delete') {
      var k;

      for (k in data.ID) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#item_mess_' + data.ID[k]).remove();
      }
    } else if (data.MODE == 'userlist') {
      if (mlf_chat.debug) console.log(data.USERS);
      var curDate = new Date().getTime() / 1000;
      var onlCount = 0;
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem').removeClass('userItem_online');
      var k;

      for (k in data.USERS) {
        var online = false;

        if (data.USERS[k]['time'] + 15 * 60 > curDate) {
          onlCount = onlCount + 1;
          online = true;
        }

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem_' + data.USERS[k]['id']).html()) {
          var t = new Date(data.USERS[k]['time'] * 1000);
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem_' + data.USERS[k]['id'] + ' a').html('<span class="date" data-time="' + data.USERS[k]['time'] + '">' + ((t.getHours() < 10 ? '0' : '') + t.getHours() + ':' + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes()) + '</span> ' + data.USERS[k]['name']);
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem_' + data.USERS[k]['id'] + ' a').attr('data-username', data.USERS[k]['name']);
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem_' + data.USERS[k]['id'] + ' a').attr('data-user', data.USERS[k]['id']);
        } else {
          var t = new Date(data.USERS[k]['time'] * 1000);
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers').prepend('<div class="userItem userItem_' + data.USERS[k]['id'] + '"><a href="' + data.USERS[k]['profile'] + '" data-username="' + data.USERS[k]['name'] + '" data-user="' + data.USERS[k]['id'] + '"><span class="date" data-time="' + data.USERS[k]['time'] + '">' + ((t.getHours() < 10 ? '0' : '') + t.getHours() + ':' + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes()) + '</span> ' + data.USERS[k]['name'] + '</a></div>');
        }

        if (online) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem_' + data.USERS[k]['id']).addClass('userItem_online');
        }
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.showUserList').html(onlCount);
    }

    if (data.MODE != 'userlist') {
      mlf_chat.checkDate();
      mlf_chat.setCord();
    }
  },
  showUserListSort: function showUserListSort() {
    var newHtml = [];
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers .userItem').each(function () {
      newHtml.push([_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.date').attr('data-time'), '<div class="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('class') + '">' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).html() + '</div>']);
    });
    newHtml.sort(function (a, b) {
      return b[0] - a[0];
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers').html('');
    var k;

    for (k in newHtml) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers .wrapUsers').append(newHtml[k][1]);
    }
  },
  checkDate: function checkDate() {
    var curDate = new Date().getTime() / 1000;
    if (!mlf_chat.lastcheck) mlf_chat.lastcheck = curDate - 60 * 6;

    if (curDate - 60 * 5 > mlf_chat.lastcheck) {
      //обновить онлайн
      if (mlf_chat.debug) console.log([curDate, mlf_chat.lastcheck]);
      mlf_chat.lastcheck = curDate;
      var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
      var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        url: mlf_chat.ml_chatPath + 'ajax/updateUserTime.php',
        data: {
          key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
          from_user_id: from_user_id,
          token: token
        },
        dataType: "json",
        type: "POST",
        cache: false,
        success: function success(data, textStatus) {},
        error: function error() {}
      });
    }
  },
  chat_submit: function chat_submit() {
    var formData = {};
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#send_mess input, #send_mess textarea').each(function () {
      var name = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('name');
      formData[name] = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).val();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_send').append('<div class="preload"><div class="load"></div></div>');
    formData['key'] = _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey;
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/send.php',
      data: formData,
      dataType: "json",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        if (mlf_chat.debug) console.log(data);

        if (data.RES == 'OK') {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_text').val('');
          var ma = mlf_chat.getDomMessBlockActive();

          if (ma) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
          }

          mlf_chat.lastreplay = [];
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .photo_btn a').removeClass('active');
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .file-selectdialog').hide();
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .files-list tr').remove();
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper input[name="MESS_USER_PHOTO"]').remove();
        } else if (data.RES == 'ERR') {
          mlf_chat.showError(data.ERR.join('.<br>'));
        }

        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_send .preload').remove();
      },
      error: function error() {}
    });
  },
  setCord: function setCord() {
    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatWrapper").attr('data-move') == 1) {
      var cord = [_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').offset().top, _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').offset().left, _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').width(), _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').height()];
      var setOn = false;

      if (mlf_chat.lastCord) {
        if (cord.join(',') != mlf_chat.lastCord.join(',')) {
          setOn = true;
        }
      } else {
        setOn = true;
      }

      if (setOn) {
        if (mlf_chat.debug) console.log(cord);
        mlf_chat.lastCord = cord;
        mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_SIZES', cord.join(','), {
          expires: 30
        });
      }
    }
  },
  setSizes: function setSizes() {
    //console.log($(window).width());
    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatWrapper").attr('data-move') == 1) {
      if (!mlf_chat.lastCord) {
        var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT_SIZES');

        if (cur_cookie) {
          cur_cookie = cur_cookie.toString().split(','); //console.log(cur_cookie);

          if (cur_cookie.length == 4) {
            if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() >= 640) {
              if (cur_cookie[0] > _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height()) cur_cookie[0] = 20;
              if (cur_cookie[1] > _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width()) cur_cookie[1] = 20; //$("#chatMainWrapper").css({'top':cur_cookie[0]+'px','left':cur_cookie[1]+'px','width':cur_cookie[2]+'px','height':cur_cookie[3]+'px'});

              var checkPos = mlf_chat.checkPosition(cur_cookie[0], cur_cookie[1]); //$("#chatMainWrapper").css({'top':checkPos[0]+'px','left':checkPos[1]+'px'});

              mlf_chat.lastCord = cur_cookie;
            }
          }
        }
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .closeChat').show();
    } //var h = $(window).height()-$('.logoBlock').height()-$('.legendMenu').height()-70;
    //$('#chatWrapper').height(h);


    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').css({
      'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatMainWrapper").height() + 'px',
      'width': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatMainWrapper").width() + 'px'
    });
    var h = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').height();
    var w = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').width();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').height(h);
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_content').css({
      'height': h - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .top_row').height() - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_send').height() + 'px',
      'top': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .top_row').height() + 'px'
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').css({
      'height': h - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .top_row').height() - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_send').height() + 'px'
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages .wrapp_mess').css({
      'padding-bottom': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room').height() + 10 + 'px'
    });

    if (w - 184 < 300) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').css({
        'width': w + 'px'
      });
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers').removeClass('active');
    } else {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').css({
        'width': w - 184 + 'px'
      });
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers').addClass('active');
    }

    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #send_mess').css({
      'width': w - 114 + 'px'
    }); //var checkPos = mlf_chat.checkPosition($("#chatMainWrapper").offset().top, $("#chatMainWrapper").offset().left);
    //$("#chatMainWrapper").css({'top':checkPos[0]+'px','left':checkPos[1]+'px'});
  },
  getDomMessBlockActive: function getDomMessBlockActive() {
    var messages_active = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementsByClassName("messages_active");

    if (messages_active.length) {
      return ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementsByClassName("messages_active")[0];
    }

    return false;
  },
  getMessFromId: function getMessFromId(user, user_to, id) {
    if (mlf_chat.debug) console.log([user, user_to, id]);
    var first = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.messages_' + user + ' .wrapp_mess .item').eq(0);

    if (first) {
      var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
      var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        url: mlf_chat.ml_chatPath + 'ajax/getMessages.php',
        data: {
          key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
          to_user_id: user,
          from_user_id: from_user_id,
          token: token,
          id: id
        },
        dataType: "html",
        type: "POST",
        cache: false,
        success: function success(data, textStatus) {
          var ma = mlf_chat.getDomMessBlockActive();
          var scrollH = 0;

          if (ma) {
            scrollH = ma.scrollHeight - ma.scrollTop - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").height();
          }

          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.messages_' + user + ' .wrapp_mess').append(data);

          if (ma && scrollH <= 80) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
          }
        },
        error: function error() {}
      });
    }
  },
  getStartPage: function getStartPage(user) {
    //console.log(user);
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.messages_' + user + ' .wrapp_mess .load_more').remove();
    var first = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.messages_' + user + ' .wrapp_mess .item').eq(0); //console.log(first);

    var lastId = 0;

    if (first) {
      lastId = first.attr('data-id');
    } //var to_user_id = $('#to_user_id').val();


    var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#from_user_id').val();
    var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_token').val();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/getMessages.php',
      data: {
        key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
        lastId: lastId,
        to_user_id: user,
        from_user_id: from_user_id,
        token: token
      },
      dataType: "html",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.messages_' + user + ' .wrapp_mess').prepend(data);
        var ma = mlf_chat.getDomMessBlockActive();

        if (!lastId) {
          if (ma) _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
        } else {
          var scrollH = 0;

          if (ma) {
            scrollH = ma.scrollHeight - ma.scrollTop - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").height();
          }

          if (ma && scrollH <= 80) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
          }
        }

        mlf_chat.setSizes();
      },
      error: function error() {}
    });
  },
  getActiveChat: function getActiveChat() {
    var from_user_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-user');
    var token = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-token');
    var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT');
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: mlf_chat.ml_chatPath + 'ajax/getActiveChat.php',
      data: {
        key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey,
        from_user_id: from_user_id,
        token: token,
        LAST_USERS_CHAT: cur_cookie
      },
      dataType: "html",
      type: "POST",
      cache: false,
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').prepend(data);
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.showUserList').html(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showUserList').html());
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room a').each(function () {
          var u_id = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-chat');

          if (parseInt(u_id) > 2) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_content').append('<div class="messages messages_' + u_id + ' messages_active"><div class="wrapp_mess"></div></div>');
            mlf_chat.getStartPage(u_id);
          }
        });
        mlf_chat.checkDel(); //setTimeout(function(){

        mlf_chat.setSizes(); //},500);

        var ma = mlf_chat.getDomMessBlockActive();

        if (ma) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(".messages_active").scrollTop(ma.scrollHeight);
        }

        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#send_mess').keypress(function (e) {
          if (e.which == 13) {
            mlf_chat.chat_submit();
            return false;
          }
        });
        mlf_chat.checkDate();
        if (!mlf_chat.mlf_chat_user.id) mlf_chat.setGuestMode(); //debugger;
      },
      error: function error() {}
    });
  },
  showError: function showError(text) {
    var ht = '<a href="#" class="close">закрыть</a><div class="errorMsg">' + text + '</div>';
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu .wrap').html(ht);
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').addClass('active');
  },
  init: function init() {
    mlf_chat.getActiveChat();

    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatWrapper").attr('data-move') == 1) {
      var cur_cookie = mlf_chat.CookiesWrap.get('BITRIX_SM_LAST_USERS_CHAT_OPEN');

      if (cur_cookie == '1') {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').show();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chatHeadBtn').hide();
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chatHeadBtn').show();
      }
    } else {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').show();
    }
  },
  checkPosition: function checkPosition(top, left) {
    //console.log([top,left]);
    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').width() && _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').height() && _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() && _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height()) {
      var min_left = 10;
      var max_left = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').width() - 10;
      if (left < min_left) left = min_left;
      if (left > max_left) left = max_left;
      var min_top = 10;
      var max_top = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').height() - 50;
      if (top < min_top) top = min_top;
      if (top > max_top) top = max_top;
    }

    return [top, left];
  },
  setGuestMode: function setGuestMode() {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .load_more').hide();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room').hide();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_send').html('<a href="#" class="guestBtn toLevel1" data-page="login/" title="вход в игру">вход в игру</a>');
  },
  loadChat: function loadChat() {
    //старт загрузки чата
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
      url: _game__WEBPACK_IMPORTED_MODULE_2__["default"].curUrl + "chat/load.php",
      data: {
        key: _game__WEBPACK_IMPORTED_MODULE_2__["default"].autKey
      },
      dataType: "html",
      type: "POST",
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('body').append(data);
        mlf_chat.mlf_chat_user = {
          'id': parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-user')),
          'name': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-name'),
          'isBan': parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-isBan')),
          'isDel': parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-isDel')),
          'isAdm': parseInt(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-isAdm'))
        };
        var h = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() - _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.bottomGameBlockWrap').height() - 70;
        var w = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').width();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').css({
          'height': h + 'px',
          'max-height': h + 'px'
        });
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatWrapper").attr('data-move', 1);
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('body').append('<div class="chatHeadBtn"><a href="#"><span class="showUserList"></span></a></div>');

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() < 640) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatMainWrapper").css({
            'position': 'fixed',
            'bottom': '0px',
            'left': '0px;',
            'width': '100%',
            'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() - 120 + 'px',
            'max-height': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() - 120 + 'px'
          });
        } else {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatMainWrapper").css({
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'width': '320px',
            'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() - 200 + 'px'
          });
          _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()("#chatMainWrapper").on("resize", function (event, ui) {
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
          backtrack: 10
        });
        mlf_chat.pushstream.onmessage = mlf_chat.message;
        mlf_chat.pushstream.addChannel(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper').attr('data-chanel'));
        mlf_chat.pushstream.connect();
        mlf_chat.initHandlers();
        setTimeout(function () {
          mlf_chat.init();
        }, 500);
      }
    });
  },
  initHandlers: function initHandlers() {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .load_more a', function (e) {
      e.preventDefault(); //console.log($(this));

      var chat = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-chat');
      mlf_chat.getStartPage(chat);
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.closeChat', function (e) {
      e.preventDefault();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').hide();
      mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', '0', {
        expires: 30
      });
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chatHeadBtn').show();
      mlf_chat.setSizes();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.send_chat_mess', function (e) {
      e.preventDefault();
      mlf_chat.chat_submit();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.chatHeadBtn a', function (e) {
      e.preventDefault();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatMainWrapper').show();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('.chatHeadBtn').hide();
      mlf_chat.CookiesWrap.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', 1, {
        expires: 30
      });
      mlf_chat.setSizes();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .chat_room a.active .close', function () {
      mlf_chat.removeCookie(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('a').attr('data-chat'));
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-chat')).remove();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('a').attr('data-chat')).remove();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').removeClass('messages_active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room a').removeClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_1').addClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chat_room_1').removeClass('new_mess');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_1').addClass('messages_active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #to_user_id').val(1);
      mlf_chat.setSizes();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .chat_room a', function (e) {
      e.preventDefault();
      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) return;
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').removeClass('messages_active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room a').removeClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('new_mess');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-chat')).addClass('messages_active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #to_user_id').val(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-chat'));
      mlf_chat.setSizes();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .item .replay', function (e) {
      e.preventDefault();
      mlf_chat.setReplay(_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.text_name').find('.name').text());
      return;
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .item .delete', function (e) {
      e.preventDefault();
      var messId = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.item').attr('data-id');
      mlf_chat.deleteItem(messId); //$(this).parents('.item').hide();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .showItemMenu .close', function (e) {
      e.preventDefault();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').removeClass('active'); //Cookies.set('BITRIX_SM_LAST_USERS_CHAT_OPEN', '0', {expires: 30});

      mlf_chat.setSizes();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .openMap', function (e) {
      e.preventDefault();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').removeClass('active');
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .wrapUsers .userItem a', function (e) {
      e.preventDefault();
      var ht = '';
      ht += '<a href="#" class="close">закрыть</a><div class="userWrap"><div class="name">' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-username') + '</div>' + '<div class="userNumber">номер королевства: ' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href').replace('https://g520.ru/', '').replace('?id=', '') + '</div>' + '<ul><li><a href="#" class="openMap" data-user="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('href').replace('https://g520.ru/', '').replace('?id=', '') + '">посмотреть карту</li>';

      if (mlf_chat.mlf_chat_user.id && _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user') != mlf_chat.mlf_chat_user.id) {
        ht += '<li><a class="lsChat" href="#" data-id="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user') + '" data-name="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-username') + '">личный чат</a></li>';
        ht += '<li><a class="setPrigl" href="#" data-id="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user') + '">пригласить на карту</a></li>';
      }

      if (mlf_chat.mlf_chat_user.isBan && _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user') != mlf_chat.mlf_chat_user.id) {
        ht += '<li><a class="toBanUser" data-id="' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-user') + '" href="#">заблокировать</a></li>';
      }

      ht += '</ul>' + '</div>';
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu .wrap').html(ht);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').addClass('active');
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .item .logo a, #chatWrapper .item a.name', function (e) {
      e.preventDefault();
      var item = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('.item');
      var ht = '';
      ht += '<a href="#" class="close">закрыть</a><div class="userWrap"><div class="name">' + item.attr('data-username') + '</div>' + '<div class="userNumber">номер королевства: ' + item.find('.name').attr('href').replace('https://g520.ru/', '').replace('?id=', '') + '</div>' + '<ul><li><a href="#" class="openMap" data-user="' + item.find('.name').attr('href').replace('https://g520.ru/', '').replace('?id=', '') + '">посмотреть карту</li>';

      if (mlf_chat.mlf_chat_user.id && item.attr('data-user') != mlf_chat.mlf_chat_user.id) {
        ht += '<li><a class="lsChat" href="#" data-id="' + item.attr('data-user') + '" data-name="' + item.attr('data-username') + '">личный чат</a></li>';
        ht += '<li><a class="setPrigl" href="#" data-id="' + item.attr('data-user') + '">пригласить на карту</a></li>';
      }

      if (mlf_chat.mlf_chat_user.isBan && item.attr('data-user') != mlf_chat.mlf_chat_user.id) {
        ht += '<li><a class="toBanUser" data-id="' + item.attr('data-user') + '" href="#">заблокировать</a></li>';
      }

      ht += '</ul>' + '</div>';
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu .wrap').html(ht);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').addClass('active');
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .setPrigl', function (e) {
      e.preventDefault();
      var user = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-id');
      mlf_chat.sendPrigl(user);
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .lsChat', function (e) {
      e.preventDefault();
      var user = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-id'); //console.log('#chatWrapper .lsChat');
      //debugger;

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + user).html()) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').removeClass('messages_active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room a').removeClass('active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #chat_room_' + user).addClass('active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #chat_room_' + user).removeClass('new_mess');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages_' + user).addClass('messages_active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #to_user_id').val(user);
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .messages').removeClass('messages_active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room a').removeClass('active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_content').append('<div class="messages messages_' + user + ' messages_active"><div class="wrapp_mess"></div></div>');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chat_room').append('<a href="#" id="chat_room_' + user + '" class="active" data-chat="' + user + '">' + _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-name') + '<span class="close">X</span></a>');
        mlf_chat.getStartPage(user);
        mlf_chat.setSizes();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper #to_user_id').val(user);
        mlf_chat.addCookie(user);
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu').removeClass('active');
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.toBanUser', function (e) {
      e.preventDefault();
      var user = _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-id');
      var ht = '';
      ht += '<a href="#" class="close">закрыть</a><form class="banForm" onsubmit="return false;"><input type="hidden" name="user" value="' + user + '"/><select name="time">';
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
      _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showItemMenu .wrap').html(ht);
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.banForm .submit', function (e) {
      e.preventDefault();
      mlf_chat.banUser();
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .showUserList', function (e) {
      e.preventDefault();

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showUserList .chatUsers').hasClass('active')) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showUserList .chatUsers').removeClass('active');
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .showUserList .chatUsers').removeClass('active').addClass('active');
        mlf_chat.showUserListSort();
      }
    }); //

    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .showUserList', function (e) {
      e.preventDefault();

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers').hasClass('active')) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers').removeClass('active');
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .chatUsers').removeClass('active').addClass('active');
      }
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '#chatWrapper .photo_btn a', function (e) {
      e.preventDefault();

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).hasClass('active')) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .file-selectdialog').hide(); //$('#chatWrapper .files-list tr').remove();
        //$('#chatWrapper input[name="MESS_USER_PHOTO"]').remove();
      } else {
        BX.onCustomEvent(BX('file-selectdialog-chatfile').parentNode, 'BFileDLoadFormController');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()('#chatWrapper .file-selectdialog').show();
      }
    });
    _dom7_lib__WEBPACK_IMPORTED_MODULE_1___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).on('resize', function () {
      if (!mlf_chat.lastCordLock) {
        mlf_chat.lastCord = null;
      }

      mlf_chat.setSizes();
    });
    ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].addEventListener("orientationchange", function () {
      if (!mlf_chat.lastCordLock) {
        mlf_chat.lastCord = null;
      }

      mlf_chat.setSizes();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mlf_chat);

/***/ }),

/***/ "./js/lib/cookies.js":
/*!***************************!*\
  !*** ./js/lib/cookies.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;

(function (factory) {
  var registeredInModuleLoader;

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    registeredInModuleLoader = true;
  }

  if (( false ? undefined : _typeof(exports)) === 'object') {
    module.exports = factory();
    registeredInModuleLoader = true;
  }

  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();

    api.noConflict = function () {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function () {
  function extend() {
    var i = 0;
    var result = {};

    for (; i < arguments.length; i++) {
      var attributes = arguments[i];

      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }

    return result;
  }

  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }

  function init(converter) {
    function api() {}

    function set(key, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }

      attributes = extend({
        path: '/'
      }, api.defaults, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
      } // We're using "expires" because "max-age" is not supported by IE


      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

      try {
        var result = JSON.stringify(value);

        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) {}

      value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
      key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
      var stringifiedAttributes = '';

      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue;
        } // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...


        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return document.cookie = key + '=' + value + stringifiedAttributes;
    }

    function get(key, json) {
      if (typeof document === 'undefined') {
        return;
      }

      var jar = {}; // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.

      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (!json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = decode(parts[0]);
          cookie = (converter.read || converter)(cookie, name) || decode(cookie);

          if (json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          jar[name] = cookie;

          if (key === name) {
            break;
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar;
    }

    api.set = set;

    api.get = function (key) {
      return get(key, false
      /* read as raw */
      );
    };

    api.getJSON = function (key) {
      return get(key, true
      /* read as json */
      );
    };

    api.remove = function (key, attributes) {
      set(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.defaults = {};
    api.withConverter = init;
    return api;
  }

  return init(function () {});
});

/***/ }),

/***/ "./js/lib/dom7_lib.js":
/*!****************************!*\
  !*** ./js/lib/dom7_lib.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';
  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */

  var doc = typeof document === 'undefined' ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ''
    }
  } : document; // eslint-disable-line

  var win = typeof window === 'undefined' ? {
    document: doc,
    navigator: {
      userAgent: ''
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window; // eslint-disable-line

  var Dom7 = function Dom7(arr) {
    var self = this; // Create array-like object

    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }

    self.length = arr.length; // Return collection with methods

    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;

    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }

    if (selector) {
      // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';

          if (html.indexOf('<li') === 0) {
            toCreate = 'ul';
          }

          if (html.indexOf('<tr') === 0) {
            toCreate = 'tbody';
          }

          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
            toCreate = 'tr';
          }

          if (html.indexOf('<tbody') === 0) {
            toCreate = 'table';
          }

          if (html.indexOf('<option') === 0) {
            toCreate = 'select';
          }

          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;

          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }

          for (i = 0; i < els.length; i += 1) {
            if (els[i]) {
              arr.push(els[i]);
            }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }

    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }

    return uniqueArray;
  }

  function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
      return group1.toUpperCase();
    });
  }

  function requestAnimationFrame(callback) {
    if (win.requestAnimationFrame) {
      return win.requestAnimationFrame(callback);
    } else if (win.webkitRequestAnimationFrame) {
      return win.webkitRequestAnimationFrame(callback);
    }

    return win.setTimeout(callback, 1000 / 60);
  }

  function cancelAnimationFrame(id) {
    if (win.cancelAnimationFrame) {
      return win.cancelAnimationFrame(id);
    } else if (win.webkitCancelAnimationFrame) {
      return win.webkitCancelAnimationFrame(id);
    }

    return win.clearTimeout(id);
  } // Classes and attributes


  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }

    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.add(classes[i]);
        }
      }
    }

    return this;
  }

  function removeClass(className) {
    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.remove(classes[i]);
        }
      }
    }

    return this;
  }

  function hasClass(className) {
    if (!this[0]) {
      return false;
    }

    return this[0].classList.contains(className);
  }

  function toggleClass(className) {
    var classes = className.split(' ');

    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
          this[j].classList.toggle(classes[i]);
        }
      }
    }

    return this;
  }

  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) {
        return this[0].getAttribute(attrs);
      }

      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  } // eslint-disable-next-line


  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  } // eslint-disable-next-line


  function prop(props, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof props === 'string') {
      // Get prop
      if (this[0]) {
        return this[0][props];
      }
    } else {
      // Set props
      for (var i = 0; i < this.length; i += 1) {
        if (arguments$1.length === 2) {
          // String
          this[i][props] = value;
        } else {
          // Object
          // eslint-disable-next-line
          for (var propName in props) {
            this[i][propName] = props[propName];
          }
        }
      }

      return this;
    }
  }

  function data(key, value) {
    var el;

    if (typeof value === 'undefined') {
      el = this[0]; // Get value

      if (el) {
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute("data-" + key);

        if (dataKey) {
          return dataKey;
        }

        return undefined;
      }

      return undefined;
    } // Set value


    for (var i = 0; i < this.length; i += 1) {
      el = this[i];

      if (!el.dom7ElementDataStorage) {
        el.dom7ElementDataStorage = {};
      }

      el.dom7ElementDataStorage[key] = value;
    }

    return this;
  }

  function removeData(key) {
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
        el.dom7ElementDataStorage[key] = null;
        delete el.dom7ElementDataStorage[key];
      }
    }
  }

  function dataset() {
    var el = this[0];

    if (!el) {
      return undefined;
    }

    var dataset = {}; // eslint-disable-line

    if (el.dataset) {
      // eslint-disable-next-line
      for (var dataKey in el.dataset) {
        dataset[dataKey] = el.dataset[dataKey];
      }
    } else {
      for (var i = 0; i < el.attributes.length; i += 1) {
        // eslint-disable-next-line
        var attr = el.attributes[i];

        if (attr.name.indexOf('data-') >= 0) {
          dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
        }
      }
    } // eslint-disable-next-line


    for (var key in dataset) {
      if (dataset[key] === 'false') {
        dataset[key] = false;
      } else if (dataset[key] === 'true') {
        dataset[key] = true;
      } else if (parseFloat(dataset[key]) === dataset[key] * 1) {
        dataset[key] *= 1;
      }
    }

    return dataset;
  }

  function val(value) {
    var dom = this;

    if (typeof value === 'undefined') {
      if (dom[0]) {
        if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
          var values = [];

          for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
            values.push(dom[0].selectedOptions[i].value);
          }

          return values;
        }

        return dom[0].value;
      }

      return undefined;
    }

    for (var i$1 = 0; i$1 < dom.length; i$1 += 1) {
      var el = dom[i$1];

      if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
        for (var j = 0; j < el.options.length; j += 1) {
          el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
        }
      } else {
        el.value = value;
      }
    }

    return dom;
  } // Transforms
  // eslint-disable-next-line


  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }

    return this;
  }

  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }

    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }

    return this;
  } // Events


  function on() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];

    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }

    if (!capture) {
      capture = false;
    }

    function handleLiveEvent(e) {
      var target = e.target;

      if (!target) {
        return;
      }

      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) {
        listener.apply(target, eventData);
      } else {
        var parents = $(target).parents(); // eslint-disable-line

        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) {
            listener.apply(parents[k], eventData);
          }
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];

          if (!el.dom7Listeners) {
            el.dom7Listeners = {};
          }

          if (!el.dom7Listeners[event]) {
            el.dom7Listeners[event] = [];
          }

          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];

          if (!el.dom7LiveListeners) {
            el.dom7LiveListeners = {};
          }

          if (!el.dom7LiveListeners[event$1]) {
            el.dom7LiveListeners[event$1] = [];
          }

          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];

    if (typeof args[1] === 'function') {
      assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }

    if (!capture) {
      capture = false;
    }

    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function once() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var dom = this;
    var eventName = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];

    if (typeof args[1] === 'function') {
      assign = args, eventName = assign[0], listener = assign[1], capture = assign[2];
      targetSelector = undefined;
    }

    function onceHandler() {
      var eventArgs = [],
          len = arguments.length;

      while (len--) {
        eventArgs[len] = arguments[len];
      }

      listener.apply(this, eventArgs);
      dom.off(eventName, targetSelector, onceHandler, capture);

      if (onceHandler.dom7proxy) {
        delete onceHandler.dom7proxy;
      }
    }

    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
  }

  function trigger() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = void 0;

        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        } // eslint-disable-next-line


        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }

    return this;
  }

  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;

    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) {
        return;
      }

      callback.call(this, e);

      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }

    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }

    return this;
  }

  function animationEnd(callback) {
    var events = ['webkitAnimationEnd', 'animationend'];
    var dom = this;
    var i;

    function fireCallBack(e) {
      if (e.target !== this) {
        return;
      }

      callback.call(this, e);

      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }

    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }

    return this;
  } // Sizing/Styles


  function width() {
    if (this[0] === win) {
      return win.innerWidth;
    }

    if (this.length > 0) {
      return parseFloat(this.css('width'));
    }

    return null;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function height() {
    if (this[0] === win) {
      return win.innerHeight;
    }

    if (this.length > 0) {
      return parseFloat(this.css('height'));
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }

    return null;
  }

  function hide() {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.display = 'none';
    }

    return this;
  }

  function show() {
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.style.display === 'none') {
        el.style.display = '';
      }

      if (win.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
        // Still not visible
        el.style.display = 'block';
      }
    }

    return this;
  }

  function styles() {
    if (this[0]) {
      return win.getComputedStyle(this[0], null);
    }

    return {};
  }

  function css(props, value) {
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) {
          return win.getComputedStyle(this[0], null).getPropertyValue(props);
        }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  } // Dom manipulation


  function toArray() {
    var arr = [];

    for (var i = 0; i < this.length; i += 1) {
      arr.push(this[i]);
    }

    return arr;
  } // Iterate over the collection passing elements to `callback`


  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) {
      return this;
    } // Iterate over the current collection


    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    } // Return `this` to allow chained DOM operations


    return this;
  }

  function forEach(callback) {
    // Don't bother continuing without a callback
    if (!callback) {
      return this;
    } // Iterate over the current collection


    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], this[i], i) === false) {
        // End the loop early
        return this;
      }
    } // Return `this` to allow chained DOM operations


    return this;
  }

  function filter(callback) {
    var matchedItems = [];
    var dom = this;

    for (var i = 0; i < dom.length; i += 1) {
      if (callback.call(dom[i], i, dom[i])) {
        matchedItems.push(dom[i]);
      }
    }

    return new Dom7(matchedItems);
  }

  function map(callback) {
    var modifiedItems = [];
    var dom = this;

    for (var i = 0; i < dom.length; i += 1) {
      modifiedItems.push(callback.call(dom[i], i, dom[i]));
    }

    return new Dom7(modifiedItems);
  } // eslint-disable-next-line


  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  } // eslint-disable-next-line


  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }

      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;

    if (!el || typeof selector === 'undefined') {
      return false;
    }

    if (typeof selector === 'string') {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      }

      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }

      return false;
    } else if (selector === doc) {
      return el === doc;
    } else if (selector === win) {
      return el === win;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) {
          return true;
        }
      }

      return false;
    }

    return false;
  }

  function indexOf(el) {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i] === el) {
        return i;
      }
    }

    return -1;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) {
          i += 1;
        }
      }

      return i;
    }

    return undefined;
  } // eslint-disable-next-line


  function eq(index) {
    if (typeof index === 'undefined') {
      return this;
    }

    var length = this.length;
    var returnIndex;

    if (index > length - 1) {
      return new Dom7([]);
    }

    if (index < 0) {
      returnIndex = length + index;

      if (returnIndex < 0) {
        return new Dom7([]);
      }

      return new Dom7([this[returnIndex]]);
    }

    return new Dom7([this[index]]);
  }

  function append() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  } // eslint-disable-next-line


  function appendTo(parent) {
    $(parent).append(this);
    return this;
  }

  function prepend(newChild) {
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  } // eslint-disable-next-line


  function prependTo(parent) {
    $(parent).prepend(this);
    return this;
  }

  function insertBefore(selector) {
    var before = $(selector);

    for (var i = 0; i < this.length; i += 1) {
      if (before.length === 1) {
        before[0].parentNode.insertBefore(this[i], before[0]);
      } else if (before.length > 1) {
        for (var j = 0; j < before.length; j += 1) {
          before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
        }
      }
    }
  }

  function insertAfter(selector) {
    var after = $(selector);

    for (var i = 0; i < this.length; i += 1) {
      if (after.length === 1) {
        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
      } else if (after.length > 1) {
        for (var j = 0; j < after.length; j += 1) {
          after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
        }
      }
    }
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }

        return new Dom7([]);
      }

      if (this[0].nextElementSibling) {
        return new Dom7([this[0].nextElementSibling]);
      }

      return new Dom7([]);
    }

    return new Dom7([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];

    if (!el) {
      return new Dom7([]);
    }

    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(next).is(selector)) {
          nextEls.push(next);
        }
      } else {
        nextEls.push(next);
      }

      el = next;
    }

    return new Dom7(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }

        return new Dom7([]);
      }

      if (el.previousElementSibling) {
        return new Dom7([el.previousElementSibling]);
      }

      return new Dom7([]);
    }

    return new Dom7([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];

    if (!el) {
      return new Dom7([]);
    }

    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(prev).is(selector)) {
          prevEls.push(prev);
        }
      } else {
        prevEls.push(prev);
      }

      el = prev;
    }

    return new Dom7(prevEls);
  }

  function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) {
            parents.push(this[i].parentNode);
          }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(unique(parents));
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line

      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }

        parent = parent.parentNode;
      }
    }

    return $(unique(parents));
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return new Dom7(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) {
            children.push(childNodes[j]);
          }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return new Dom7(unique(children));
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) {
        this[i].parentNode.removeChild(this[i]);
      }
    }

    return this;
  }

  function detach() {
    return this.remove();
  }

  function add() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var dom = this;
    var i;
    var j;

    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);

      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }

    return dom;
  }

  function empty() {
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (el.nodeType === 1) {
        for (var j = 0; j < el.childNodes.length; j += 1) {
          if (el.childNodes[j].parentNode) {
            el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
          }
        }

        el.textContent = '';
      }
    }

    return this;
  }

  var Methods =
  /*#__PURE__*/
  Object.freeze({
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    prop: prop,
    data: data,
    removeData: removeData,
    dataset: dataset,
    val: val,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    once: once,
    trigger: trigger,
    transitionEnd: transitionEnd,
    animationEnd: animationEnd,
    width: width,
    outerWidth: outerWidth,
    height: height,
    outerHeight: outerHeight,
    offset: offset,
    hide: hide,
    show: show,
    styles: styles,
    css: css,
    toArray: toArray,
    each: each,
    forEach: forEach,
    filter: filter,
    map: map,
    html: html,
    text: text,
    is: is,
    indexOf: indexOf,
    index: index,
    eq: eq,
    append: append,
    appendTo: appendTo,
    prepend: prepend,
    prependTo: prependTo,
    insertBefore: insertBefore,
    insertAfter: insertAfter,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    siblings: siblings,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    detach: detach,
    add: add,
    empty: empty
  });

  function scrollTo() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var left = args[0];
    var top = args[1];
    var duration = args[2];
    var easing = args[3];
    var callback = args[4];

    if (args.length === 4 && typeof easing === 'function') {
      callback = easing;
      assign = args, left = assign[0], top = assign[1], duration = assign[2], callback = assign[3], easing = assign[4];
    }

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    return this.each(function animate() {
      var el = this;
      var currentTop;
      var currentLeft;
      var maxTop;
      var maxLeft;
      var newTop;
      var newLeft;
      var scrollTop; // eslint-disable-line

      var scrollLeft; // eslint-disable-line

      var animateTop = top > 0 || top === 0;
      var animateLeft = left > 0 || left === 0;

      if (typeof easing === 'undefined') {
        easing = 'swing';
      }

      if (animateTop) {
        currentTop = el.scrollTop;

        if (!duration) {
          el.scrollTop = top;
        }
      }

      if (animateLeft) {
        currentLeft = el.scrollLeft;

        if (!duration) {
          el.scrollLeft = left;
        }
      }

      if (!duration) {
        return;
      }

      if (animateTop) {
        maxTop = el.scrollHeight - el.offsetHeight;
        newTop = Math.max(Math.min(top, maxTop), 0);
      }

      if (animateLeft) {
        maxLeft = el.scrollWidth - el.offsetWidth;
        newLeft = Math.max(Math.min(left, maxLeft), 0);
      }

      var startTime = null;

      if (animateTop && newTop === currentTop) {
        animateTop = false;
      }

      if (animateLeft && newLeft === currentLeft) {
        animateLeft = false;
      }

      function render(time) {
        if (time === void 0) time = new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
        var done;

        if (animateTop) {
          scrollTop = currentTop + easeProgress * (newTop - currentTop);
        }

        if (animateLeft) {
          scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
        }

        if (animateTop && newTop > currentTop && scrollTop >= newTop) {
          el.scrollTop = newTop;
          done = true;
        }

        if (animateTop && newTop < currentTop && scrollTop <= newTop) {
          el.scrollTop = newTop;
          done = true;
        }

        if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }

        if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
          el.scrollLeft = newLeft;
          done = true;
        }

        if (done) {
          if (callback) {
            callback();
          }

          return;
        }

        if (animateTop) {
          el.scrollTop = scrollTop;
        }

        if (animateLeft) {
          el.scrollLeft = scrollLeft;
        }

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    });
  } // scrollTop(top, duration, easing, callback) {


  function scrollTop() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var top = args[0];
    var duration = args[1];
    var easing = args[2];
    var callback = args[3];

    if (args.length === 3 && typeof easing === 'function') {
      assign = args, top = assign[0], duration = assign[1], callback = assign[2], easing = assign[3];
    }

    var dom = this;

    if (typeof top === 'undefined') {
      if (dom.length > 0) {
        return dom[0].scrollTop;
      }

      return null;
    }

    return dom.scrollTo(undefined, top, duration, easing, callback);
  }

  function scrollLeft() {
    var assign;
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var left = args[0];
    var duration = args[1];
    var easing = args[2];
    var callback = args[3];

    if (args.length === 3 && typeof easing === 'function') {
      assign = args, left = assign[0], duration = assign[1], callback = assign[2], easing = assign[3];
    }

    var dom = this;

    if (typeof left === 'undefined') {
      if (dom.length > 0) {
        return dom[0].scrollLeft;
      }

      return null;
    }

    return dom.scrollTo(left, undefined, duration, easing, callback);
  }

  var Scroll =
  /*#__PURE__*/
  Object.freeze({
    scrollTo: scrollTo,
    scrollTop: scrollTop,
    scrollLeft: scrollLeft
  });

  function animate(initialProps, initialParams) {
    var els = this;
    var a = {
      props: Object.assign({}, initialProps),
      params: Object.assign({
        duration: 300,
        easing: 'swing' // or 'linear'

        /* Callbacks
        begin(elements)
        complete(elements)
        progress(elements, complete, remaining, start, tweenValue)
        */

      }, initialParams),
      elements: els,
      animating: false,
      que: [],
      easingProgress: function easingProgress(easing, progress) {
        if (easing === 'swing') {
          return 0.5 - Math.cos(progress * Math.PI) / 2;
        }

        if (typeof easing === 'function') {
          return easing(progress);
        }

        return progress;
      },
      stop: function stop() {
        if (a.frameId) {
          cancelAnimationFrame(a.frameId);
        }

        a.animating = false;
        a.elements.each(function (index, el) {
          var element = el;
          delete element.dom7AnimateInstance;
        });
        a.que = [];
      },
      done: function done(complete) {
        a.animating = false;
        a.elements.each(function (index, el) {
          var element = el;
          delete element.dom7AnimateInstance;
        });

        if (complete) {
          complete(els);
        }

        if (a.que.length > 0) {
          var que = a.que.shift();
          a.animate(que[0], que[1]);
        }
      },
      animate: function animate(props, params) {
        if (a.animating) {
          a.que.push([props, params]);
          return a;
        }

        var elements = []; // Define & Cache Initials & Units

        a.elements.each(function (index, el) {
          var initialFullValue;
          var initialValue;
          var unit;
          var finalValue;
          var finalFullValue;

          if (!el.dom7AnimateInstance) {
            a.elements[index].dom7AnimateInstance = a;
          }

          elements[index] = {
            container: el
          };
          Object.keys(props).forEach(function (prop) {
            initialFullValue = win.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
            initialValue = parseFloat(initialFullValue);
            unit = initialFullValue.replace(initialValue, '');
            finalValue = parseFloat(props[prop]);
            finalFullValue = props[prop] + unit;
            elements[index][prop] = {
              initialFullValue: initialFullValue,
              initialValue: initialValue,
              unit: unit,
              finalValue: finalValue,
              finalFullValue: finalFullValue,
              currentValue: initialValue
            };
          });
        });
        var startTime = null;
        var time;
        var elementsDone = 0;
        var propsDone = 0;
        var done;
        var began = false;
        a.animating = true;

        function render() {
          time = new Date().getTime();
          var progress;
          var easeProgress; // let el;

          if (!began) {
            began = true;

            if (params.begin) {
              params.begin(els);
            }
          }

          if (startTime === null) {
            startTime = time;
          }

          if (params.progress) {
            // eslint-disable-next-line
            params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
          }

          elements.forEach(function (element) {
            var el = element;

            if (done || el.done) {
              return;
            }

            Object.keys(props).forEach(function (prop) {
              if (done || el.done) {
                return;
              }

              progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
              easeProgress = a.easingProgress(params.easing, progress);
              var ref = el[prop];
              var initialValue = ref.initialValue;
              var finalValue = ref.finalValue;
              var unit = ref.unit;
              el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
              var currentValue = el[prop].currentValue;

              if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                el.container.style[prop] = finalValue + unit;
                propsDone += 1;

                if (propsDone === Object.keys(props).length) {
                  el.done = true;
                  elementsDone += 1;
                }

                if (elementsDone === elements.length) {
                  done = true;
                }
              }

              if (done) {
                a.done(params.complete);
                return;
              }

              el.container.style[prop] = currentValue + unit;
            });
          });

          if (done) {
            return;
          } // Then call


          a.frameId = requestAnimationFrame(render);
        }

        a.frameId = requestAnimationFrame(render);
        return a;
      }
    };

    if (a.elements.length === 0) {
      return els;
    }

    var animateInstance;

    for (var i = 0; i < a.elements.length; i += 1) {
      if (a.elements[i].dom7AnimateInstance) {
        animateInstance = a.elements[i].dom7AnimateInstance;
      } else {
        a.elements[i].dom7AnimateInstance = a;
      }
    }

    if (!animateInstance) {
      animateInstance = a;
    }

    if (initialProps === 'stop') {
      animateInstance.stop();
    } else {
      animateInstance.animate(a.props, a.params);
    }

    return els;
  }

  function stop() {
    var els = this;

    for (var i = 0; i < els.length; i += 1) {
      if (els[i].dom7AnimateInstance) {
        els[i].dom7AnimateInstance.stop();
      }
    }
  }

  var Animate =
  /*#__PURE__*/
  Object.freeze({
    animate: animate,
    stop: stop
  });
  var noTrigger = 'resize scroll'.split(' ');

  function eventShortcut(name) {
    var ref;
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) {
            this[i][name]();
          } else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return (ref = this).on.apply(ref, [name].concat(args));
  }

  function click() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['click'].concat(args));
  }

  function blur() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['blur'].concat(args));
  }

  function focus() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['focus'].concat(args));
  }

  function focusin() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['focusin'].concat(args));
  }

  function focusout() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['focusout'].concat(args));
  }

  function keyup() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['keyup'].concat(args));
  }

  function keydown() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['keydown'].concat(args));
  }

  function keypress() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['keypress'].concat(args));
  }

  function submit() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['submit'].concat(args));
  }

  function change() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['change'].concat(args));
  }

  function mousedown() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mousedown'].concat(args));
  }

  function mousemove() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mousemove'].concat(args));
  }

  function mouseup() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mouseup'].concat(args));
  }

  function mouseenter() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mouseenter'].concat(args));
  }

  function mouseleave() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mouseleave'].concat(args));
  }

  function mouseout() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mouseout'].concat(args));
  }

  function mouseover() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['mouseover'].concat(args));
  }

  function touchstart() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['touchstart'].concat(args));
  }

  function touchend() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['touchend'].concat(args));
  }

  function touchmove() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['touchmove'].concat(args));
  }

  function resize() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['resize'].concat(args));
  }

  function scroll() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    return eventShortcut.bind(this).apply(void 0, ['scroll'].concat(args));
  }

  var eventShortcuts =
  /*#__PURE__*/
  Object.freeze({
    click: click,
    blur: blur,
    focus: focus,
    focusin: focusin,
    focusout: focusout,
    keyup: keyup,
    keydown: keydown,
    keypress: keypress,
    submit: submit,
    change: change,
    mousedown: mousedown,
    mousemove: mousemove,
    mouseup: mouseup,
    mouseenter: mouseenter,
    mouseleave: mouseleave,
    mouseout: mouseout,
    mouseover: mouseover,
    touchstart: touchstart,
    touchend: touchend,
    touchmove: touchmove,
    resize: resize,
    scroll: scroll
  });
  [Methods, Scroll, Animate, eventShortcuts].forEach(function (group) {
    Object.keys(group).forEach(function (methodName) {
      $.fn[methodName] = group[methodName];
    });
  });
  return $;
});

/***/ }),

/***/ "./js/lib/game.js":
/*!************************!*\
  !*** ./js/lib/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _wrapper_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper/ajax */ "./js/lib/wrapper/ajax.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./js/lib/modal.js");
/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base64 */ "./js/lib/base64.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images */ "./js/lib/images.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ "./js/lib/audio.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom7_lib */ "./js/lib/dom7_lib.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dom7_lib__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax = function (options) {
  Object(_wrapper_ajax__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
};

var gkGame = {
  debugMode: false,
  notCalcMode: false,
  moveMode: false,
  moveCord: [],
  autKey: '',
  curUrl: "https://g520.ru/game.client.v.1/",
  kef: 1.8,
  ksizes: {},
  mapId: null,
  type: null,
  mapData: null,
  setLoadMenu: false,
  draged: false,
  app: null,
  viewport: null,
  friends: [],
  buildClickCalback: function buildClickCalback(data) {
    if (gkGame.draged) return;

    if (data.url && data.name) {
      _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_build');
      _modal__WEBPACK_IMPORTED_MODULE_2__["default"].showBuildFromUrl(data.url, data.name);
    } else if (data.build_content && data.name) {
      _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('click_build');
      _modal__WEBPACK_IMPORTED_MODULE_2__["default"].showBuildContent(data.build_content, data.name);
    } //console.log(data);

  },
  visible_sq_ar: [284, 306, 283, 286, 263, 285, 260, 240, 238, //1
  237, 217, 288, 287, 262, 265, 235, 215, 214, 194, //1
  216, 196, 195, 175, 239, 219, 218, 198, 197, //1
  177, 242, 241, 221, 220, 200, 199, 179, 264, 244, //1
  243, 223, 222, 202, 201, 204, 203, 181, 178, 156, //1
  166, 144, 143, 146, 123, 145, 122, 125, 102, 99, //2
  77, 100, 120, 121, 97, 98, 76 //2
  ],
  visible_sq: {},
  map_cords: [],
  debug: function debug(name, data) {
    if (!this.debugMode) return;
    console.log("---" + name + "---");
    if (data !== false) console.log(data);
  },
  //отправка команд с клиента
  sendCommand: function sendCommand(cmd, callback) {
    if (_typeof(cmd) == 'object') {
      var dtpost = cmd;
    } else {
      var dtpost = {
        key: gkGame.autKey,
        cmd: cmd
      };
    }

    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      url: this.curUrl + "api/send.php",
      data: dtpost,
      dataType: "json",
      type: "POST",
      success: function success(data, textStatus) {
        if (typeof callback == 'function') callback.call(gkGame, data);
      }
    });
  },
  //получение объекта текстуры по названию изображения
  getImageForName: function getImageForName(imageName) {
    var e = gkGame.loader.loader;

    if (e.resources.hasOwnProperty(imageName)) {
      return e.resources[imageName];
    }

    return false;
  },
  //рисовать изображение
  drawImage: function drawImage(img, x, y, w, h, mirror, handler_data) {
    var imageOb = this.getImageForName(img);
    if (imageOb === false) return false;
    var image = new PIXI.Sprite(imageOb.texture);
    image.x = x;
    image.y = y;
    image.width = w;
    image.height = h;

    if (mirror) {
      image.anchor.x = 1;
      image.scale.x *= -1;
    }

    var activeUser = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.userMapItemAuth .openMap').attr('data-user'); //console.log(this.moveMode);

    if (activeUser == this.mapData.ID && !this.moveMode || this.type == 'map' || this.type == 'global') {
      if (_typeof(handler_data) == 'object' && handler_data.hasOwnProperty('handle')) {
        if (handler_data.handle) {
          image.interactive = true;
          image.buttonMode = true;
          image.on('tap', function (e) {
            gkGame.buildClickCalback.call(e, e.target.handler_data);
          });
          image.on('click', function (e) {
            gkGame.buildClickCalback.call(e, e.target.handler_data);
          });
          image.handler_data = handler_data;
        }
      }
    } //console.log(this.mapData.ID);

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


    this.viewport.addChild(image); //delete image;

    this.render.render();
    return true;
  },
  //установка координат
  setSq: function setSq() {
    var _top = 0;
    var _add_top = 0;
    var _left = 0;

    if (this.mapData.mapImage == 'game_map_start_new_10_06.png') {
      _add_top = 60;
    }

    var kef = this.kef;
    var h = 900;
    var w = 1280;
    var kw = (w - 80) * this.kef / 12;
    h = h * this.kef;
    w = w * this.kef;

    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height() > _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width()) {
      _top = _top + h / 2;
      _left = _left + w / 8;
    } else {
      _top = _top + h / 2;
      _left = _left + w / 2;
    }

    this.ksizes = {
      kw: kw,
      h: h,
      w: w,
      canv: {
        h: h + _top * 2,
        w: w + _left * 2
      },
      _top: _top,
      _left: _left,
      zoom: {
        minWidth: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth * 0.5,
        minHeight: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight * 0.5,
        maxWidth: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth * 4,
        maxHeight: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight * 4
      }
    };
    var num = 0;
    var map_cords = [[null, null, null]];
    var i, i2;

    for (i = 1; i < 16; i++) {
      for (i2 = 1; i2 < 13; i2++) {
        if (i2 < 12) {
          num++;
          map_cords.push([i2 * kw - w / 25 + _left, i * kw * 0.6 - h / 25 + _top + _add_top, num]);
          this.visible_sq[num] = false;
        }

        if (i < 15) {
          num++;
          map_cords.push([i2 * kw - kw * 0.5 - w / 25 + _left, i * kw * 0.6 + kw * 0.6 * 0.5 - h / 25 + _top + _add_top, num]);
          this.visible_sq[num] = false;
        }
      }
    }

    this.map_cords = map_cords;
    var k;

    for (k in this.visible_sq_ar) {
      this.visible_sq[this.visible_sq_ar[k]] = true;
    }

    this.init_view();
  },
  //первая инициализация игры
  init_game: function init_game() {
    if (this.app === null) {
      this.loadMap(1, 'player');
      this.loadItems();
      this.setLoadMenu = true;
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockWrap').css({
        'z-index': 10
      });
      this.app = new PIXI.Application({
        antialias: true,
        resizeTo: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"],
        transparent: true,
        resolution: 1,
        //width: window.innerWidth,
        //height: window.innerHeight,
        sharedTicker: true //forceCanvas: true

      });
      ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById('topGameBlockGameMapWrapGameMap').appendChild(this.app.view); //this.loadChat();
    }
  },
  //инициализация view
  init_view: function init_view() {
    if (this.viewport === null) {
      // create viewport
      this.viewport = new PIXI.extras.Viewport({
        screenWidth: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth,
        screenHeight: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight,
        worldWidth: this.ksizes.canv.w,
        worldHeight: this.ksizes.canv.h,
        passiveWheel: true,
        divWheel: ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById('topGameBlockGameMapWrapGameMap'),
        interaction: gkGame.app.renderer.plugins.interaction // the interaction module is important for wheel() to work properly when renderer.view is placed or scaled

      });
      this.app.stage.addChild(gkGame.viewport);
      this.viewport.drag().pinch().wheel().decelerate();
      this.viewport.bounce(); //this.viewport.clamp({'direction':'all'});
      //gkGame.debugMode = true;
      //gkGame.render.initBox();

      this.viewport.on('clicked', function () {
        gkGame.render.render('clicked');
      }); //this.viewport.on('bounce-x-start',function(){gkGame.render.start('bounce-x-start')});
      //this.viewport.on('bounce-y-start',function(){gkGame.render.start('bounce-y-start')});

      this.viewport.on('drag-start', function () {
        gkGame.draged = true;
      });
      this.viewport.on('drag-end', function () {
        gkGame.draged = false;
      }); //this.viewport.on('mouse-edge-start',function(){gkGame.render.start('mouse-edge-start')});
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

      this.viewport.on('moved', function (e) {
        gkGame.render.renderTimeout('moved', 1000);
      });
      this.viewport.on('zoomed', function () {
        gkGame.render.renderTimeout('zoomed', 1000);
      });
      this.setResize();
      this.setCenter();

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() > 680) {
        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() > _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).height()) {
          this.viewport.fit(true, this.ksizes.canv.w * 0.5, this.ksizes.canv.h * 0.5);
        } else {
          this.viewport.fit(true, this.ksizes.canv.w * 0.8, this.ksizes.canv.h * 0.8);
        }
      } else {
        this.viewport.fitHeight(this.ksizes.canv.h * 0.8, true);
      }

      this.render.stop();
      gkGame.debug('init_view', this.ksizes.canv);
    } else {
      this.viewport.removeChildren();
      this.setResize();
      this.setCenter();
    }
  },
  //ресайз
  setResize: function setResize() {
    if (this.notCalcMode) return;

    if (this.viewport !== null) {
      this.viewport.screenWidth = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
      this.viewport.screenHeight = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
      this.viewport.clampZoom(this.ksizes.zoom); //this.viewport.bounce({'sides':'all','friction':0.1});
      //this.viewport.clamp({'left': -window.innerWidth/3, 'right': this.ksizes.w+window.innerWidth/3, 'top': -window.innerHeight/3, 'bottom': this.ksizes.h+window.innerHeight/3, });

      /*this.viewport.resize({
      	screenWidth: window.innerWidth,
      	screenHeight: window.innerHeight,
      	worldWidth: this.ksizes.w,
      	worldHeight: this.ksizes.h,
      });*/
      //gkGame.debug('setResize',[window.innerWidth,window.innerHeight]);

      this.render.renderTimeout('setResize', 1000);
    }
  },
  setCenter: function setCenter() {
    if (this.notCalcMode) return;

    if (this.viewport !== null) {
      this.viewport.moveCenter(this.ksizes.canv.w / 2, this.ksizes.canv.h / 2);
      this.render.renderTimeout('setCenter', 1000);
    }
  },
  setZoom: function setZoom(zoom, step) {
    zoom = parseInt(zoom);
    if (!zoom || isNaN(zoom)) zoom = 0;
    if (!step) step = 5;
    if (zoom > step) zoom = step;
    var dist_step = (this.ksizes.zoom.maxWidth - this.ksizes.zoom.minWidth) / step;
    var zoomState = [];
    var i;

    for (i = step; i >= 0; i -= 1) {
      zoomState.push(dist_step * (i < step ? i : step) + this.ksizes.zoom.minWidth);
    } //delete i;
    //key 0 is default min zoom, reverse (world -> to screen)


    if (zoom in zoomState) {
      var zommChange = zoomState[zoom] - this.viewport.worldScreenWidth;
      this.viewport.zoom(zommChange, true);
      this.render.render();
    }
  },
  //сортировка зданий для отрисовки
  sortBuilds: function sortBuilds() {
    var sortable = [];
    var kb;

    for (kb in this.mapData.dt) {
      var sq = parseInt(this.mapData.dt[kb].sq);
      if (sq in this.map_cords) sortable.push([kb, this.map_cords[sq][1]]);
    }

    sortable.sort(function (a, b) {
      return a[1] - b[1];
    });
    var sortBuilds = [];
    var kb;

    for (kb in sortable) {
      sortBuilds.push(this.mapData.dt[sortable[kb][0]]);
    }

    this.mapData.dt = sortBuilds; //delete sortBuilds, sortable;
  },
  //отрисовка единичного здания
  drawBuild: function drawBuild(build_data) {
    if (build_data.level === null) build_data.level = 1;
    build_data.sq = parseInt(build_data.sq);

    if (build_data.build_id !== null && build_data.sq > 0 && _typeof(build_data.ofset) === 'object' && _typeof(build_data.size) === 'object') {
      var imageKey = false;
      if (build_data.hasOwnProperty('image')) imageKey = build_data.image;
      if (!imageKey && this.getImageForName(build_data.build_id + '_new.png')) imageKey = build_data.build_id + '_new.png';
      if (!imageKey && this.getImageForName(build_data.build_id + '.png')) imageKey = build_data.build_id + '.png';

      if (imageKey && this.getImageForName(imageKey)) {
        this.drawImage(imageKey, this.map_cords[build_data.sq][0] + build_data.ofset.x * this.kef, this.map_cords[build_data.sq][1] + build_data.ofset.y * this.kef, build_data.size.width * this.kef, build_data.size.height * this.kef, build_data.inv, build_data);
      }

      if (build_data.level == 2) {
        imageKey = false;
        if (build_data.hasOwnProperty('image')) imageKey = build_data.image;
        if (!imageKey && this.getImageForName(build_data.build_id + '_new_lvl2.png')) imageKey = build_data.build_id + '_new_lvl2.png';
        if (!imageKey && this.getImageForName(build_data.build_id + '_lvl2.png')) imageKey = build_data.build_id + '_lvl2.png';

        if (imageKey && this.getImageForName(imageKey)) {
          this.drawImage(imageKey, this.map_cords[build_data.sq][0] + build_data.ofset.x * this.kef, this.map_cords[build_data.sq][1] + build_data.ofset.y * this.kef, build_data.size.width * this.kef, build_data.size.height * this.kef, build_data.inv, build_data);
        }
      }

      if (build_data.num && !!build_data.unit) this.drawBands(build_data);
    }
  },
  //войска
  drawUnits: function drawUnits() {
    this.debug('рисование войск игрока', this.mapData.units);
    var fontSize = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() > 680 ? 18 * this.kef : 22 * this.kef;
    var style = new PIXI.TextStyle({
      fill: "#FF0000",
      stroke: "#FFFFFF",
      fontSize: fontSize,
      strokeThickness: 2,
      fontWeight: "bold",
      fontFamily: "Verdana"
    });
    var temp_units_draw = [];

    if (this.mapData.level >= 25 && this.mapData.level < 31) {
      temp_units_draw = [[1, 37, -162, -62, -152, -12, 56, 56, true], [2, 37, -116, -36, -108, -14, 56, 56, true], [3, 37, -162, -8, -152, 42, 56, 56, true], [4, 37, -116, 18, -108, 68, 56, 56, true], [5, 37, -116, -90, -108, -40, 56, 56, true], [6, 37, -69, -64, 0, 0, 56, 56, true]];
    } else if (this.mapData.level > 5) {
      temp_units_draw = [[1, 273, 20, -62, 30, -12, 56, 56, false], [2, 273, -26, -36, -18, 14, 56, 56, false], [3, 273, 20, -8, 30, 42, 56, 56, false], [4, 273, -26, 18, -18, 68, 56, 56, false], [5, 273, -26, -90, -18, -40, 56, 56, false], [6, 273, -72, -64, 0, 0, 56, 56, false]];
    }

    var k;

    for (k in temp_units_draw) {
      var itm = temp_units_draw[k];
      this.drawImage('units_' + itm[0] + '.png', this.map_cords[itm[1]][0] + itm[2] * this.kef, this.map_cords[itm[1]][1] + itm[3] * this.kef, itm[6] * this.kef, itm[7] * this.kef, itm[8]);

      if (itm[0] !== 6) {
        var text = new PIXI.Text(this.mapData.units[itm[0]], style);
        text.x = this.map_cords[itm[1]][0] + itm[4] * this.kef;
        text.y = this.map_cords[itm[1]][1] + itm[5] * this.kef - fontSize;
        this.viewport.addChild(text); //delete text;
      }
    } //delete style;
    //delete fontSize;


    this.render.render();
  },
  //название королевства
  drawName: function drawName() {
    if (!this.mapData.ratusha) return;

    if (this.mapData.name) {
      var wd = this.mapData.name.length * 8;
      var wd2 = (this.mapData.ID.length + 2) * 6;
      if (wd > 200) wd = this.mapData.name.length * 6; //палка

      var line = new PIXI.Graphics();
      line.moveTo(this.map_cords[213][0] + 44 * this.kef, this.map_cords[213][1] - 33 * this.kef);
      line.lineStyle(2, 0xfff787);
      line.lineTo(this.map_cords[213][0] + 44 * this.kef, this.map_cords[213][1] - 33 * this.kef + 31 * this.kef);
      this.viewport.addChild(line); //delete line;
      //круг

      var circle = new PIXI.Graphics();
      circle.beginFill(0xfff787);
      circle.drawCircle(0, 0, 2 * this.kef);
      circle.x = this.map_cords[213][0] + 44 * this.kef;
      circle.y = this.map_cords[213][1] - 33 * this.kef;
      circle.alpha = 1;
      this.viewport.addChild(circle); //delete circle;
      //прямоугольник

      var sq = new PIXI.Graphics();
      sq.beginFill(0x000000);
      sq.drawRect(0, 0, (wd + 10) * this.kef, 18 * this.kef);
      sq.x = this.map_cords[213][0] + 45 * this.kef;
      sq.y = this.map_cords[213][1] - 30 * this.kef;
      sq.alpha = 0.8;
      this.viewport.addChild(sq); //delete sq;
      //прямоугольник

      var sq = new PIXI.Graphics();
      sq.beginFill(0x000000);
      sq.drawRect(0, 0, (wd2 + 10) * this.kef, 12 * this.kef);
      sq.x = this.map_cords[213][0] + 43 * this.kef - (wd2 + 10) * this.kef;
      sq.y = this.map_cords[213][1] - 30 * this.kef;
      sq.alpha = 0.5;
      this.viewport.addChild(sq); //delete sq;

      var fontSize = 12 * this.kef;
      var style = new PIXI.TextStyle({
        fill: "#fff787",
        stroke: "#000000",
        fontSize: fontSize,
        strokeThickness: 0,
        fontWeight: "normal",
        fontFamily: "Verdana"
      });
      var text = new PIXI.Text(this.mapData.name, style);
      text.x = this.map_cords[213][0] + 50 * this.kef;
      text.y = this.map_cords[213][1] - 29 * this.kef;
      text.width = wd * this.kef;
      text.alpha = 0.8;
      this.viewport.addChild(text); //delete text;

      var fontSize = 10 * this.kef;
      var style = new PIXI.TextStyle({
        fill: "#fff787",
        stroke: "#000000",
        fontSize: fontSize,
        strokeThickness: 0,
        fontWeight: "normal",
        fontFamily: "Verdana"
      });
      var text = new PIXI.Text('№ ' + this.mapData.ID, style);
      text.x = this.map_cords[213][0] + 48 * this.kef - (wd2 + 10) * this.kef;
      text.y = this.map_cords[213][1] - 30 * this.kef;
      text.width = wd2 * this.kef;
      text.alpha = 0.5;
      this.viewport.addChild(text); //delete text;

      this.render.render();
    }
  },
  //бандиты
  drawBands: function drawBands(build_data) {
    var num = build_data.sq;
    var units = build_data.unit;
    var number = build_data.num;
    var fontSize = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() > 680 ? 15 * this.kef : 15 * this.kef;
    var style = [new PIXI.TextStyle({
      fill: "#FFFFFF",
      fontSize: fontSize,
      fontWeight: "bold",
      fontFamily: "Verdana"
    }), new PIXI.TextStyle({
      fill: "#000000",
      stroke: "#FFFFFF",
      strokeThickness: 2,
      fontSize: fontSize,
      fontWeight: "bold",
      fontFamily: "Verdana"
    })];
    var tx = [];
    if (units[1] > 0) tx.push(units[1] + 'к');
    if (units[2] > 0) tx.push(units[2] + 'л');
    if (units[3] > 0) tx.push(units[3] + 'м');
    if (units[4] > 0) tx.push(units[4] + 'а');
    if (units[5] > 0) tx.push(units[5] + 'в'); //круг

    var circle = new PIXI.Graphics();
    circle.beginFill(0x711E07);
    circle.drawCircle(0, 0, 18 * this.kef);
    circle.x = this.map_cords[num][0] + 60 * this.kef;
    circle.y = this.map_cords[num][1] - 41 * this.kef;
    circle.alpha = 0.5;
    this.viewport.addChild(circle); //delete circle;
    //текст в круге

    var text = new PIXI.Text(number, style[0]);

    if (parseInt(number) > 9) {
      text.x = this.map_cords[num][0] + 50 * this.kef;
    } else {
      text.x = this.map_cords[num][0] + 55 * this.kef;
    }

    text.y = this.map_cords[num][1] - 36 * this.kef - fontSize;
    text.alpha = 0.7;
    this.viewport.addChild(text); //delete text;
    //войска

    var k;

    for (k in tx) {
      var text = new PIXI.Text(tx[k], style[1]);
      text.x = this.map_cords[num][0] + 2 * this.kef;
      text.y = this.map_cords[num][1] - 26 * this.kef + 16 * this.kef * k - fontSize - 10;
      this.viewport.addChild(text); //delete text;
    }

    this.render.render();
  },
  //показ ресурсов
  drawRes: function drawRes() {
    var ht = '';
    var k;

    for (k in this.mapData.res) {
      ht += '<span class="item' + k + '"><b></b> <i>' + this.mapData.res[k] + '</i></span>';
    }

    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .wrap').append('<div class="resValues">' + ht + '</div>');
  },
  //рисование уровня
  drawLevel: function drawLevel() {
    if (this.mapData.level) _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.level_' + this.mapData.ID).html(this.mapData.level);
    if (!this.mapData.ratusha) return;

    if (this.mapData.level) {
      //круг
      var circle = new PIXI.Graphics();
      circle.beginFill(0xfff787);
      circle.drawCircle(0, 0, 10 * this.kef);
      circle.x = this.map_cords[213][0] + 44 * this.kef;
      circle.y = this.map_cords[213][1] - 40 * this.kef;
      circle.alpha = 1;
      this.viewport.addChild(circle); //delete circle;

      var fontSize = 12 * this.kef;
      var style = new PIXI.TextStyle({
        fill: "#000000",
        stroke: "#fff787",
        fontSize: fontSize,
        strokeThickness: 0,
        fontWeight: "bold",
        fontFamily: "Verdana"
      });
      var text = new PIXI.Text(this.mapData.level, style);
      text.x = this.map_cords[213][0] + 39 * this.kef;
      text.y = this.map_cords[213][1] - 48 * this.kef;
      text.width = 10 * this.kef;
      text.alpha = 1;
      this.viewport.addChild(text); //delete text;

      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.level_' + this.mapData.ID).html(this.mapData.level);
      this.render.render();
    }
  },
  //рисование рейтинга
  drawReith: function drawReith() {
    if (this.mapData.reith) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.reith_' + this.mapData.ID).html(this.mapData.reith);
    }
  },
  drawGlobalTop: function drawGlobalTop() {
    if (this.mapData.hasOwnProperty('users_html')) {
      var tabId = 3;
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink3').css({
        'display': 'block'
      });
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu li span').removeClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink3 span').addClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap').hide();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap' + tabId).show().html(this.mapData.users_html);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .hideTab').html('X').show();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock').show();
    }
  },
  hideGlobalTop: function hideGlobalTop() {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink3').hide();
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap3').hide();

    if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink3 span').hasClass('active')) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu li span').removeClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.tabLink1 span').addClass('active');
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap').hide();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap1').show();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .hideTab').html('X').show();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock').show();
    }
  },
  //отрисовка карты
  drawMap: function drawMap(imageName) {
    //console.log(this.imageLoader.images[imageName]);
    this.drawImage(imageName, this.ksizes._left, this.ksizes._top, this.ksizes.w, this.ksizes.h);
    this.setResize();
    this.setCenter();
  },
  //ссылки на карте
  drawLink: function drawLink() {
    if (!this.mapData) return;
    var link = this.mapData.mapLink;
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .wrap').html('');

    if (link) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .wrap').append(link);
    }

    this.checkLink();
  },
  //проверка активности добавления в друзья
  checkLink: function checkLink() {
    if (!this.mapData) return;
    var link = this.mapData.mapLink; //console.log(this.type);
    //console.log(this.friends);
    //console.log(this.mapData.ID);

    if (this.type == 'player') {
      if (this.friends.indexOf(this.mapData.ID) != -1) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .moreBtnMapFriendAdd').hide();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .moreBtnMapFriendDelete').show();
      } else {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .moreBtnMapFriendAdd').show();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.gameLegend .moreBtnMapFriendDelete').hide();
      }
    }
  },
  //инициализация карты
  init_map: function init_map(notLoader) {
    if (notLoader) this.notCalcMode = true;
    var mapData = this.mapData;
    this.setSq();

    if (this.type == 'player') {
      if (this.setLoadMenu) {
        this.moveMode = false;
        this.setLoadMenu = false;
        this.loadGameMenu(true, notLoader);
      } else {
        this.moveMode = false;
        this.drawMap(mapData.mapImage);
        this.drawLink();
        this.sortBuilds();
        var k;

        for (k in this.mapData.dt) {
          var itm = this.mapData.dt[k];
          this.drawBuild(itm);
        }

        this.drawUnits();
        this.drawName();
        this.drawLevel();
        this.drawReith();
        this.drawRes();
        this.hideGlobalTop();
      }
    } else if (this.type == 'global') {
      this.drawMap(mapData.mapImage);
      this.drawLink();
      this.drawGlobalTop();
      this.sortBuilds();
      var k;

      for (k in this.mapData.dt) {
        var itm = this.mapData.dt[k];
        this.drawBuild(itm);
      }
    } else if (this.type == 'map') {
      this.drawMap(mapData.mapImage);
      this.drawLink();
      this.hideGlobalTop();
      this.sortBuilds();
      var k;

      for (k in this.mapData.dt) {
        var itm = this.mapData.dt[k];
        this.drawBuild(itm);
      }
    }

    this.loader.hideLoader(100);
  },
  //список друзей
  loadItems: function loadItems() {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      url: this.curUrl + "api/getItems.php",
      data: {
        key: gkGame.autKey
      },
      dataType: "html",
      type: "GET",
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap2').html(data);
        gkGame.friends = [];
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap2 .openMap').each(function () {
          if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('data-user')) gkGame.friends.push(_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('data-user'));
        });
        gkGame.checkLink();
        gkGame.debug('loadItems, set friends', gkGame.friends);
      }
    });
  },
  //меню игрока
  loadGameMenu: function loadGameMenu(re_init, notLoader) {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      url: this.curUrl + "api/getMenu.php",
      data: {
        key: gkGame.autKey
      },
      dataType: "html",
      type: "POST",
      success: function success(data, textStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlock .wrap1').html(data);
        gkGame.pull.setPublicChanel();
        gkGame.debug('loadGameMenu and start setPublicChanel');

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.userMapItemAuth').length) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink2').css({
            'display': 'block'
          });
          var activeUser = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.userMapItemAuth .openMap').attr('data-user');

          if (activeUser == gkGame.mapData.ID) {
            if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.ratushaDisable').length) {
              var ht = '<div class="message-container"><img class="game-avatar" src="images/game_avatar/avatar-game-01.png"/><div class="message-blue message-error"><p class="message-content">Правитель, в любом королевстве должна быть ратуша!!!<br><a class="sendcommand button-yelow" data-command="build_01" href="#">построить ратушу</a></p><div class="message-left">...главный советник</div></div></div>';
              _modal__WEBPACK_IMPORTED_MODULE_2__["default"].gameMessage(ht);
            }
          }

          if (re_init) {
            gkGame.init_map(notLoader);
          }
        } else {
          if (re_init) {
            gkGame.init_map(notLoader);
          }

          _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.bottomGameBlockTabsMenu .tabLink2').hide();
        }
      }
    });
  },
  //отрисовка сетки
  drawSetka: function drawSetka(showAll) {
    this.moveMode = true;
    var k;

    for (k in this.mapData.dt) {
      var itm = this.mapData.dt[k];
      this.drawBuild(itm);
    }

    this.moveCord = [];
    var k;

    for (k in this.map_cords) {
      if (showAll || this.visible_sq[this.map_cords[k][2]]) {
        this.addStroke(this.map_cords[k][0], this.map_cords[k][1], this.ksizes.kw);
        this.addNum(this.map_cords[k][0], this.map_cords[k][1], this.ksizes.kw, this.map_cords[k][2]);
      }
    }
  },
  //отрисовка квадрата сетки
  addStroke: function addStroke(start_x, start_y, kw) {
    //this.debug('addStroke',[start_x,start_y,kw]);
    var liners = [kw * 0.6 / 2, kw / 2, kw];
    var line = new PIXI.Graphics();
    line.moveTo(start_x, start_y);
    line.lineStyle(2, 0xFFFFFF);
    line.lineTo(start_x + liners[1], start_y - liners[0]);
    line.lineTo(start_x + liners[2], start_y);
    line.lineTo(start_x + liners[1], start_y + liners[0]);
    line.lineTo(start_x, start_y);
    this.viewport.addChild(line); //delete line;

    this.render.render();
  },
  //отрисовка номера на сетке
  addNum: function addNum(start_x, start_y, kw, num) {
    var kef = this.kef;
    var fontSize = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]).width() > 680 ? 16 * this.kef : 20 * this.kef;
    var style = new PIXI.TextStyle({
      fill: "#FF0000",
      stroke: "#FFFFFF",
      fontSize: fontSize,
      strokeThickness: 2,
      fontWeight: "bold",
      fontFamily: "Verdana"
    });
    var text = new PIXI.Text(num, style);
    text.x = start_x + 12 * kef;
    text.y = start_y + 6 * kef - fontSize;
    var activeUser = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.userMapItemAuth .openMap').attr('data-user');

    if (activeUser == this.mapData.ID && this.moveMode) {
      text.interactive = true;
      text.buttonMode = true;
      text.on('tap', function (event) {
        if (gkGame.draged) return;

        if (gkGame.moveCord.length == 1 && gkGame.moveCord[0] == this._text) {
          gkGame.moveCord = [];
        } else {
          gkGame.moveCord.push(this._text);
        }

        if (gkGame.moveCord.length == 2) {
          gkGame.moveMode = false;
          gkGame.sendCommand('move_' + gkGame.moveCord[0] + '_' + gkGame.moveCord[1], function (dt) {
            gkGame.moveMode = false;
            _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.message-fixed-container .message-container').remove();
            _modal__WEBPACK_IMPORTED_MODULE_2__["default"].gameMessage(dt.fixmess);
            if (dt.audio) _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play(dt.audio);
            gkGame.loadMap(gkGame.mapData.ID, 'player', true);
          });
        }
      });
      text.on('click', function (event) {
        if (gkGame.draged) return;

        if (gkGame.moveCord.length == 1 && gkGame.moveCord[0] == this._text) {
          gkGame.moveCord = [];
        } else {
          gkGame.moveCord.push(this._text);
        }

        if (gkGame.moveCord.length == 2) {
          gkGame.moveMode = false;
          gkGame.sendCommand('move_' + gkGame.moveCord[0] + '_' + gkGame.moveCord[1], function (dt) {
            gkGame.moveMode = false;
            _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.message-fixed-container .message-container').remove();
            _modal__WEBPACK_IMPORTED_MODULE_2__["default"].gameMessage(dt.fixmess);
            if (dt.audio) _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play(dt.audio);
            gkGame.loadMap(gkGame.mapData.ID, 'player', true);
          });
        }
      });
    }

    this.viewport.addChild(text); //delete text;

    this.render.render();
  },
  mapMagic: {
    update_res: function update_res(data) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item1 i').html(data.res_1);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item2 i').html(data.res_2);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item3 i').html(data.res_3);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item4 i').html(data.res_4);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item5 i').html(data.res_5);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock .gameLegend .item6 i').html(data.res_6);
    },
    update_reith: function update_reith(user, val) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.reith_' + user).html(val);
    },
    redraw_global_map_icon: function redraw_global_map_icon() {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
        url: gkGame.curUrl + "api/getGlobalMapIcon.php",
        data: {
          key: gkGame.autKey
        },
        dataType: "html",
        type: "POST",
        success: function success(data, textStatus) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.globalMapItem').html(data);
        }
      });
    }
  },
  loadMap: function loadMap(mapId, type, notLoader) {
    if (notLoader) {} else {
      this.loader.showLoader();
    }

    this.mapId = mapId;
    this.type = type;
    this.debug('загрузка карты', [mapId, type]);
    _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
      url: this.curUrl + "api/mapsData.php",
      data: {
        key: gkGame.autKey,
        id: mapId,
        type: type
      },
      dataType: "json",
      type: "POST",
      success: function success(data, textStatus) {
        var previewMap = gkGame.mapData;
        gkGame.debug('инит карты', data);
        gkGame.mapData = data;
        gkGame.checkAttack(previewMap);
        gkGame.pull.setChanel();

        if (data.hasOwnProperty('images') && data.images.length) {
          var addImages = [];
          var k;

          for (k in data.images) {
            var img_path = data.images[k];

            if (!gkGame.getImageForName(img_path)) {
              addImages.push(img_path);
            }
          }

          if (addImages.length) {
            gkGame.loader.load(addImages);
            gkGame.loader.loader.onComplete.add(function (e) {
              gkGame.debug('loader.onComplete', e);
              gkGame.init_map(notLoader);
            });
          } else {
            gkGame.init_map(notLoader);
          }
        } else {
          gkGame.init_map(notLoader);
        }
      }
    });
  },
  checkAttack: function checkAttack(previewMap) {
    if (!previewMap || !gkGame.mapData) return;
    if (previewMap.ID != gkGame.mapData.ID) return;
    if (!previewMap.hasOwnProperty('dt') || !gkGame.mapData.hasOwnProperty('dt')) return;
    var hash1 = 0;
    var hash2 = 0;
    var k;

    for (k in previewMap['dt']) {
      if (!!previewMap['dt'][k]['unit']) {
        var k2;

        for (k2 in previewMap['dt'][k]['unit']) {
          hash1 += parseInt(k2) * parseInt(previewMap['dt'][k]['unit'][k2]);
        }
      }
    }

    var k;

    for (k in gkGame.mapData['dt']) {
      if (!!gkGame.mapData['dt'][k]['unit']) {
        var k2;

        for (k2 in gkGame.mapData['dt'][k]['unit']) {
          hash2 += parseInt(k2) * parseInt(gkGame.mapData['dt'][k]['unit'][k2]);
        }
      }
    } //console.log(hash1);
    //console.log(hash2);


    if (hash1 != hash2) {
      _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('attack');
      setTimeout(function () {
        _audio__WEBPACK_IMPORTED_MODULE_5__["default"].play('attack2');
      }, 1300);
    }
  },
  //render wrapper
  render: {
    stat: null,
    statusCount: 0,
    showStatus: false,
    timer: null,
    initBox: function initBox() {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('body').append('<div id="renderStatus" style="position:fixed;right:5px;top:5px;background:#000000;color:#ffffff;paddinf:5px;text-align:center;width:250px;z-index:200;font-size:12px;"></div>');
      this.showStatus = true;
    },
    setStatus: function setStatus(v) {
      this.stat = v;
      this.statusCount++;
      gkGame.debug(v, this.statusCount);

      if (this.showStatus) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#renderStatus').html(v);
      }
    },
    start: function start(type) {
      if (!type) type = '';
      if (type) type = ' ' + type;
      gkGame.app.start();
      this.setStatus('start' + type, false);
    },
    stop: function stop(type) {
      if (!type) type = '';
      if (type) type = ' ' + type;
      gkGame.app.stop();
      this.setStatus('stop' + type, false);
    },
    render: function render(type) {
      if (!type) type = '';
      if (type) type = ' ' + type;
      this.setStatus('render' + type, false);
      gkGame.app.render();
    },
    renderTimeout: function renderTimeout(type, timeout) {
      if (!type) type = '';
      if (type) type = ' ' + type;
      this.setStatus('render' + type + ', timeout: ' + timeout);
      if (typeof this.timer !== null) clearTimeout(this.timer);
      gkGame.app.start();
      gkGame.app.render();
      this.timer = setTimeout(function () {
        gkGame.render.stop(type + ', timeout: ' + timeout);
      }, timeout);
    }
  },
  //веб сокеты и longpull
  pull: {
    pushstream: null,
    pushstream_public: null,
    pushstreamLastChanel: null,
    setPublicChanel: function setPublicChanel() {
      if (!this.pushstream_public) {
        if (typeof PushStream !== 'undefined') {
          var chanelId = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#setPublicChanel').attr('data-chanel');

          if (chanelId) {
            this.parent().debug('init chanell', chanelId);
            this.pushstream_public = new PushStream({
              host: 'push.mlife.by',
              port: 443,
              modes: "websocket",
              tagArgument: 'tag',
              timeArgument: 'time',
              useJSONP: true,
              timeout: 30000000000,
              useSSL: true,
              backtrack: 10
            });
            this.pushstream_public.addChannel(chanelId);
            this.pushstream_public.onmessage = gkGame.pull.onmessage;
            this.pushstream_public.connect();
          }
        } else {
          this.parent().debug('PushStream not defined');
        }
      }
    },
    setChanel: function setChanel() {
      if (_typeof(this.parent().mapData) != 'object' || !this.parent().mapData.hasOwnProperty('chanellId')) return false;
      if (!this.parent().mapData.chanellId) return false;
      if (this.parent().mapData.chanellId === this.pushstreamLastChanel) return false;
      this.pushstreamLastChanel = this.parent().mapData.chanellId;

      if (this.pushstream) {
        this.pushstream.disconnect();
      }

      if (typeof PushStream !== 'undefined') {
        this.parent().debug('init chanell', this.parent().mapData.chanellId);
        this.pushstream = new PushStream({
          host: 'push.mlife.by',
          port: 443,
          modes: "websocket",
          tagArgument: 'tag',
          timeArgument: 'time',
          useJSONP: true,
          timeout: 30000000000,
          useSSL: true,
          backtrack: 10
        });
        this.pushstream.addChannel(this.parent().mapData.chanellId);
        this.pushstream.onmessage = gkGame.pull.onmessage;
        this.pushstream.connect();
      } else {
        this.parent().debug('PushStream not defined');
      }
    },
    onmessage: function onmessage(text, id, channel) {
      var data = JSON.parse(_base64__WEBPACK_IMPORTED_MODULE_3__["default"].decode(text));
      gkGame.debug('onmessage', data);

      if (data.type == 'gold_pub') {
        if (data.cmd == 'redraw_global_map_icon') {
          gkGame.mapMagic.redraw_global_map_icon();

          if (data.mapId == gkGame.mapData.ID) {
            gkGame.loadMap(data.mapId, 'global', true);
          } else if (data.userId == gkGame.mapData.ID) {
            gkGame.loadMap(data.userId, 'player', true);
          }
        } else if (data.cmd == 'reload_client') {
          ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].location.reload();
        }
      } else if (data.type == 'player' && data.userId == gkGame.mapData.ID) {
        if (data.cmd == 'update_res') {
          gkGame.mapMagic.update_res(data.data);
          gkGame.mapMagic.update_reith(data.userId, data.data.res_all);
        } else if (data.cmd == 'add_build') {
          gkGame.loadMap(data.userId, data.type, true);
        } else if (data.cmd == 'redraw') {
          gkGame.loadMap(data.userId, data.type, true);
        } else if (data.cmd == 'show_setka') {
          gkGame.drawSetka();
        }
      } else if ((data.type == 'map' || data.type == 'global') && data.cmd == 'redraw_map') {
        if (data.mapId == gkGame.mapData.ID) {
          gkGame.loadMap(data.mapId, data.type, true);
        } else if (data.userId == gkGame.mapData.ID) {
          gkGame.loadMap(data.userId, 'player', true);
        }
      }
    },
    parent: function parent() {
      return gkGame;
    }
  },
  //загрузка и подгрузка ресурсов
  loader: {
    path: 'https://g520.ru/images/',
    loader: null,
    init: function init() {
      this.loader = new PIXI.Loader();
    },
    load: function load(images, re_init) {
      if (this.loader === null || re_init) this.init();
      var k;

      for (k in images) {
        if (_images__WEBPACK_IMPORTED_MODULE_4__["default"].hasOwnProperty(images[k])) {
          this.loader.add(images[k], _images__WEBPACK_IMPORTED_MODULE_4__["default"][images[k]]);
        } else {
          this.loader.add(images[k], this.path + images[k]);
        }
      }

      this.loader.load(function (loader, resources) {});
      this.loader.onProgress.add(function (e) {
        gkGame.loader.showLoader('<span class="progress"><span class="persent" style="width:' + e.progress + '%;"></span></span>');
      });
    },
    showLoader: function showLoader(text) {
      this.hideDisable();
      if (!text) text = '';
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.loaderGame').show();
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.loaderGame .preloaderText').html('идет загрузка<br>' + text);
    },
    hideLoader: function hideLoader(timeout) {
      setTimeout(function () {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.loaderGame').hide();
        _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.loaderGame .preloaderText').html('идет загрузка<br>');
      }, timeout);

      if (!!this.parent().mapData.disable) {
        this.showDisable();
      }
    },
    showDisable: function showDisable() {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.topGameBlock').append('<div class="mapDisable not_game_moving"><div class="mapDisableWrap">карта завершена</div></div>');
    },
    hideDisable: function hideDisable() {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('.mapDisable').remove();
    },
    parent: function parent() {
      return gkGame;
    }
  },
  //калькулятор
  calc: {
    getCalcResult: function getCalcResult() {
      var dt = _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#kalkform').serialize(); //console.log(dt);

      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default.a.ajax({
        url: this.parent().curUrl + "api/calc.php",
        data: _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#kalkform').serialize(),
        dataType: "html",
        type: "POST",
        success: function success(data, textStatus) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#kalkform').html(data);
        }
      });
    },
    getCalcResultSet: function getCalcResultSet() {
      var dt = [];
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#kalkform input').each(function () {
        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('id')) dt.push({
          'name': _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(this).attr('id'),
          'value': _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()(this).val()
        });
      });
      var val = [0, 0];
      var k;

      for (k in dt) {
        dt[k]['value'] = parseInt(dt[k]['value']);
        if (isNaN(dt[k]['value'])) dt[k]['value'] = 0;

        if (dt[k]['name'].indexOf('atk_') === 0) {
          val[0] = val[0] + dt[k]['value'];
        } else if (dt[k]['name'].indexOf('zaw_') === 0) {
          val[1] = val[1] + dt[k]['value'];
        }
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#res_atk').val(val[0]);
      _dom7_lib__WEBPACK_IMPORTED_MODULE_6___default()('#res_zaw').val(val[1]);
    },
    parent: function parent() {
      return gkGame;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (gkGame);

/***/ }),

/***/ "./js/lib/images.js":
/*!**************************!*\
  !*** ./js/lib/images.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var staticImages = {
  'map-global-2.png': 'images/game_map/map-global-2.png',
  'map-global-3.png': 'images/game_map/map-global-3.png',
  'game_map_user2.png': 'images/game_map/game_map_user2.png',
  'game_map_user3.png': 'images/game_map/game_map_user3.png',
  'game_map_user4.png': 'images/game_map/game_map_user4.png',
  'game_map_start_new_10_06.png': 'images/game_map/game_map_start_new_10_06.png',
  'bg_fon.jpg': 'images/game_map/bg_fon.jpg',
  'units_1.png': 'images/units/units_1.png',
  'units_2.png': 'images/units/units_2.png',
  'units_3.png': 'images/units/units_3.png',
  'units_4.png': 'images/units/units_4.png',
  'units_5.png': 'images/units/units_5.png',
  'units_6.png': 'images/units/units_6.png',
  'Rock_1.png': 'images/game_map_add_build/images/Rock_1.png',
  'gold_new.png': 'images/game_map_add_build/images/gold_new.png',
  'build_01_new.png': 'images/game_builds_r/build_01_new.png',
  'build_01_new_lvl2.png': 'images/game_builds_r/build_01_new_lvl2.png',
  'build_02_new.png': 'images/game_builds_r/build_02_new.png',
  'build_02_new_lvl2.png': 'images/game_builds_r/build_02_new_lvl2.png',
  'build_03_new.png': 'images/game_builds_r/build_03_new.png',
  'build_03_new_lvl2.png': 'images/game_builds_r/build_03_new_lvl2.png',
  'build_04_new.png': 'images/game_builds_r/build_04_new.png',
  'build_05_new.png': 'images/game_builds_r/build_05_new.png',
  'build_06_new.png': 'images/game_builds_r/build_06_new.png',
  'build_06_new_lvl2.png': 'images/game_builds_r/build_06_new_lvl2.png',
  'build_07_new.png': 'images/game_builds_r/build_07_new.png',
  'build_07_new_lvl2.png': 'images/game_builds_r/build_07_new_lvl2.png',
  'build_08_new.png': 'images/game_builds_r/build_08_new.png',
  'build_08_new_lvl2.png': 'images/game_builds_r/build_08_new_lvl2.png',
  'build_09.png': 'images/game_builds_r/build_09.png',
  'build_09_new.png': 'images/game_builds_r/build_09_new.png',
  'build_10_new.png': 'images/game_builds_r/build_10_new.png',
  'build_10_new_lvl2.png': 'images/game_builds_r/build_10_new_lvl2.png',
  'build_11_new.png': 'images/game_builds_r/build_11_new.png',
  'build_12_new.png': 'images/game_builds_r/build_12_new.png',
  'build_91_new.png': 'images/game_builds_r/build_91_new.png',
  'build_91_new_lvl2.png': 'images/game_builds_r/build_91_new_lvl2.png',
  'lest1.png': 'images/game_builds_r/lest1.png',
  'lest2.png': 'images/game_builds_r/lest2.png',
  'lest3.png': 'images/game_builds_r/lest3.png',
  'lest4.png': 'images/game_builds_r/lest4.png',
  'lest5.png': 'images/game_builds_r/lest5.png',
  'portal_new.png': 'images/game_builds_r/portal_new.png'
};
/* harmony default export */ __webpack_exports__["default"] = (staticImages);

/***/ }),

/***/ "./js/lib/modal.js":
/*!*************************!*\
  !*** ./js/lib/modal.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./js/lib/game.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ "./js/lib/audio.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app */ "./js/app.js");
/* harmony import */ var _wrapper_ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapper/ajax */ "./js/lib/wrapper/ajax.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom7_lib */ "./js/lib/dom7_lib.js");
/* harmony import */ var _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dom7_lib__WEBPACK_IMPORTED_MODULE_5__);







_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default.a.ajax = function (options) {
  Object(_wrapper_ajax__WEBPACK_IMPORTED_MODULE_4__["default"])(options);
};

var modal = {};

modal.loader_template = function () {
  return '<div class="preload"><div class="load"></div></div>';
};

modal.template = function () {
  var ht = '<div class="modal-content">' + this.loader_template() + '<div class="modal-header">' + '<button type="button" class="close">&times;</button>' + '<h4 class="modal-title"></h4>' + '</div>' + '<div class="modal-body"></div>' + '</div>';
  return ht;
};

modal.hide = function () {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal').hide();
};

modal.show = function (current) {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal').show();

  if (!current) {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.contentModalWrapper').append(this.template());
  } else {
    var len = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').length;

    if (!len) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.contentModalWrapper').append(this.template());
    } else {
      var i = 0;
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').each(function () {
        i += 1;

        if (i == len) {
          _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').prepend(this.loader_template());
        }
      });
    }
  }

  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modal .modal-body').css({
    'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal').attr('data-height') + 'px'
  });
  this.sorting();
};

modal.setContent = function (content) {
  var len = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').length;

  if (len) {
    var i = 0;
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').each(function () {
      i += 1;

      if (len == i) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.modal-body').html('<div class="wrapContentBg">' + content + '</div>');
        _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.preload').remove();

        if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.meta-modal-title')) {
          if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.meta-modal-title').attr('content')) {
            modal.setTitle(_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.meta-modal-title').attr('content'));
          }

          if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('script').length) {
            _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('script').each(function () {
              //console.log($(this).html());
              _app__WEBPACK_IMPORTED_MODULE_3__["default"].ev(_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).html());
            });
          }
        }
      }
    });
  } else {
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal').hide();
  }
};

modal.setTitle = function (title) {
  var len = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').length;

  if (len) {
    var i = 0;
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').each(function () {
      i += 1;

      if (len == i) {
        _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.modal-title').html(title);
      }
    });
  }
};

modal.sorting = function () {
  var start_zindex = 0;
  var len = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').length;
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').each(function () {
    start_zindex += 1;

    if (start_zindex < len) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).hide();
    } else {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).show();
    }
  });
  if (len < 1) _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal').hide();
};

modal.remove = function () {
  this.hide();
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('#contentModal .modal-content').remove();
};

modal.gameMessage = function (content) {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.message-fixed-container').append(content);
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.message-fixed-container').show();
};

modal.handlers = function () {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.modal .close', function (e) {
    e.preventDefault();
    _audio__WEBPACK_IMPORTED_MODULE_2__["default"].play('close');
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).parents('.modal-content').remove();
    modal.sorting();
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.message-container .close', function (e) {
    e.preventDefault();
    _audio__WEBPACK_IMPORTED_MODULE_2__["default"].play('close');
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).parents('.message-container').remove();

    if (!_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.message-fixed-container .message-container').length) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.message-fixed-container').hide();
    }
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.closeBuild', function (e) {
    if (!!e) e.preventDefault();
    _audio__WEBPACK_IMPORTED_MODULE_2__["default"].play('close');
    _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild').hide();
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.showModal, .toLevel1', function (e) {
    if (!!e) e.preventDefault();
    var url = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-page');

    if (url) {
      var audio_alias = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-audio');
      if (audio_alias) _audio__WEBPACK_IMPORTED_MODULE_2__["default"].play(audio_alias);

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-current')) {
        modal.show(true);
      } else {
        modal.show();
      }

      if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-title')) {
        modal.setTitle(_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-title'));
      } else if (_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('title')) {
        modal.setTitle(_dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('title'));
      }

      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
        url: _game__WEBPACK_IMPORTED_MODULE_1__["default"].curUrl + '' + url,
        data: {
          key: _game__WEBPACK_IMPORTED_MODULE_1__["default"].autKey
        },
        dataType: "text",
        type: "POST",
        success: function success(data, textStatus) {
          modal.setContent(data);
        }
      });
    }
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).on('click', '.showModalBuild', function (e) {
    if (!!e) e.preventDefault();
    var title = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('title');
    var url = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-page');
    var audio_alias = _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()(this).attr('data-audio');
    if (audio_alias) _audio__WEBPACK_IMPORTED_MODULE_2__["default"].play(audio_alias);
    modal.showBuildFromUrl(url, title);
  });
};

modal.showBuildFromUrl = function (url, title) {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').html(modal.loader_template());
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .titleBuild .name').html(title);
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild').show();
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').css({
    'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .content').height() + 'px'
  });
  var addpost = {
    key: _game__WEBPACK_IMPORTED_MODULE_1__["default"].autKey
  };

  if (url == 'api/settings/sound/') {
    var k;

    for (k in _audio__WEBPACK_IMPORTED_MODULE_2__["default"].volume) {
      addpost[k] = _audio__WEBPACK_IMPORTED_MODULE_2__["default"].volume[k];
    }
  } //console.log(addpost);


  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
    url: _game__WEBPACK_IMPORTED_MODULE_1__["default"].curUrl + '' + url,
    data: addpost,
    dataType: "text",
    type: "POST",
    success: function success(data, textStatus) {
      _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">' + data + '</div>');
    }
  });
};

modal.showBuildContent = function (content, title) {
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').html(modal.loader_template());
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .titleBuild .name').html(title);
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild').show();
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').css({
    'height': _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .content').height() + 'px'
  });
  _dom7_lib__WEBPACK_IMPORTED_MODULE_5___default()('.modalBuild .buildContentWrap').html('<div class="wrapContentBg">' + content + '</div>');
};

modal.init = function () {
  modal.handlers();
  modal.sorting(); //debugger;
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./js/lib/request/bezier.js":
/*!**********************************!*\
  !*** ./js/lib/request/bezier.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bezier; });
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

/* eslint-disable */
// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
} // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
} // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  } // Precompute samples table


  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample; // Interpolate to provide an initial guess for t

    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    } // Because JavaScript number are imprecise, we should guarantee the extremes are right.


    if (x === 0) {
      return 0;
    }

    if (x === 1) {
      return 1;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
}
;

/***/ }),

/***/ "./js/lib/request/request.js":
/*!***********************************!*\
  !*** ./js/lib/request/request.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/lib/request/utils.js");


var globals = {};
var jsonpRequests = 0;

function Request(requestOptions) {
  var globalsNoCallbacks = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend({}, globals);
  'beforeCreate beforeOpen beforeSend error complete success statusCode'.split(' ').forEach(function (callbackName) {
    delete globalsNoCallbacks[callbackName];
  });
  var defaults = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
    url: ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].location.toString(),
    method: 'GET',
    data: false,
    async: true,
    cache: true,
    user: '',
    password: '',
    headers: {},
    xhrFields: {},
    statusCode: {},
    processData: true,
    dataType: 'text',
    contentType: 'application/x-www-form-urlencoded',
    timeout: 0
  }, globalsNoCallbacks);
  var options = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend({}, defaults, requestOptions);
  var proceedRequest; // Function to run XHR callbacks and events

  function fireCallback(callbackName) {
    /*
      Callbacks:
      beforeCreate (options),
      beforeOpen (xhr, options),
      beforeSend (xhr, options),
      error (xhr, status),
      complete (xhr, stautus),
      success (response, status, xhr),
      statusCode ()
    */
    var globalCallbackValue;
    var optionCallbackValue;

    for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }

    if (globals[callbackName]) {
      globalCallbackValue = globals[callbackName].apply(globals, data);
    }

    if (options[callbackName]) {
      optionCallbackValue = options[callbackName].apply(options, data);
    }

    if (typeof globalCallbackValue !== 'boolean') globalCallbackValue = true;
    if (typeof optionCallbackValue !== 'boolean') optionCallbackValue = true;
    return globalCallbackValue && optionCallbackValue;
  } // Before create callback


  proceedRequest = fireCallback('beforeCreate', options);
  if (proceedRequest === false) return undefined; // For jQuery guys

  if (options.type) options.method = options.type; // Parameters Prefix

  var paramsPrefix = options.url.indexOf('?') >= 0 ? '&' : '?'; // UC method

  var method = options.method.toUpperCase(); // Data to modify GET URL

  if ((method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') && options.data) {
    var stringData;

    if (typeof options.data === 'string') {
      // Should be key=value string
      if (options.data.indexOf('?') >= 0) stringData = options.data.split('?')[1];else stringData = options.data;
    } else {
      // Should be key=value object
      stringData = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].serializeObject(options.data);
    }

    if (stringData.length) {
      options.url += paramsPrefix + stringData;
      if (paramsPrefix === '?') paramsPrefix = '&';
    }
  } // JSONP


  if (options.dataType === 'json' && options.url.indexOf('callback=') >= 0) {
    var callbackName = "f7jsonp_".concat(Date.now() + (jsonpRequests += 1));
    var abortTimeout;
    var callbackSplit = options.url.split('callback=');
    var requestUrl = "".concat(callbackSplit[0], "callback=").concat(callbackName);

    if (callbackSplit[1].indexOf('&') >= 0) {
      var addVars = callbackSplit[1].split('&').filter(function (el) {
        return el.indexOf('=') > 0;
      }).join('&');
      if (addVars.length > 0) requestUrl += "&".concat(addVars);
    } // Create script


    var script = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('script');
    script.type = 'text/javascript';

    script.onerror = function onerror() {
      clearTimeout(abortTimeout);
      fireCallback('error', null, 'scripterror');
      fireCallback('complete', null, 'scripterror');
    };

    script.src = requestUrl; // Handler

    ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"][callbackName] = function jsonpCallback(data) {
      clearTimeout(abortTimeout);
      fireCallback('success', data);
      script.parentNode.removeChild(script);
      script = null;
      delete ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"][callbackName];
    };

    ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].querySelector('head').appendChild(script);

    if (options.timeout > 0) {
      abortTimeout = setTimeout(function () {
        script.parentNode.removeChild(script);
        script = null;
        fireCallback('error', null, 'timeout');
      }, options.timeout);
    }

    return undefined;
  } // Cache for GET/HEAD requests


  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') {
    if (options.cache === false) {
      options.url += "".concat(paramsPrefix, "_nocache").concat(Date.now());
    }
  } // Create XHR


  var xhr = new XMLHttpRequest(); // Save Request URL

  xhr.requestUrl = options.url;
  xhr.requestParameters = options; // Before open callback

  proceedRequest = fireCallback('beforeOpen', xhr, options);
  if (proceedRequest === false) return xhr; // Open XHR

  xhr.open(method, options.url, options.async, options.user, options.password); // Create POST Data

  var postData = null;

  if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && options.data) {
    if (options.processData) {
      var postDataInstances = [ArrayBuffer, Blob, Document, FormData]; // Post Data

      if (postDataInstances.indexOf(options.data.constructor) >= 0) {
        postData = options.data;
      } else {
        // POST Headers
        var boundary = "---------------------------".concat(Date.now().toString(16));

        if (options.contentType === 'multipart/form-data') {
          xhr.setRequestHeader('Content-Type', "multipart/form-data; boundary=".concat(boundary));
        } else {
          xhr.setRequestHeader('Content-Type', options.contentType);
        }

        postData = '';
        var data = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].serializeObject(options.data);

        if (options.contentType === 'multipart/form-data') {
          data = data.split('&');
          var newData = [];

          for (var i = 0; i < data.length; i += 1) {
            newData.push("Content-Disposition: form-data; name=\"".concat(data[i].split('=')[0], "\"\r\n\r\n").concat(data[i].split('=')[1], "\r\n"));
          }

          postData = "--".concat(boundary, "\r\n").concat(newData.join("--".concat(boundary, "\r\n")), "--").concat(boundary, "--\r\n");
        } else if (options.contentType === 'application/json') {
          postData = JSON.stringify(options.data);
        } else {
          postData = data;
        }
      }
    } else {
      postData = options.data;
      xhr.setRequestHeader('Content-Type', options.contentType);
    }
  }

  if (options.dataType === 'json' && (!options.headers || !options.headers.Accept)) {
    xhr.setRequestHeader('Accept', 'application/json');
  } // Additional headers


  if (options.headers) {
    Object.keys(options.headers).forEach(function (headerName) {
      xhr.setRequestHeader(headerName, options.headers[headerName]);
    });
  } // Check for crossDomain


  if (typeof options.crossDomain === 'undefined') {
    // eslint-disable-next-line
    options.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].location.host;
  }

  if (!options.crossDomain) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  if (options.xhrFields) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend(xhr, options.xhrFields);
  }

  var xhrTimeout; // Handle XHR

  xhr.onload = function onload() {
    if (xhrTimeout) clearTimeout(xhrTimeout);

    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
      var responseData;

      if (options.dataType === 'json') {
        var parseError;

        try {
          responseData = JSON.parse(xhr.responseText);
        } catch (err) {
          parseError = true;
        }

        if (!parseError) {
          fireCallback('success', responseData, xhr.status, xhr);
        } else {
          fireCallback('error', xhr, 'parseerror');
        }
      } else {
        responseData = xhr.responseType === 'text' || xhr.responseType === '' ? xhr.responseText : xhr.response;
        fireCallback('success', responseData, xhr.status, xhr);
      }
    } else {
      fireCallback('error', xhr, xhr.status);
    }

    if (options.statusCode) {
      if (globals.statusCode && globals.statusCode[xhr.status]) globals.statusCode[xhr.status](xhr);
      if (options.statusCode[xhr.status]) options.statusCode[xhr.status](xhr);
    }

    fireCallback('complete', xhr, xhr.status);
  };

  xhr.onerror = function onerror() {
    if (xhrTimeout) clearTimeout(xhrTimeout);
    fireCallback('error', xhr, xhr.status);
    fireCallback('complete', xhr, 'error');
  }; // Timeout


  if (options.timeout > 0) {
    xhr.onabort = function onabort() {
      if (xhrTimeout) clearTimeout(xhrTimeout);
    };

    xhrTimeout = setTimeout(function () {
      xhr.abort();
      fireCallback('error', xhr, 'timeout');
      fireCallback('complete', xhr, 'timeout');
    }, options.timeout);
  } // Ajax start callback


  proceedRequest = fireCallback('beforeSend', xhr, options);
  if (proceedRequest === false) return xhr; // Send XHR

  xhr.send(postData); // Return XHR object

  return xhr;
}

function RequestShortcut(method) {
  var _ref = [],
      url = _ref[0],
      data = _ref[1],
      success = _ref[2],
      error = _ref[3],
      dataType = _ref[4];

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (typeof args[1] === 'function') {
    url = args[0];
    success = args[1];
    error = args[2];
    dataType = args[3];
  } else {
    url = args[0];
    data = args[1];
    success = args[2];
    error = args[3];
    dataType = args[4];
  }

  [success, error].forEach(function (callback) {
    if (typeof callback === 'string') {
      dataType = callback;
      if (callback === success) success = undefined;else error = undefined;
    }
  });
  dataType = dataType || (method === 'json' || method === 'postJSON' ? 'json' : undefined);
  var requestOptions = {
    url: url,
    method: method === 'post' || method === 'postJSON' ? 'POST' : 'GET',
    data: data,
    success: success,
    error: error,
    dataType: dataType
  };

  if (method === 'postJSON') {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend(requestOptions, {
      contentType: 'application/json',
      processData: false,
      crossDomain: true,
      data: typeof data === 'string' ? data : JSON.stringify(data)
    });
  }

  return Request(requestOptions);
}

function RequestShortcutPromise(method) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  var url = args[0],
      data = args[1],
      dataType = args[2];
  return new Promise(function (resolve, reject) {
    RequestShortcut(method, url, data, function (response) {
      resolve(response);
    }, function (xhr, status) {
      reject(status);
    }, dataType);
  });
}

Object.assign(Request, {
  get: function get() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return RequestShortcut.apply(void 0, ['get'].concat(args));
  },
  post: function post() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return RequestShortcut.apply(void 0, ['post'].concat(args));
  },
  json: function json() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    return RequestShortcut.apply(void 0, ['json'].concat(args));
  },
  getJSON: function getJSON() {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    return RequestShortcut.apply(void 0, ['json'].concat(args));
  },
  postJSON: function postJSON() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    return RequestShortcut.apply(void 0, ['postJSON'].concat(args));
  }
});

Request.promise = function requestPromise(requestOptions) {
  return new Promise(function (resolve, reject) {
    Request(Object.assign(requestOptions, {
      success: function success(data) {
        resolve(data);
      },
      error: function error(xhr, status) {
        reject(status);
      }
    }));
  });
};

Object.assign(Request.promise, {
  get: function get() {
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    return RequestShortcutPromise.apply(void 0, ['get'].concat(args));
  },
  post: function post() {
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    return RequestShortcutPromise.apply(void 0, ['post'].concat(args));
  },
  json: function json() {
    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    return RequestShortcutPromise.apply(void 0, ['json'].concat(args));
  },
  getJSON: function getJSON() {
    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    return RequestShortcutPromise.apply(void 0, ['json'].concat(args));
  },
  postJSON: function postJSON() {
    for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      args[_key13] = arguments[_key13];
    }

    return RequestShortcutPromise.apply(void 0, ['postJSON'].concat(args));
  }
});

Request.setup = function setup(options) {
  if (options.type && !options.method) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend(options, {
      method: options.type
    });
  }

  _utils__WEBPACK_IMPORTED_MODULE_1__["default"].extend(globals, options);
};

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./js/lib/request/utils.js":
/*!*********************************!*\
  !*** ./js/lib/request/utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bezier */ "./js/lib/request/bezier.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint no-control-regex: "off" */

 // Remove Diacritics

var defaultDiacriticsRemovalap = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var diacriticsMap = {};

for (var i = 0; i < defaultDiacriticsRemovalap.length; i += 1) {
  var letters = defaultDiacriticsRemovalap[i].letters;

  for (var j = 0; j < letters.length; j += 1) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
  }
}

var _uniqueNumber = 1;
var Utils = {
  uniqueNumber: function uniqueNumber() {
    _uniqueNumber += 1;
    return _uniqueNumber;
  },
  id: function id() {
    var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0123456789abcdef';
    var length = map.length;
    return mask.replace(/x/g, function () {
      return map[Math.floor(Math.random() * length)];
    });
  },
  mdPreloaderContent: "\n    <span class=\"preloader-inner\">\n      <span class=\"preloader-inner-gap\"></span>\n      <span class=\"preloader-inner-left\">\n          <span class=\"preloader-inner-half-circle\"></span>\n      </span>\n      <span class=\"preloader-inner-right\">\n          <span class=\"preloader-inner-half-circle\"></span>\n      </span>\n    </span>\n  ".trim(),
  iosPreloaderContent: "\n    <span class=\"preloader-inner\">\n      ".concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function () {
    return '<span class="preloader-inner-line"></span>';
  }).join(''), "\n    </span>\n  ").trim(),
  auroraPreloaderContent: "\n    <span class=\"preloader-inner\">\n      <span class=\"preloader-inner-circle\"></span>\n    </span>\n  ",
  eventNameToColonCase: function eventNameToColonCase(eventName) {
    var hasColon;
    return eventName.split('').map(function (_char, index) {
      if (_char.match(/[A-Z]/) && index !== 0 && !hasColon) {
        hasColon = true;
        return ":".concat(_char.toLowerCase());
      }

      return _char.toLowerCase();
    }).join('');
  },
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no setter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  },
  bezier: function bezier() {
    return _bezier__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, arguments);
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(callback, delay);
  },
  nextFrame: function nextFrame(callback) {
    return Utils.requestAnimationFrame(function () {
      Utils.requestAnimationFrame(callback);
    });
  },
  now: function now() {
    return Date.now();
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);
  },
  removeDiacritics: function removeDiacritics(str) {
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return diacriticsMap[a] || a;
    });
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].location.href;
    var i;
    var params;
    var param;
    var length;

    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        return paramsPart !== '';
      });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param.slice(1).join('=')) || '';
      }
    }

    return query;
  },
  getTranslate: function getTranslate(el) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null);

    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  },
  serializeObject: function serializeObject(obj) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (typeof obj === 'string') return obj;
    var resultArray = [];
    var separator = '&';
    var newParents;

    function varName(name) {
      if (parents.length > 0) {
        var parentParts = '';

        for (var _j = 0; _j < parents.length; _j += 1) {
          if (_j === 0) parentParts += parents[_j];else parentParts += "[".concat(encodeURIComponent(parents[_j]), "]");
        }

        return "".concat(parentParts, "[").concat(encodeURIComponent(name), "]");
      }

      return encodeURIComponent(name);
    }

    function varValue(value) {
      return encodeURIComponent(value);
    }

    Object.keys(obj).forEach(function (prop) {
      var toPush;

      if (Array.isArray(obj[prop])) {
        toPush = [];

        for (var _i = 0; _i < obj[prop].length; _i += 1) {
          if (!Array.isArray(obj[prop][_i]) && _typeof(obj[prop][_i]) === 'object') {
            newParents = parents.slice();
            newParents.push(prop);
            newParents.push(String(_i));
            toPush.push(Utils.serializeObject(obj[prop][_i], newParents));
          } else {
            toPush.push("".concat(varName(prop), "[]=").concat(varValue(obj[prop][_i])));
          }
        }

        if (toPush.length > 0) resultArray.push(toPush.join(separator));
      } else if (obj[prop] === null || obj[prop] === '') {
        resultArray.push("".concat(varName(prop), "="));
      } else if (_typeof(obj[prop]) === 'object') {
        // Object, convert to named array
        newParents = parents.slice();
        newParents.push(prop);
        toPush = Utils.serializeObject(obj[prop], newParents);
        if (toPush !== '') resultArray.push(toPush);
      } else if (typeof obj[prop] !== 'undefined' && obj[prop] !== '') {
        // Should be string or plain value
        resultArray.push("".concat(varName(prop), "=").concat(varValue(obj[prop])));
      } else if (obj[prop] === '') resultArray.push(varName(prop));
    });
    return resultArray.join(separator);
  },
  isObject: function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  merge: function merge() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var to = args[0];
    args.splice(0, 1);
    var from = args;

    for (var _i2 = 0; _i2 < from.length; _i2 += 1) {
      var nextSource = args[_i2];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  },
  extend: function extend() {
    var deep = true;
    var to;
    var from;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'boolean') {
      deep = args[0];
      to = args[1];
      args.splice(0, 2);
      from = args;
    } else {
      to = args[0];
      args.splice(0, 1);
      from = args;
    }

    for (var _i3 = 0; _i3 < from.length; _i3 += 1) {
      var nextSource = args[_i3];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (!deep) {
              to[nextKey] = nextSource[nextKey];
            } else if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  },
  colorHexToRgb: function colorHexToRgb(hex) {
    var h = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return result ? result.slice(1).map(function (n) {
      return parseInt(n, 16);
    }) : null;
  },
  colorRgbToHex: function colorRgbToHex(r, g, b) {
    var result = [r, g, b].map(function (n) {
      var hex = n.toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    }).join('');
    return "#".concat(result);
  },
  colorRgbToHsl: function colorRgbToHsl(r, g, b) {
    r /= 255; // eslint-disable-line

    g /= 255; // eslint-disable-line

    b /= 255; // eslint-disable-line

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var d = max - min;
    var h;
    if (d === 0) h = 0;else if (max === r) h = (g - b) / d % 6;else if (max === g) h = (b - r) / d + 2;else if (max === b) h = (r - g) / d + 4;
    var l = (min + max) / 2;
    var s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
    if (h < 0) h = 360 / 60 + h;
    return [h * 60, s, l];
  },
  colorHslToRgb: function colorHslToRgb(h, s, l) {
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var hp = h / 60;
    var x = c * (1 - Math.abs(hp % 2 - 1));
    var rgb1;

    if (Number.isNaN(h) || typeof h === 'undefined') {
      rgb1 = [0, 0, 0];
    } else if (hp <= 1) rgb1 = [c, x, 0];else if (hp <= 2) rgb1 = [x, c, 0];else if (hp <= 3) rgb1 = [0, c, x];else if (hp <= 4) rgb1 = [0, x, c];else if (hp <= 5) rgb1 = [x, 0, c];else if (hp <= 6) rgb1 = [c, 0, x];

    var m = l - c / 2;
    return rgb1.map(function (n) {
      return Math.max(0, Math.min(255, Math.round(255 * (n + m))));
    });
  },
  colorHsbToHsl: function colorHsbToHsl(h, s, b) {
    var HSL = {
      h: h,
      s: 0,
      l: 0
    };
    var HSB = {
      h: h,
      s: s,
      b: b
    };
    HSL.l = (2 - HSB.s) * HSB.b / 2;
    HSL.s = HSL.l && HSL.l < 1 ? HSB.s * HSB.b / (HSL.l < 0.5 ? HSL.l * 2 : 2 - HSL.l * 2) : HSL.s;
    return [HSL.h, HSL.s, HSL.l];
  },
  colorHslToHsb: function colorHslToHsb(h, s, l) {
    var HSB = {
      h: h,
      s: 0,
      b: 0
    };
    var HSL = {
      h: h,
      s: s,
      l: l
    };
    var t = HSL.s * (HSL.l < 0.5 ? HSL.l : 1 - HSL.l);
    HSB.b = HSL.l + t;
    HSB.s = HSL.l > 0 ? 2 * t / HSB.b : HSB.s;
    return [HSB.h, HSB.s, HSB.b];
  },
  colorThemeCSSProperties: function colorThemeCSSProperties() {
    var hex;
    var rgb;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (args.length === 1) {
      hex = args[0];
      rgb = Utils.colorHexToRgb(hex);
    } else if (args.length === 3) {
      rgb = args;
      hex = Utils.colorRgbToHex.apply(Utils, _toConsumableArray(rgb));
    }

    if (!rgb) return {};
    var hsl = Utils.colorRgbToHsl.apply(Utils, _toConsumableArray(rgb));
    var hslShade = [hsl[0], hsl[1], Math.max(0, hsl[2] - 0.08)];
    var hslTint = [hsl[0], hsl[1], Math.max(0, hsl[2] + 0.08)];
    var shade = Utils.colorRgbToHex.apply(Utils, _toConsumableArray(Utils.colorHslToRgb.apply(Utils, hslShade)));
    var tint = Utils.colorRgbToHex.apply(Utils, _toConsumableArray(Utils.colorHslToRgb.apply(Utils, hslTint)));
    return {
      '--f7-theme-color': hex,
      '--f7-theme-color-rgb': rgb.join(', '),
      '--f7-theme-color-shade': shade,
      '--f7-theme-color-tint': tint
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),

/***/ "./js/lib/staticfiles.js":
/*!*******************************!*\
  !*** ./js/lib/staticfiles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var staticFiles = {
  'click_build.webm': 'images/sounds/click_build.webm',
  'close.webm': 'images/sounds/close.webm',
  'click_link.webm': 'images/sounds/click_link.webm',
  'res_in.webm': 'images/sounds/res_in.webm',
  'money.webm': 'images/sounds/money.webm',
  'error.webm': 'images/sounds/error.webm',
  'building.webm': 'images/sounds/building.webm',
  'remove.webm': 'images/sounds/remove.webm',
  'magic.webm': 'images/sounds/magic.webm',
  'chest.webm': 'images/sounds/chest.webm',
  'attack.webm': 'images/sounds/attack.webm',
  'attack2.webm': 'images/sounds/attack2.webm',
  'fanfar.webm': 'images/sounds/fanfar.webm',
  'smeh.webm': 'images/sounds/smeh.webm',
  'ping.webm': 'images/sounds/ping.webm',
  'mess.webm': 'images/sounds/mess.webm',
  'fon_sound.webm': 'images/sounds/fon_sound.webm',
  'knock.webm': 'images/sounds/knock.webm',
  'click_build.mp3': 'images/sounds/click_build.mp3',
  'close.mp3': 'images/sounds/close.mp3',
  'click_link.mp3': 'images/sounds/click_link.mp3',
  'res_in.mp3': 'images/sounds/res_in.mp3',
  'money.mp3': 'images/sounds/money.mp3',
  'error.mp3': 'images/sounds/error.mp3',
  'building.mp3': 'images/sounds/building.mp3',
  'remove.mp3': 'images/sounds/remove.mp3',
  'magic.mp3': 'images/sounds/magic.mp3',
  'chest.mp3': 'images/sounds/chest.mp3',
  'attack.mp3': 'images/sounds/attack.mp3',
  'attack2.mp3': 'images/sounds/attack2.mp3',
  'fanfar.mp3': 'images/sounds/fanfar.mp3',
  'smeh.mp3': 'images/sounds/smeh.mp3',
  'ping.mp3': 'images/sounds/ping.mp3',
  'mess.mp3': 'images/sounds/mess.mp3',
  'fon_sound.mp3': 'images/sounds/fon_sound.mp3',
  'knock.mp3': 'images/sounds/knock.mp3',
  'click_build.wav': 'images/sounds/click_build.wav',
  'close.wav': 'images/sounds/close.wav',
  'click_link.wav': 'images/sounds/click_link.wav',
  'res_in.wav': 'images/sounds/res_in.wav',
  'money.wav': 'images/sounds/money.wav',
  'error.wav': 'images/sounds/error.wav',
  'building.wav': 'images/sounds/building.wav',
  'remove.wav': 'images/sounds/remove.wav',
  'magic.wav': 'images/sounds/magic.wav',
  'chest.wav': 'images/sounds/chest.wav',
  'attack.wav': 'images/sounds/attack.wav',
  'attack2.wav': 'images/sounds/attack2.wav',
  'fanfar.wav': 'images/sounds/fanfar.wav',
  'smeh.wav': 'images/sounds/smeh.wav',
  'ping.wav': 'images/sounds/ping.wav',
  'mess.wav': 'images/sounds/mess.wav',
  'fon_sound.wav': 'images/sounds/fon_sound.wav',
  'knock.wav': 'images/sounds/knock.wav'
};
/* harmony default export */ __webpack_exports__["default"] = (staticFiles);

/***/ }),

/***/ "./js/lib/wrapper/ajax.js":
/*!********************************!*\
  !*** ./js/lib/wrapper/ajax.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../request/request */ "./js/lib/request/request.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app */ "./js/app.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var ajaxWrapper = function ajaxWrapper(options) {
  options.processData = false;
  if (!options.data) options.data = {};
  options.data.client_id = _app__WEBPACK_IMPORTED_MODULE_1__["default"].client_id;
  options.data.version = _app__WEBPACK_IMPORTED_MODULE_1__["default"].version;

  if (options.type) {
    options.method = options.type;
    delete options.type;
  }

  if (options.method == 'POST') {
    if (_typeof(options.data) == 'object') {
      var esc = encodeURIComponent;
      var query = Object.keys(options.data).map(function (k) {
        return esc(k) + '=' + esc(options.data[k]);
      }).join('&');
      options.data = query;
    }
  }

  if (options.dataType == 'html') {
    options.dataType = 'text';
  }

  options.cache = false;
  setTimeout(function () {
    Object(_request_request__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  }, 100);
};

/* harmony default export */ __webpack_exports__["default"] = (ajaxWrapper);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./js/app.js");

_app__WEBPACK_IMPORTED_MODULE_0__["default"].client_id = 'mobile_app';
_app__WEBPACK_IMPORTED_MODULE_0__["default"].version = '1.0.3';
document.addEventListener('DOMContentLoaded', function () {
  _app__WEBPACK_IMPORTED_MODULE_0__["default"].init();
});

/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 *  howler.js v2.1.2
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function () {
  'use strict';
  /** Global Methods **/

  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */

  var HowlerGlobal = function HowlerGlobal() {
    this.init();
  };

  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function init() {
      var self = this || Howler; // Create a global ID counter.

      self._counter = 1000; // Pool of unlocked HTML5 Audio objects.

      self._html5AudioPool = [];
      self.html5PoolSize = 10; // Internal properties.

      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null; // Public properties.

      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null; // Set to false to disable the auto audio unlocker.

      self.autoUnlock = true; // Setup the various state values for global tracking.

      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function volume(vol) {
      var self = this || Howler;
      vol = parseFloat(vol); // If we don't have an AudioContext created yet, run the setup.

      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol; // Don't update any of the nodes if we are muted.

        if (self._muted) {
          return self;
        } // When using Web Audio, we just need to adjust the master gain.


        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        } // Loop through and change volume for all HTML5 audio nodes.


        for (var i = 0; i < self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and change the volumes.


            for (var j = 0; j < ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function mute(muted) {
      var self = this || Howler; // If we don't have an AudioContext created yet, run the setup.

      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted; // With Web Audio, we just need to mute the master gain.

      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      } // Loop through and mute all HTML5 Audio nodes.


      for (var i = 0; i < self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and mark the audio node as muted.


          for (var j = 0; j < ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = muted ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function unload() {
      var self = this || Howler;

      for (var i = self._howls.length - 1; i >= 0; i--) {
        self._howls[i].unload();
      } // Create a new AudioContext to make sure it is fully reset.


      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function codecs(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function _setup() {
      var self = this || Howler; // Keeps track of the suspend/resume state of the AudioContext.

      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended'; // Automatically begin the 30-second suspend process

      self._autoSuspend(); // Check if audio is available.


      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio(); // Check if the canplaythrough event is available.

            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch (e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      } // Test to make sure audio isn't disabled in Internet Explorer.


      try {
        var test = new Audio();

        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {} // Check for supported codecs.


      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function _setupCodecs() {
      var self = this || Howler;
      var audioTest = null; // Must wrap in a try/catch because IE11 in server mode throws an error.

      try {
        audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''); // Opera version <33 has mixed MP3 support, so we need to check for and block it.

      var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);

      var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };
      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function _unlockAudio() {
      var self = this || Howler; // Only run this if Web Audio is supported and it hasn't already been unlocked.

      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false; // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.

      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      } // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684


      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050); // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.

      var unlock = function unlock(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        for (var i = 0; i < self.html5PoolSize; i++) {
          try {
            var audioNode = new Audio(); // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.

            audioNode._unlocked = true; // Add the audio node to the pool.

            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
          }
        } // Loop through any assigned audio nodes and unlock them.


        for (var i = 0; i < self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and unlock the audio nodes.


            for (var j = 0; j < ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;

                sound._node.load();
              }
            }
          }
        } // Fix Android can not play in suspend state.


        self._autoResume(); // Create an empty buffer.


        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination); // Play the empty buffer.

        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        } // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.


        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        } // Setup a timeout to check that we are unlocked on the next event loop.


        source.onended = function () {
          source.disconnect(0); // Update the unlocked state and prevent this check from happening again.

          self._audioUnlocked = true; // Remove the touch start listener.

          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true); // Let all sounds know that audio has been unlocked.

          for (var i = 0; i < self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      }; // Setup a touch start listener to attempt an unlock in.


      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function _obtainHtml5Audio() {
      var self = this || Howler; // Return the next object from the pool if one exists.

      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      } //.Check if the audio is locked and throw a warning.


      var testPlay = new Audio().play();

      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay["catch"](function () {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function _releaseHtml5Audio(audio) {
      var self = this || Howler; // Don't add audio to the pool if we don't know if it has been unlocked.

      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function _autoSuspend() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      } // Check if any sounds are playing.


      for (var i = 0; i < self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j = 0; j < self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      } // If no sound has played after 30 seconds, suspend the context.


      self._suspendTimer = setTimeout(function () {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';
        self.ctx.suspend().then(function () {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;

            self._autoResume();
          }
        });
      }, 30000);
      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function _autoResume() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended') {
        self.ctx.resume().then(function () {
          self.state = 'running'; // Emit to all Howls that the audio has resumed.

          for (var i = 0; i < self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  }; // Setup the global audio controller.

  var Howler = new HowlerGlobal();
  /** Group Methods **/

  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */

  var Howl = function Howl(o) {
    var self = this; // Throw an error if no source is provided.

    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };

  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function init(o) {
      var self = this; // If we don't have an AudioContext created yet, run the setup.

      if (!Howler.ctx) {
        setupAudioContext();
      } // Setup user-defined default properties.


      self._autoplay = o.autoplay || false;
      self._format = typeof o.format !== 'string' ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = typeof o.preload === 'boolean' ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = typeof o.src !== 'string' ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhrWithCredentials = o.xhrWithCredentials || false; // Setup all other default properties.

      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false; // Setup event listeners.

      self._onend = o.onend ? [{
        fn: o.onend
      }] : [];
      self._onfade = o.onfade ? [{
        fn: o.onfade
      }] : [];
      self._onload = o.onload ? [{
        fn: o.onload
      }] : [];
      self._onloaderror = o.onloaderror ? [{
        fn: o.onloaderror
      }] : [];
      self._onplayerror = o.onplayerror ? [{
        fn: o.onplayerror
      }] : [];
      self._onpause = o.onpause ? [{
        fn: o.onpause
      }] : [];
      self._onplay = o.onplay ? [{
        fn: o.onplay
      }] : [];
      self._onstop = o.onstop ? [{
        fn: o.onstop
      }] : [];
      self._onmute = o.onmute ? [{
        fn: o.onmute
      }] : [];
      self._onvolume = o.onvolume ? [{
        fn: o.onvolume
      }] : [];
      self._onrate = o.onrate ? [{
        fn: o.onrate
      }] : [];
      self._onseek = o.onseek ? [{
        fn: o.onseek
      }] : [];
      self._onunlock = o.onunlock ? [{
        fn: o.onunlock
      }] : [];
      self._onresume = []; // Web Audio or HTML5 Audio?

      self._webAudio = Howler.usingWebAudio && !self._html5; // Automatically try to enable audio.

      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      } // Keep track of this Howl group in the global controller.


      Howler._howls.push(self); // If they selected autoplay, add a play event to the load queue.


      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function action() {
            self.play();
          }
        });
      } // Load the source file unless otherwise specified.


      if (self._preload) {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function load() {
      var self = this;
      var url = null; // If no audio is available, quit immediately.

      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');

        return;
      } // Make sure our source is in an array.


      if (typeof self._src === 'string') {
        self._src = [self._src];
      } // Loop through the sources and pick the first one that is compatible.


      for (var i = 0; i < self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];

          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');

            continue;
          } // Extract the file extension from the URL or base64 data URI.


          ext = /^data:audio\/([^;,]+);/i.exec(str);

          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        } // Log a warning if no extension was found.


        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        } // Check if this extension is available.


        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');

        return;
      }

      self._src = url;
      self._state = 'loading'; // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.

      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      } // Create a new sound object and add it to the pool.


      new Sound(self); // Load and decode the audio data for playback.

      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function play(sprite, internal) {
      var self = this;
      var id = null; // Determine if a sprite, sound id or nothing was passed

      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default'; // Check if there is a single paused sound that isn't ended. 
        // If there is, play that sound. If not, continue as usual.  

        if (!self._playLock) {
          var num = 0;

          for (var i = 0; i < self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      } // Get the selected node, or get one from the pool.


      var sound = id ? self._soundById(id) : self._inactiveSound(); // If the sound doesn't exist, do nothing.

      if (!sound) {
        return null;
      } // Select the sprite definition.


      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      } // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.


      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite; // Mark this sound as not ended in case another sound is played before this one loads.

        sound._ended = false; // Add the sound to the queue to be played on load.

        var soundId = sound._id;

        self._queue.push({
          event: 'play',
          action: function action() {
            self.play(soundId);
          }
        });

        return soundId;
      } // Don't play the sound if an id was passed and it is already playing.


      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      } // Make sure the AudioContext isn't suspended, and resume it if it is.


      if (self._webAudio) {
        Howler._autoResume();
      } // Determine how long to play for and where to start playing.


      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
      var timeout = duration * 1000 / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      var loop = !!(sound._loop || self._sprite[sprite][2]);
      sound._sprite = sprite; // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.

      sound._ended = false; // Update the parameters of the sound.

      var setParams = function setParams() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = loop;
      }; // End the sound instantly if seek is at the end.


      if (seek >= stop) {
        self._ended(sound);

        return;
      } // Begin the actual playback.


      var node = sound._node;

      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function playWebAudio() {
          self._playLock = false;
          setParams();

          self._refreshBuffer(sound); // Setup the playback params.


          var vol = sound._muted || self._muted ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime; // Play the sound using the supported method.

          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          } // Start a new timer if none is present.


          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function () {
              self._emit('play', sound._id);

              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running') {
          playWebAudio();
        } else {
          self._playLock = true; // Wait for the audio context to resume before playing.

          self.once('resume', playWebAudio); // Cancel the end timer.

          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function playHtml5() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate; // Some browsers will throw an error if this is called without user interaction.

          try {
            var play = node.play(); // Support older browsers that don't support promises, and thus don't have this issue.

            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true; // Set param values immediately.

              setParams(); // Releases the lock and executes queued actions.

              play.then(function () {
                self._playLock = false;
                node._unlocked = true;

                if (!internal) {
                  self._emit('play', sound._id);

                  self._loadQueue();
                }
              })["catch"](function () {
                self._playLock = false;

                self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.'); // Reset the ended and paused values.


                sound._ended = true;
                sound._paused = true;
              });
            } else if (!internal) {
              self._playLock = false;
              setParams();

              self._emit('play', sound._id);

              self._loadQueue();
            } // Setting rate before playing won't work in IE, so we set it again here.


            node.playbackRate = sound._rate; // If the node is still paused, then we can assume there was a playback issue.

            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.');

              return;
            } // Setup the end timer on sprites or listen for the ended event.


            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function () {
                // Fire ended on this audio node.
                self._ended(sound); // Clear this listener.


                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };

              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        }; // If this is streaming audio, make sure the src is set and load again.


        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        } // Play immediately if ready, or wait for the 'canplaythrough'e vent.


        var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;

        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;

          var listener = function listener() {
            // Begin playback.
            playHtml5(); // Clear this listener.

            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };

          node.addEventListener(Howler._canPlayEvent, listener, false); // Cancel the end timer.

          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function pause(id) {
      var self = this; // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.

      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function action() {
            self.pause(id);
          }
        });

        return self;
      } // If no id is passed, get all ID's to be paused.


      var ids = self._getSoundIds(id);

      for (var i = 0; i < ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]); // Get the sound.


        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true; // Stop currently running fades.

          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              } // Clean up the buffer source.


              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        } // Fire the pause event, unless `true` is passed as the 2nd argument.


        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function stop(id, internal) {
      var self = this; // If the sound hasn't loaded, add it to the load queue to stop when capable.

      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function action() {
            self.stop(id);
          }
        });

        return self;
      } // If no id is passed, get all ID's to be stopped.


      var ids = self._getSoundIds(id);

      for (var i = 0; i < ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]); // Get the sound.


        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true; // Stop currently running fades.

          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                } // Clean up the buffer source.


                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;

              sound._node.pause(); // If this is a live stream, stop download once the audio is stopped.


              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function mute(muted, id) {
      var self = this; // If the sound hasn't loaded, add it to the load queue to mute when capable.

      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function action() {
            self.mute(muted, id);
          }
        });

        return self;
      } // If applying mute/unmute to all sounds, update the group's value.


      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      } // If no id is passed, get all ID's to be muted.


      var ids = self._getSoundIds(id);

      for (var i = 0; i < ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted; // Cancel active fade and set the volume to the end value.

          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function volume() {
      var self = this;
      var args = arguments;
      var vol, id; // Determine the values based on arguments.

      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();

        var index = ids.indexOf(args[0]);

        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      } // Update the volume or return the current volume.


      var sound;

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function action() {
              self.volume.apply(self, args);
            }
          });

          return self;
        } // Set the group volume.


        if (typeof id === 'undefined') {
          self._volume = vol;
        } // Update one or all volumes.


        id = self._getSoundIds(id);

        for (var i = 0; i < id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol; // Stop currently running fades.

            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function fade(from, to, len, id) {
      var self = this; // If the sound hasn't loaded, add it to the load queue to fade when capable.

      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function action() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      } // Make sure the to/from/len values are numbers.


      from = parseFloat(from);
      to = parseFloat(to);
      len = parseFloat(len); // Set the volume to the start position.

      self.volume(from, id); // Fade the volume of one or all sounds.

      var ids = self._getSoundIds(id);

      for (var i = 0; i < ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]); // Create a linear fade or fall back to timeouts with HTML5 Audio.


        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          } // If we are using Web Audio, let the native methods do the actual fade.


          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + len / 1000;
            sound._volume = from;

            sound._node.gain.setValueAtTime(from, currentTime);

            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function _startFadeInterval(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, steps > 0 ? len / steps : len);
      var lastTick = Date.now(); // Store the value being faded to.

      sound._fadeTo = to; // Update the volume value on each interval tick.

      sound._interval = setInterval(function () {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick; // Make sure the volume is in the right bounds.

        vol = Math.max(0, vol);
        vol = Math.min(1, vol); // Round to within 2 decimal points.

        vol = Math.round(vol * 100) / 100; // Change the volume.

        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        } // Set the group's volume.


        if (isGroup) {
          self._volume = vol;
        } // When the fade is complete, stop it and fire event.


        if (to < from && vol <= to || to > from && vol >= to) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);

          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function _stopFade(id) {
      var self = this;

      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;

        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function loop() {
      var self = this;
      var args = arguments;
      var loop, id, sound; // Determine the values for loop and id.

      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      } // If no id is passed, get all ID's to be looped.


      var ids = self._getSoundIds(id);

      for (var i = 0; i < ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;

          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;

            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function rate() {
      var self = this;
      var args = arguments;
      var rate, id; // Determine the values based on arguments.

      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();

        var index = ids.indexOf(args[0]);

        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      } // Update the playback rate or return the current value.


      var sound;

      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function action() {
              self.rate.apply(self, args);
            }
          });

          return self;
        } // Set the group rate.


        if (typeof id === 'undefined') {
          self._rate = rate;
        } // Update one or all volumes.


        id = self._getSoundIds(id);

        for (var i = 0; i < id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }

            sound._rate = rate; // Change the playback rate.

            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            } // Reset the timers.


            var seek = self.seek(id[i]);
            var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
            var timeout = duration * 1000 / Math.abs(sound._rate); // Start a new end timer if sound is already playing.

            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);

              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function seek() {
      var self = this;
      var args = arguments;
      var seek, id; // Determine the values based on arguments.

      if (args.length === 0) {
        // We will simply return the current position of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();

        var index = ids.indexOf(args[0]);

        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      } // If there is no ID, bail out.


      if (typeof id === 'undefined') {
        return self;
      } // If the sound hasn't loaded, add it to the load queue to seek when capable.


      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'seek',
          action: function action() {
            self.seek.apply(self, args);
          }
        });

        return self;
      } // Get the sound.


      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);

          if (playing) {
            self.pause(id, true);
          } // Move the position of the track and cancel timer.


          sound._seek = seek;
          sound._ended = false;

          self._clearTimer(id); // Update the seek position for HTML5 Audio.


          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          } // Seek and emit when ready.


          var seekAndEmit = function seekAndEmit() {
            self._emit('seek', id); // Restart the playback if the sound was playing.


            if (playing) {
              self.play(id, true);
            }
          }; // Wait for the play lock to be unset before emitting (HTML5 Audio).


          if (playing && !self._webAudio) {
            var emitSeek = function emitSeek() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };

            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function playing(id) {
      var self = this; // Check the passed sound ID (if any).

      if (typeof id === 'number') {
        var sound = self._soundById(id);

        return sound ? !sound._paused : false;
      } // Otherwise, loop through all sounds and check if any are playing.


      for (var i = 0; i < self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function duration(id) {
      var self = this;
      var duration = self._duration; // If we pass an ID, get the sound and return the sprite length.

      var sound = self._soundById(id);

      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function state() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function unload() {
      var self = this; // Stop playing any active sounds.

      var sounds = self._sounds;

      for (var i = 0; i < sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        } // Remove the source or disconnect.


        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node); // Remove any event listeners.


          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);

          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false); // Release the Audio object back to the pool.


          Howler._releaseHtml5Audio(sounds[i]._node);
        } // Empty out all of the nodes.


        delete sounds[i]._node; // Make sure all timers are cleared out.

        self._clearTimer(sounds[i]._id);
      } // Remove the references in the global Howler object.


      var index = Howler._howls.indexOf(self);

      if (index >= 0) {
        Howler._howls.splice(index, 1);
      } // Delete this sound from the cache (if no other Howl is using it).


      var remCache = true;

      for (i = 0; i < Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      } // Clear global errors.


      Howler.noAudio = false; // Clear out `self`.

      self._state = 'unloaded';
      self._sounds = [];
      self = null;
      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function on(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {
          id: id,
          fn: fn,
          once: once
        } : {
          id: id,
          fn: fn
        });
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function off(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0; // Allow passing just an event and ID.

      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i = 0; i < events.length; i++) {
          var isId = id === events[i].id;

          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);

        for (i = 0; i < keys.length; i++) {
          if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function once(event, fn, id) {
      var self = this; // Setup the event listener.

      self.on(event, fn, id, 1);
      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function _emit(event, id, msg) {
      var self = this;
      var events = self['_on' + event]; // Loop through event store and fire all functions.

      for (var i = events.length - 1; i >= 0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function (fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0); // If this event was setup with `once`, remove it.

          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      } // Pass the event type into load queue so that it can continue stepping.


      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function _loadQueue(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0]; // Remove this task if a matching event was passed.

        if (task.event === event) {
          self._queue.shift();

          self._loadQueue();
        } // Run the task if no event type is passed.


        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function _ended(sound) {
      var self = this;
      var sprite = sound._sprite; // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.

      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      } // Should this sound loop?


      var loop = !!(sound._loop || self._sprite[sprite][2]); // Fire the ended event.

      self._emit('end', sound._id); // Restart the playback for HTML5 Audio loop.


      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      } // Restart this timer if on a Web Audio loop.


      if (self._webAudio && loop) {
        self._emit('play', sound._id);

        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;
        var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      } // Mark the node as paused.


      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;

        self._clearTimer(sound._id); // Clean up the buffer source.


        self._cleanBuffer(sound._node); // Attempt to auto-suspend AudioContext if no sounds are still playing.


        Howler._autoSuspend();
      } // When using a sprite, end the track.


      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function _clearTimer(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);

          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function _soundById(id) {
      var self = this; // Loop through all sounds and find the one with this ID.

      for (var i = 0; i < self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function _inactiveSound() {
      var self = this;

      self._drain(); // Find the first inactive node to recycle.


      for (var i = 0; i < self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      } // If no inactive node was found, create a new one.


      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function _drain() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0; // If there are less sounds than the max pool size, we are done.

      if (self._sounds.length < limit) {
        return;
      } // Count the number of inactive sounds.


      for (i = 0; i < self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      } // Remove excess inactive sounds, going in reverse order.


      for (i = self._sounds.length - 1; i >= 0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          } // Remove sounds until we have the pool size.


          self._sounds.splice(i, 1);

          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function _getSoundIds(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];

        for (var i = 0; i < self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function _refreshBuffer(sound) {
      var self = this; // Setup the buffer source for playback.

      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src]; // Connect to the correct node.

      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      } // Setup looping and playback rate.


      sound._node.bufferSource.loop = sound._loop;

      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }

      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function _cleanBuffer(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);

        if (isIOS) {
          try {
            node.bufferSource.buffer = Howler._scratchBuffer;
          } catch (e) {}
        }
      }

      node.bufferSource = null;
      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function _clearSound(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);

      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };
  /** Single Sound Methods **/

  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */

  var Sound = function Sound(howl) {
    this._parent = howl;
    this.init();
  };

  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function init() {
      var self = this;
      var parent = self._parent; // Setup the default parameters.

      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default'; // Generate a unique ID for this sound.

      self._id = ++Howler._counter; // Add itself to the parent's pool.

      parent._sounds.push(self); // Create the new node.


      self.create();
      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function create() {
      var self = this;
      var parent = self._parent;
      var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();

        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);

        self._node.paused = true;

        self._node.connect(Howler.masterGain);
      } else {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio(); // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).

        self._errorFn = self._errorListener.bind(self);

        self._node.addEventListener('error', self._errorFn, false); // Listen for 'canplaythrough' event to let us know the sound is ready.


        self._loadFn = self._loadListener.bind(self);

        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false); // Setup the new audio node.


        self._node.src = parent._src;
        self._node.preload = 'auto';
        self._node.volume = volume * Howler.volume(); // Begin loading the source.

        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function reset() {
      var self = this;
      var parent = self._parent; // Reset all of the parameters of this sound.

      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default'; // Generate a new ID so that it isn't confused with the previous sound.

      self._id = ++Howler._counter;
      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function _errorListener() {
      var self = this; // Fire an error event and pass back the code.

      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0); // Clear the event listener.


      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function _loadListener() {
      var self = this;
      var parent = self._parent; // Round up the duration to account for the lower precision in HTML5 Audio.

      parent._duration = Math.ceil(self._node.duration * 10) / 10; // Setup a sprite if none is defined.

      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {
          __default: [0, parent._duration * 1000]
        };
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';

        parent._emit('load');

        parent._loadQueue();
      } // Clear the event listener.


      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    }
  };
  /** Helper Methods **/

  /***************************************************************************/

  var cache = {};
  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */

  var loadBuffer = function loadBuffer(self) {
    var url = self._src; // Check if the buffer has already been cached and use it instead.

    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration; // Load the sound into this Howl.

      loadSound(self);
      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);

      for (var i = 0; i < data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.withCredentials = self._xhrWithCredentials;
      xhr.responseType = 'arraybuffer';

      xhr.onload = function () {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];

        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');

          return;
        }

        decodeAudioData(xhr.response, self);
      };

      xhr.onerror = function () {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };

      safeXhrSend(xhr);
    }
  };
  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */


  var safeXhrSend = function safeXhrSend(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };
  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */


  var decodeAudioData = function decodeAudioData(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function error() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    }; // Load the sound on success.


    var success = function success(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    }; // Decode the buffer into an audio source.


    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success)["catch"](error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  };
  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */


  var loadSound = function loadSound(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    } // Setup a sprite if none is defined.


    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {
        __default: [0, self._duration * 1000]
      };
    } // Fire the loaded event.


    if (self._state !== 'loaded') {
      self._state = 'loaded';

      self._emit('load');

      self._loadQueue();
    }
  };
  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */


  var setupAudioContext = function setupAudioContext() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    } // Check if we are using Web Audio and setup the AudioContext if we are.


    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch (e) {
      Howler.usingWebAudio = false;
    } // If the audio context creation still failed, set using web audio to false.


    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    } // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.


    var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);

    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

    var version = appVersion ? parseInt(appVersion[1], 10) : null;

    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());

      if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
        Howler.usingWebAudio = false;
      }
    } // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).


    if (Howler.usingWebAudio) {
      Howler.masterGain = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    } // Re-run the setup on Howler.


    Howler._setup();
  }; // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // Add support for CommonJS libraries such as browserify.


  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  } // Define globally in case AMD is not available or unused.


  if (typeof window !== 'undefined') {
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  } else if (typeof global !== 'undefined') {
    // Add to global in Node.js (for testing, etc).
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  }
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.2
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */


(function () {
  'use strict'; // Setup default properties.

  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
  /** Global Methods **/

  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */

  HowlerGlobal.prototype.stereo = function (pan) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self.ctx || !self.ctx.listener) {
      return self;
    } // Loop through all Howls and update their stereo panning.


    for (var i = self._howls.length - 1; i >= 0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };
  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */


  HowlerGlobal.prototype.pos = function (x, y, z) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self.ctx || !self.ctx.listener) {
      return self;
    } // Set the defaults for optional 'y' & 'z'.


    y = typeof y !== 'number' ? self._pos[1] : y;
    z = typeof z !== 'number' ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };
  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */


  HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self.ctx || !self.ctx.listener) {
      return self;
    } // Set the defaults for optional 'y' & 'z'.


    var or = self._orientation;
    y = typeof y !== 'number' ? or[1] : y;
    z = typeof z !== 'number' ? or[2] : z;
    xUp = typeof xUp !== 'number' ? or[3] : xUp;
    yUp = typeof yUp !== 'number' ? or[4] : yUp;
    zUp = typeof zUp !== 'number' ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };
  /** Group Methods **/

  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */


  Howl.prototype.init = function (_super) {
    return function (o) {
      var self = this; // Setup user-defined default properties.

      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      }; // Setup event listeners.

      self._onstereo = o.onstereo ? [{
        fn: o.onstereo
      }] : [];
      self._onpos = o.onpos ? [{
        fn: o.onpos
      }] : [];
      self._onorientation = o.onorientation ? [{
        fn: o.onorientation
      }] : []; // Complete initilization with howler.js core's init function.

      return _super.call(this, o);
    };
  }(Howl.prototype.init);
  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */


  Howl.prototype.stereo = function (pan, id) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self._webAudio) {
      return self;
    } // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.


    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function action() {
          self.stereo(pan, id);
        }
      });

      return self;
    } // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.


    var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo'; // Setup the group's stereo panning if no ID is passed.

    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    } // Change the streo panning of one or all sounds in group.


    var ids = self._getSoundIds(id);

    for (var i = 0; i < ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower'; // Check if there is a panner setup and create a new one if not.

            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);

                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);

                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };
  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */


  Howl.prototype.pos = function (x, y, z, id) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self._webAudio) {
      return self;
    } // If the sound hasn't loaded, add it to the load queue to change position when capable.


    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function action() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    } // Set the defaults for optional 'y' & 'z'.


    y = typeof y !== 'number' ? 0 : y;
    z = typeof z !== 'number' ? -0.5 : z; // Setup the group's spatial position if no ID is passed.

    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    } // Change the spatial position of one or all sounds in group.


    var ids = self._getSoundIds(id);

    for (var i = 0; i < ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);

              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);

              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };
  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */


  Howl.prototype.orientation = function (x, y, z, id) {
    var self = this; // Stop right here if not using Web Audio.

    if (!self._webAudio) {
      return self;
    } // If the sound hasn't loaded, add it to the load queue to change orientation when capable.


    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function action() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    } // Set the defaults for optional 'y' & 'z'.


    y = typeof y !== 'number' ? self._orientation[1] : y;
    z = typeof z !== 'number' ? self._orientation[2] : z; // Setup the group's spatial orientation if no ID is passed.

    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    } // Change the spatial orientation of one or all sounds in group.


    var ids = self._getSoundIds(id);

    for (var i = 0; i < ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);

              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);

              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };
  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */


  Howl.prototype.pannerAttr = function () {
    var self = this;
    var args = arguments;
    var o, id, sound; // Stop right here if not using Web Audio.

    if (!self._webAudio) {
      return self;
    } // Determine the values based on arguments.


    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (_typeof(args[0]) === 'object') {
        o = args[0]; // Set the grou's panner attribute values.

        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    } // Update the values of the specified sounds.


    var ids = self._getSoundIds(id);

    for (var i = 0; i < ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        }; // Update the panner values or create a new panner if none exists.

        var panner = sound._panner;

        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          } // Create a new panner node.


          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };
  /** Single Sound Methods **/

  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */


  Sound.prototype.init = function (_super) {
    return function () {
      var self = this;
      var parent = self._parent; // Setup user-defined default properties.

      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr; // Complete initilization with howler.js core Sound's init function.

      _super.call(this); // If a stereo or position was specified, set it up.


      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  }(Sound.prototype.init);
  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */


  Sound.prototype.reset = function (_super) {
    return function () {
      var self = this;
      var parent = self._parent; // Reset all spatial plugin properties on this sound.

      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr; // If a stereo or position was specified, set it up.

      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);

        self._panner = undefined;

        parent._refreshBuffer(self);
      } // Complete resetting of the sound.


      return _super.call(this);
    };
  }(Sound.prototype.reset);
  /** Helper Methods **/

  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */


  var setupPanner = function setupPanner(sound, type) {
    type = type || 'spatial'; // Create the new panner node.

    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);

        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);

        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);

        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);

        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();

      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node); // Update the connections.


    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Users/Andrew/AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../Users/Andrew/AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: {
    hash: ''
  }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line



/***/ })

/******/ });
//# sourceMappingURL=app_build.js.map