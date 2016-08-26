var url=require('url');
var http=require('http');
var fs=require('fs');
var dns=require('dns');
var querystring=require('querystring');
http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	req.setEncoding('utf8');
	res.writeHead('200',{'Content-type':'text/html'});
	route(req,res,pathname);
}).listen(3000);
console.log('server start');
function route(req,res,pathname){
	switch(pathname){
		case '/parse':
			parseDns(req,res);
			break;
		default:
			parseindex(req,res);
			break;
	}

}
function parseindex(req,res){

	var pathname=__dirname+'/module/'+url.parse('index.html').pathname;
	var indexpage=fs.readFileSync(pathname);
	res.end(indexpage);

}
function parseDns(req,res){
	var postDate='';
	req.addListener('data',function(chunck){
		postDate+=chunck;
	});
	req.addListener('end',function(){
		var retData=getDns(postDate,function(domain,addresses){
			var str='';
			for($i=0;$i<addresses.length;$i++){
				str=" "+addresses[$i];
			}
			var data="domain : "+domain+" addresses "+str;
			res.end(data);
		});
	});
}
function getDns(postDate,callback){
	var domain=querystring.parse(postDate).search_name;
	dns.resolve4(domain,function(err,addresses){
		if(!addresses){
			addresses='no addresses';
		}
		callback(domain,addresses);
	});
}