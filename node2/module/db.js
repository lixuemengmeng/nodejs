var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blogl'
});
exports.query=function(sql,faram,callback){

    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(sql,faram, function(err, result, fields) {
            if (err) throw err;
            callback(result);
            connection.release();
        });
    });

    }