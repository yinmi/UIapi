/**
 * ## 新闻资讯
1. id
2. title
3. add_time
4. zhaiyao
5. click
6. img_url
7. content
 */
var mongoose=require('mongoose')

module.exports=mongoose.Schema({
    id:{type:Number,required:true},
    tite:{type:String},
    add_time:{type:Date,default:Date.now()},
    img_url:String,
    content:String,
    click:Number,
    zhaiyao:String
})