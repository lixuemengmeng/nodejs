var http=require('http');
var urls=['www.baidu.com','www.qq.com','www.sohu.com'];

for(var i=0;i<urls.length;i++){
	fn(urls[i]);
}
function fn(url){
	var start=new Date();
	http.get({'host':url},function(res){
	console.log('from'+url);
	console.log(new Date()-start);

	})
}
