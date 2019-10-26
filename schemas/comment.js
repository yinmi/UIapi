/**
 * 评论
1. user_name
2. add_time
3. content
3. info_id
 */

var mongoose = require('mongoose')

module.exports=mongoose.Schema({
    user_name:{type:String,default:'匿名用户'},
    add_time:{type:Date,default:Date.now()},
    content:String,
    info_id:{type:Number,required:true}
})