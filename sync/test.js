//同步
var fs=require('fs');
var data=fs.readFileSync('1.txt');
console.log(data);
console.log('end');
//异步
var data=fs.readFile('1.txt','utf-8',function(err,data){
	if(err){
		console.log('err');
	}else{
		getData(data);
	}
});
console.log('end'); 
function getData(data){
	setTimeout(returndata(data),2000);
}
function returndata(data){
	console.log(data);
}