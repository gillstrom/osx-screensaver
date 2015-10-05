'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function () {
	if (process.platform !== 'darwin') {
		Promise.reject(new Error('Only OS X systems are supported'));
	}

	var cmd = 'open';
	var args = [
		'-a',
		'ScreenSaverEngine'
	];

	return pify(execFile, Promise)(cmd, args);
};
