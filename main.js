/*
项目运行入口文件
 */

// 加载express及一些中间件
var express =require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')
var mongoose =require('mongoose')


//创建服务器
var server = express()

//配置post表单接收
server.use(bodyParser.urlencoded({extended:false}))

server.use(bodyParser.json())

//挂载cookie
server.use(cookieParser('userPassword'))
//挂载session
server.use(expressSession({
   secret:'session',
   name:'session_id',
   resave:false,
   rolling:true,
   cookie:{maxAge:(5000)}


}))

//开放资源
server.use('/public',express.static(__dirname+'/public'))

//连接数据库
mongoose.connect('mongodb://localhost:27017/infor')

var db=mongoose.connection

db.on('error',console.error.bind(console,'connection error'))

db.on('open',console.error.bind(console,'connection succeed'))

//挂载路由
server.use('/admin',require('./router/verify.js'))

server.use('/api',require('./router/service.js'))

//监听端口
server.listen(3000, () => console.log('http://127.0.0.1:3000'))