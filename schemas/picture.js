/**
 * ## 图片分享
1. id
2. title
3. img_url
4. zaiyao
5. click
6. content
 */

var mongoose=require('mongoose')

module.exports=mongoose.Schema({
    id:{type:Number,required:true},
    add_time:{type:Date,default:Date.now()},
    title:String,
    img_url:String,
    zaiyao:String,
    click:String,
    content:String
})