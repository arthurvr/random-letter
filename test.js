'use strict';
var test = require('ava');
var randomLetter = require('./');

test('should return a random letter from the english alphabet', function (t) {
	t.is(randomLetter().length, 1);
	t.is(typeof randomLetter(), 'string');
});
