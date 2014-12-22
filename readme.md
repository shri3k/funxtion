#Funxtion

#Description
Makes it able to only execute exported function from the cli without running the whole program

##Example
//index.js
var funx = require('funxtion');

exports.function1 = function(){
	console.log("function 1");
}

exports.function2 = function(){
	console.log("function 2");
}

shriek@ubuntu $ node index.js :function1
