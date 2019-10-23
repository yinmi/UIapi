/*
项目运行入口文件
 */

// 加载express及一些中间件
var express =require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')

//创建服务器
var server = express()

//配置post表单接收
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())

 