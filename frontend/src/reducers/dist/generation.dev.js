"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../actions/types");

var _fetchStates = _interopRequireDefault(require("./fetchStates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_GENERATION = {
  generationId: '',
  expiration: ''
};

var generationReducer = function generationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_GENERATION;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.GENERATION.FETCH:
      return _objectSpread({}, state, {
        status: _fetchStates["default"].fetching
      });

    case _types.GENERATION.FETCH_ERROR:
      return _objectSpread({}, state, {
        status: _fetchStates["default"].error,
        message: action.message
      });

    case _types.GENERATION.FETCH_SUCCESS:
      return _objectSpread({}, state, {
        status: _fetchStates["default"].success
      }, action.generation);

    default:
      return state;
  }
};

var _default = generationReducer;
exports["default"] = _default;