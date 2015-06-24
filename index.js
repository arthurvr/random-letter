'use strict';
var alphabet = require('alphabet').lower;

module.exports = function () {
	return alphabet[Math.floor(Math.random() * alphabet.length)];
};
