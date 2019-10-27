/**
 * 商品详情
 * id
title
add_time
zaiyao
click
img_url
sell_price
market_price
stock_quantity
content
goods_no
 */

var mongoose = require('mongoose')

module.exports=mongoose.Schema({
    id : {type:Number,required:true},
    title : String,
    add_time: {type:Date,default:Date.now()},
    zaiyao : {type:String,default:''},
    click :{type:Number,default:0,min:0},
    img_url :{type:String,default:''},
    sell_price:{type:Number,default:0,min:0},
    market_price:{type:Number,default:0,min:0},
    count:{type:Number,default:0,min:0},
    content:String,
    goods_no:String,
})
