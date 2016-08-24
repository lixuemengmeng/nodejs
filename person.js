// <!-- function Person(){
// 	this.think=function(callback){
// 		console.log('thinking----');
// 		setTimeout(function(){
// 			callback();
// 		},5000);
// 	}
// 	this.answer=function(){
// 	console.log('answer7');
// 	}
// }
// var p1=new Person();
// p1.think(function(){
// 	console.log('answer66666');
// }); -->
function person(){
	this.eat=function(){
	console.log('eat things');
	}
	this.say=function(){
	console.log('say things');
	}
}
module.exports= person;
