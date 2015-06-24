'use strict';
var assert = require('assert');
var randomLetter = require('./');

it('should return a random letter from the english alphabet', function () {
	assert.equal(randomLetter().length, 1);
	assert.equal(typeof randomLetter(), 'string');
});
