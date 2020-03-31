"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _types=require("../actions/types"),_fetchStates=_interopRequireDefault(require("./fetchStates"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var DEFAULT_GENERATION={generationId:"",expiration:""},generationReducer=function(e,t){var r=0<arguments.length&&void 0!==e?e:DEFAULT_GENERATION,n=1<arguments.length?t:void 0;switch(n.type){case _types.GENERATION.FETCH:return _objectSpread({},r,{status:_fetchStates.default.fetching});case _types.GENERATION.FETCH_ERROR:return _objectSpread({},r,{status:_fetchStates.default.error,message:n.message});case _types.GENERATION.FETCH_SUCCESS:return _objectSpread({},r,{status:_fetchStates.default.success},n.generation);default:return r}},_default=generationReducer;exports.default=_default;