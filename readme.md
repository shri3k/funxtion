#Funxtion

#Description
Makes it able to only execute exported function from the cli without running the whole program

##Example
	//index.js
	var exports = require('funxtion');
	
	exports.function1 = function(){
		console.log("function 1");
	}
	
	exports.function2 = function(){
		console.log("function 2");
	}
	
	shriek@ubuntu $ node --harmony-proxies index.js -- function1:arg1,arg2
