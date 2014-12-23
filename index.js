'use strict';

try {
  Proxy.create({});
} catch (e) {
  process.stderr.write('No Harmony flag given. \nPlease re-run with --harmony or --harmony-proxies flag\n');
  process.exit(1);
}

var nopt = require('nopt');
var parsedArg = nopt({
	
	//probably for future
  'arg': [String, Array],
}, {}, process.argv, 2);

var funx = parsedArg.argv.remain;
var divider = funx[0] ? funx[0].split(':') : [];
var funcName = divider[0] ? divider[0] : '';
var argus = divider[1] ? divider[1].split(',') : '';

module.exports = Proxy.create({
  set: function(target, propKey, fn) {
    if (propKey === funcName) {
      fn.apply(argus, null);
    }
  }
});
