var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');
/* GET home page. */
router.get('/',welcome.index);
router.get('/login',welcome.login);
router.post('/checklogin',welcome.welcomename);
router.get('/regist',welcome.regist);
router.post('/do_regist',welcome.do_regist);
router.get('/view',welcome.view);
router.get('/delete',welcome.delete);
router.get('/add',welcome.add);
router.post('/do_add',welcome.do_add);
router.get('/logout',welcome.out);
router.get('/update',welcome.update);
router.post('/do_update',welcome.do_update);
router.get('/test1',welcome.test1);
module.exports = router;
