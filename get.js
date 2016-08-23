var http=require("http");
var url=require('url');
var querystring=require('querystring');
console.log(http.Server);
http.createServer(function(req,res){
var pathname=url.parse(req.url).pathname;
var paramStr=url.parse(req.url).query;
var param=querystring.parse(paramStr);

	console.log(param); 
}).listen(3000);