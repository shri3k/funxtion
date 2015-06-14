'use strict';

function getErrTxt(version) {
  var v12 = version < 'v0.12.0' ? '--harmony or ' : '';
  console.log('No Harmony flag given. \nPlease re-run with %s--harmony-proxies flag\n', v12);
}

try {
  Proxy.create({});
} catch (e) {
  getErrTxt(process.version);
  process.exit(1);
}

var nopt = require('nopt');
var knownOpts = {
  'list': Boolean,
  'arg': [String, Array]
};
var shortHands = {
  'ls': ['--list']
};

var parsedArg = nopt(knownOpts, shortHands, process.argv, 2);

var options = parsedArg;
var funx = parsedArg.argv.remain;
var divider = funx[0] ? funx[0].split(':') : [];
var funcName = divider[0] ? divider[0] : '';
var argus = divider[1] ? divider[1].split(',') : [];
var counter = 0;

module.exports = Proxy.create({
  set: function(target, propKey, fn) {
    if (options.list) {
      console.log(propKey);
    } else if (propKey === funcName) {
      fn.apply(null, argus);
    }
  }
});
