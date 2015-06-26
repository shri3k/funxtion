# Funxtion
[![Build Status](https://travis-ci.org/sinkingshriek/funxtion.svg)](https://travis-ci.org/sinkingshriek/funxtion)

## Description
Makes it able to only execute exported function from the cli without running the whole program.<br>This tool comes under a dev utility tool which lets you prototype your functions all in one file and still be able to run individual functions to test it on your cli.

## Syntax
**node --harmony**|**--harmony-proxies** _file_ **--** _functionName_[:[arg1,arg2...]]

## How it works?
You require `funxtion` in your prototype file and expose your functions to `funxtion` (preferred if you expose it under the name `exports` as shown in example below). `Funxtion` then watches for all the functions that's exposed to it and then executes if the argument matches any function name.

### Example

```
    //index.js
    var exports = require('funxtion');

    exports.function1 = function(){
        console.log("function 1");
    }

    exports.function2 = function(){
        console.log("function 2");
    }

    shriek@ubuntu $ node --harmony-proxies index.js -- function1:arg1,arg2
```

You can also do this:-

```
    //index2.js
    var anyName = require('funxtion');

    anyName.function1 = function(){
        console.log("function1");
    }

    shriek@ubuntu $ node --harmony-proxies index.js -- function1:"arg1,arg2"
```

You can also pass objects(_has to be proper JSON format_) and arrays as arguments now (_the whole arguments needs to be in a string if objects and arrays are passed_):-

```
    //index2.js
    var anyName = require('funxtion');

    anyName.function1 = function(){
        console.log("function1");
    }

    shriek@ubuntu $ node --harmony-proxies index.js -- function1:'arg1,arg2,{"arg3":"arg4", "arg5":[1,3]}'
```

You can also call multiple functions now with `AND` (_no spaces between `AND` and other function name as it has special meaning in shell if you include it_):-

```
    shriek@ubuntu $ node --harmony-proxies index.js -- function1:'arg1'ANDfunction2:'arg2';
```

You can also list out all the functions in the file now:-  

```
    shriek@ubuntu $ node --harmony-proxies index.js --list;
    shriek@ubuntu $ node --harmony-proxies index.js --ls;
```

### Note:-
As of node `v0.12.0` it is mandatory to give  `--harmony--proxies` flag. Doing just `--harmony` will not work.

### Changelogs
#### 2015-06-13
- [Feature] Added multiple function calls capability
  - [x] Users can now call multiple functions by adding "AND" between function names
  - [x] eg. -- func1:"arg1"ANDfunc2:"arg2","arg3"

- [Feature] Able to list function names
  - [x] Users can now list the name of the functions with --list or -l flag
- [Fixed] Users can now pass objects and arrays as arguments
