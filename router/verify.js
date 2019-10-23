/**
 * 身份验证
 * 1。登入
 * 2. 注册
 */
var express =require('express')
var router = express.Router()

//登入
router.post('/api/login',function(req,res){

})

//登出
router.get('/api/logout',function(req,res){

})

//注册
router.get('/api/register',function(req,res){

})

module.exports=router