'use strict';
var test = require('ava');
var osxScreensaver = require('./');

test('screensaver', function (t) {
	t.plan(1);

	osxScreensaver(function (err) {
		t.assert(!err, err);
	});
});
