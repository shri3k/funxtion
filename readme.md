#Funxtion
[![Build Status](https://travis-ci.org/sinkingshriek/funxtion.svg)](https://travis-ci.org/sinkingshriek/funxtion)

##Description
Makes it able to only execute exported function from the cli without running the whole program.  
This tool comes under a dev utility tool which lets you prototype your functions all in one file and still be able to run individual functions to test it on your cli. 

##Syntax
**node --harmony**|**--harmony-proxies** *file* **--** *functionName*[:[arg1,arg2...]]

##How it works?
You require `funxtion` in your prototype file and expose your functions to `funxtion` (preferred if you expose it under the name `exports` as shown in example below). `Funxtion` then watches for all the functions that's exposed to it and then executes if the argument matches any function name.


###Example
		//index.js
		var exports = require('funxtion');

		exports.function1 = function(){
			console.log("function 1");
		}

		exports.function2 = function(){
			console.log("function 2");
		}

		shriek@ubuntu $ node --harmony-proxies index.js -- function1:arg1,arg2

You can also do this:-

		//index2.js
		var anyName = require('funxtion');
		
		anyName.function1 = function(){
			console.log("function1");
		}

		shriek@ubuntu $ node --harmony-proxies index.js -- function1:arg1,arg2

**Note**

As of node `v0.12.0` it is not mandatory to give  `--harmony--proxies` flag. Doing just `--harmony` will not work.
