import test from 'ava';
import osxScreensaver from './';

test('screensaver', t => {
	t.plan(1);

	osxScreensaver(err => {
		t.assert(!err, err);
	});
});
