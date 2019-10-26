/**
 *  图片分类和图片
1. 图片ID
2. 分类id
 */

var mongoose = require('mongoose')

module.exports =mongoose.Schema({
    img_id:{type:Number,required:true},
    cate_id:{type:Number,required:true}
})