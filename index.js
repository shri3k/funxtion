'use strict';
var debug = require('debug')('funxtion');
var _ = require('lodash');
var string2array = require('string2array');

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
var _ = require('lodash');
var knownOpts = {
  'list': Boolean,
  'arg': [String, Array]
};
var shortHands = {
  'ls': ['--list']
};

/**
 * Description: Gets a string seperated by delimiters and returns an object
 *              eg:- "func1:arg1,arg2;func2;func3:arg1"
 * @method prettyRemains
 * @param {String}
 * @return {Object}
 */
function prettyRemains(remain) {
  return _.chain(remain && remain.split('AND')).map(function(acc) {
    var obj = {};
    var func = acc.split(':')[0];
    var args = acc.replace(/^.+?:/, '');
    obj[func] = args ? string2array(args) : [];
    return obj;
  }).reduce(function(acc, next) {
    return _.extend(acc, next);
  }).value();
}

var parsedArg = nopt(knownOpts, shortHands, process.argv, 2);
var options = parsedArg;
var execFuncObj = prettyRemains(parsedArg.argv.remain[0]) || {};
module.exports = Proxy.create({
  set: function(target, propKey, fn) {
    if (options.list) {
      console.log(propKey);
    } else if (_.has(execFuncObj, propKey)) {
      debug('name of function executing: ', propKey);
      fn.apply(null, execFuncObj[propKey]);
    }
  }
});
