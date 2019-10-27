/**
 * 购物车
 * user_id
good_id
count
tilte
sell_price
img_url
 */

var mongoose = require('mongoose')

module.exports=mongoose.Schema({
    user_id:{type:Number,required:true},
    good_id:{type:Number,required:true},
    count : {type:Number,default:0,min:0},
    title: String,
    sell_price: {type:Number,default:0},
    img_url:String,
})