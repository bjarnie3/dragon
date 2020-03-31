"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGeneration = void 0;

var _types = require("./types");

var fetchGeneration = function fetchGeneration() {
  return function (dispatch) {
    dispatch({
      type: _types.GENERATION.FETCH
    });
    return fetch("http://localhost:3000/generation").then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.type === 'error') {
        dispatch({
          type: _types.GENERATION.FETCH_ERROR,
          message: json.message
        });
      } else {
        dispatch({
          type: _types.GENERATION.FETCH_SUCCESS,
          generation: json.generation
        });
      }
    })["catch"](function (error) {
      return dispatch({
        type: _types.GENERATION.FETCH_ERROR,
        message: error.message
      });
    });
  };
};

exports.fetchGeneration = fetchGeneration;