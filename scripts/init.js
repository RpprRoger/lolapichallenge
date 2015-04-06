var Q = require('q');
var mkdirp = require('mkdirp');
var debug = require('debug')('urf:scripts:init');

module.exports = function(path) {
	var js = Q.defer();
	var css = Q.defer();
	// create public folder
	mkdirp(path + 'public/js', function(err) {
		if( err ) {
			debug('Failed to make public/js!', err);
			js.reject();
		} else {
			debug('Success! created public/js!');
			js.resolve();
		}
	});
	mkdirp(path + 'public/css', function(err) {
		if( err ) {
			debug('Failed to make public/css!', err);
			css.reject();
		} else {
			debug('Success! created public/css!');
			css.resolve();
		}
	});

	return Q.all([js.promise, css.promise]);
};
