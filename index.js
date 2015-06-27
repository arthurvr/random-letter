'use strict';
var alphabet = require('alphabet').lower;
var randomInt = require('random-int');

module.exports = function () {
	return alphabet[randomInt(0, 25)];
};
