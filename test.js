import test from 'ava';
import randomLetter from './';

test('should return a random letter from the english alphabet', t => {
	t.is(randomLetter().length, 1);
	t.is(typeof randomLetter(), 'string');

	t.end();
});
