/**
 * 图片分类
1. title
2. id
 */
var mongoose=require('mongoose')

module.exports=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    title:String
})