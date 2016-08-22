//等待的代码写在主函数里就是同步 写在回调函数里就是异步
function wait(name,name_function){
	var pus=0;
	var prevtime=new Date();
	while(pus<2000){
		var now=new Date();
		pus=now-prevtime;

	}
name_function(name);
}
function echodata(name){
	console.log(name);

}
wait('laoshan',echodata);
console.log('aaaa');