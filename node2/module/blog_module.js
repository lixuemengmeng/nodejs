var db=require('./db.js');
exports.getCicle=function(callback){
    sql='select blg.*,usr.name from blog blg,user usr where usr.userid=blg.nameid';
    db.query(sql,[],callback);

}
exports.updatehit=function(bid,hit,callback){
    //update 表名 set 列名=值,列名=值 where 条件
    var sql='update blog set hits=? where blogid=?';
    db.query(sql,[hit,bid],callback);
}
exports.getCicleById=function(bid,callback){
    var sql='select blg.*,usr.name from blog blg,user usr order by blg.blogid desc where usr.userid=blg.nameid and blogid=? ';
    db.query(sql,[bid],callback);
}
exports.deleteBlog=function(did,callback){
    var sql='delete from blog where blogid=?';
    db.query(sql,[did],callback);
}
exports.addCircle=function(tit,conn,id,nowtime,callback){
    //var sql='insert into user(name,pass) value(?,?)';
    var sql='insert into blog(title,content,time,hits,nameid) value(?,?,?,?,?)';
    db.query(sql,[tit,conn,nowtime,null,id],callback);
}
exports.updateById=function(tit,con,id,callback){
    //update 表名 set 列名=值,列名=值 where 条件
    var sql='update blog set title=?,content=? where blogid=?';
    db.query(sql,[tit,con,id],callback);

}