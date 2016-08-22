function person(){
	this.think=function(callback){
		console.log('thinking');
		setTimeout(function(){
			callback();
		},2000);
	}
	this.answer=function(){
		console.log('answer another');
	}
}
var p1=new person();
p1.think(function(){
	console.log('anser right');
});
p1.answer();