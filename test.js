import test from 'ava';
import osxScreensaver from './';

test('screensaver', t => {
	t.plan(1);

	osxScreensaver()
		.then(() => {
			t.assert(true);
		})
		.catch(err => {
			t.assert(!err, err);
		});
});
