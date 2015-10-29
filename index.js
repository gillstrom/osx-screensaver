'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function () {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	var cmd = 'open';
	var args = [
		'/System/Library/Frameworks/ScreenSaver.framework/Versions/A/Resources/ScreenSaverEngine.app'
	];

	return pify(execFile, Promise)(cmd, args);
};
