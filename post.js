var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');
http.createServer(function(req,res){
	
	var pathname=url.parse(req.url).pathname;
	console.log(pathname);
	switch(pathname){
		case '/add':
		resAdd(req,res);
		break;
		default:
		resDefault(res);
		break;
	};

}).listen(3000);
// console.log('start');
function resAdd(req,res){
	// console.log(123);
	//使用nodejs的方式去处理post请求
	var postData='';
	var param='';
	req.setEncoding('utf8');
	req.addListener('data',function(postDatachunk){
		postData+=postDatachunk;
		//可能字符串大小为10 缓存区为3 将缓存区的拼接成输入的字符串
	});
	
	req.addListener('end',function(){
		//console.log(postData);
		 param=querystring.parse(postData);
		 console.log(param);
	});
	if('/favicon.ico' ==pathname){
	return ;
}
	res.writeHead('200',{'console':'text/plain'});
	res.end(param.bookname);


}
function resDefault(res){
	res.writeHead('200',{'content-type':'text/html'});
	var pathname=__dirname+'/module/'+url.parse('index1.html').pathname;
	var indexPage=fs.readFileSync(pathname);
	res.end(indexPage);
}
