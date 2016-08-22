var dns=require('dns');
var adress=dns.resolve4('www.qq.com',function(err,adress){
	if(err){
		console.log(err);
	}else{
		console.log(adress);
	}

});
console.log(adress+'laoshan');