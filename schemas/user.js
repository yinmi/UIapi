/***
 * 用户模型
 * 1.用户名 userName
 * 2. 密码 password
 * 3. 邮箱 email
 * 4. 路径 path
 * 
 *  */
var mongoose = require('mongoose')

//创建用户模式
module.exports=new mongoose.Schema({
  id:mongoose.Schema.Types.ObjectId,
  createTime:{type:Date,default:Date.now},
  userName:{type:String,required:true},
  password:{type:String,required:true},
  email:{type:String,required:true},
  path:{type:String,default:"NULL"}
})