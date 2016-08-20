var util=require('util');
var Animal=require('./animal.js');
function bird() {
		Animal.call(this);
	// util.inherits(this,Animal);
	// this.say=function(){
	// 	console.log('jijijiji');
	// }
}
util.inherits(bird,Animal);
bird.prototype.say = function() {
	// body...
	console.log('jijijiji');

};

module.exports=bird;