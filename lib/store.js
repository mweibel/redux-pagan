'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = i18n;

var _actionTypes = require('./actionTypes');

var _i18nResolver = require('./i18nResolver');

var _i18nResolver2 = _interopRequireDefault(_i18nResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = {
  get: function get() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _i18nResolver2.default.apply(undefined, [null, {}, 0].concat(args));
  },

  __version__: 0
};

var mergeLang = function mergeLang(state, action) {
  return (0, _extends4.default)({}, state, {
    data: (0, _extends4.default)({}, state.data, (0, _defineProperty3.default)({}, action.locale, action.lang)),
    locale: action.locale,
    get: function get() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _i18nResolver2.default.apply(undefined, [this.locale, this.data[this.locale], this.__version__].concat(args));
    },

    __version__: state.__version__ + 1
  });
};

function i18n() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_STATE : arguments[0];
  var action = arguments[1];

  return ((0, _defineProperty3.default)({}, _actionTypes.LOAD_LANG_SUCCESS, mergeLang)[action.type] || function (s) {
    return s;
  })(state, action);
}