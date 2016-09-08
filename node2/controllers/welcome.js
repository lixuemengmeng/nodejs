var userModule=require('../module/userModule.js');
var blog_module=require('../module/blog_module.js');
exports.index= function(req, res, next) {

    blog_module.getCicle(function(rs){
       // req.session.user=rs[0];
        //console.log(122);
        res.render('index.ejs',{
            user:req.session.user,
            blg:rs
        });
       // console.log(user);
    });

}
exports.login=function(req,res){
    res.render('login.ejs');
}
exports.welcomename=function(req,res){
    var username=req.body.username;
    var pwd=req.body.pwd;
    userModule.getByNamePwd(username,pwd,function(rs){
        if(rs.length){
            req.session.user=rs[0];
            res.redirect('/');
        }
    });

}
exports.regist=function(req,res){
    res.render('regist.ejs');
}
exports.do_regist=function(req,res){
    var username=req.body.username;
    var pwd=req.body.pwd;
    var sex=req.body.sex;
    userModule.save(username,pwd,function(rs){
       if(rs.affectedRows>0){
           res.redirect('/login');
       }
    });
}

exports.view=function(req,res){

    var bid=req.query.id;
     //hit=hit+1;
     var hit=req.query.hit;

    var hit=parseInt(hit);
        hit=hit+1;
     blog_module.updatehit(bid,hit,function(rs){
        if(rs.affectedRows>0){
            blog_module.getCicleById(bid,function(rs){

                if(rs.length){
                    //console.log(rs);
                    res.render('view.ejs',{
                        blogrs:rs
                    });
                }
            });

        }


    });

}
exports.delete=function(req,res){
    var did=req.query.id;
    blog_module.deleteBlog(did,function(rs){
        if(rs.affectedRows){
            res.redirect('/');
        }
    });
}
exports.add=function(req,res){

    res.render('add.ejs');

}
exports.do_add=function(req,res){
    var tit=req.body.titl;
    var conn=req.body.con;
    //console.log(tit);
    var user=req.session.user;

    var nowtime= new Date();
    console.log(nowtime);
    var id=user.userid;
    if(user){

        blog_module.addCircle(tit,conn,id,nowtime,function(rs){

            if(rs.affectedRows>0){
                res.redirect('/');
            }


        });
    }

}
exports.out=function(req,res){
    req.session.user='';
    res.redirect('/');
}
exports.update=function(req,res){
    var cont=req.query.con;
    var titl=req.query.tit;
    var id=req.query.bid;
    res.render('update.ejs',{
       con:cont,
        tit:titl,
        bid:id
    });
}
exports.do_update=function(req,res){
    var tit=req.body.tit;
    var con=req.body.con;
    var id=req.body.hid;
    blog_module.updateById(tit,con,id,function(rs){
        console.log(rs);
        if(rs.affectedRows>0){
            res.redirect('/');
        }
    });
}
exports.test1=function(req,res){
    res.render('test1');
}
exports.addprocess=function(req,res){
    res.render('addpro');
}
