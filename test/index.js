'use strict';

/* jshint -W079 */
var test = require('tape');
var util = require('util');
var exec = require('child_process').exec;

test('Check for proper function call', function(t) {
  exec('node --harmony-proxies ./test/helper.js -- func1', function(err, stdout, stderr) {
    if (err) {
      util.log('child process failed with error ', err.code);
    }
    t.equal(stdout, 'func1 name test', 'called the right function');
  });
  t.end();
});

test('Check for function call with argument', function(t) {
  exec('node --harmony-proxies ./test/helper.js -- func2:"hey"', function(err, stdout, stderr) {
    if (err) {
      util.log('child process failed with error ', err.code);
    }
    t.equal(stdout, 'hey', 'called the right function with proper argument');
  });
	t.end();
});

test('Check for function call with multiple arguments', function(t) {
  exec('node --harmony-proxies ./test/helper.js -- func3:"test1","test2"', function(err, stdout, stderr) {
    if (err) {
      util.log('child process failed with error ', err.code);
    }
    t.equal(stdout, 'test1test2', 'called with multiple arguments ');
  });
	t.end();
});
