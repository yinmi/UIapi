/**
 * 图片详细相关
1. id
2. img_url
 */

var mongoose=require('mongoose')

module.exports=mongoose.Schema({
    id:{type:Number,required:true},
    img_url:String
})