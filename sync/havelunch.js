function having(food,drink,callback) {
	console.log('having'+food+"..."+drink);
	if(callback && typeof(callback)==='function'){
	
		setTimeout(function(){
			callback(); 
		},2000);
	}
}
having('sss','saaa',function(){
	console.log('finish');
});
console.log('end');