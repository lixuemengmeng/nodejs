var util=require('util');
var Animal=require('./animal.js');
function Duck(){
	Animal.call(this);
	util.inherits(this,Animal);
	this.say=function(){
		console.log('gagagag');
	}
}
var duck=new Duck();
exports.say=duck.say;