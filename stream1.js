var util=require('util');
var events=require('events');
function MyStream(){
	events.EventEmitter.call(this);
	//父类的内存映像
}
//应用inherits来实现MyStream继承自EventsEmmiter
util.inherits(MyStream,events.EventEmitter);
//只有找到MyStream的原生链才能用emit函数
MyStream.prototype.write=function(data){
	this.emit("data",data);
	//将data发送给data
}
var stream=new MyStream();
//console.log(stream instanceof events.EventEmitter);MyStream继承events.EventEmitter
//stream也继承events.EventEmitter
//console.log(MyStream.super_ === events.EventEmitter);
//必须是MyStream.super_  不能是实例化对象.super_
stream.on('data',function(data){
console.log('Receive data: '+data);
});
stream.write('It works!');