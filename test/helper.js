'use strict';

var funxtion = require('../');

funxtion.func1 = function() {
  process.stdout.write('func1 name test');
};

funxtion.func2 = function(arg1) {
  process.stdout.write(arg1 + ' name test');
};

funxtion.func3 = function(arg1, arg2) {
  process.stdout.write(arg1 + arg2 + ' name test');
  // return arg1 + arg2 + ' name test'
};
