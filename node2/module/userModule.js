var db=require('./db.js');
exports.getByNamePwd=function(name,pwd,callback){
    var sql='select * from user where name=? and pass=?';
db.query(sql,[name,pwd],callback);

}
exports.save=function(name,pwd,callback){
   var sql='insert into user(name,pass) value(?,?)';
    db.query(sql,[name,pwd],callback);
}
