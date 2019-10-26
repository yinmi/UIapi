var mongoose =require('mongoose')
var userShemas=require('../schemas/user.js')
var pictureShemas=require('../schemas/picture.js')
var newsShemas = require('../schemas/news.js')
var imagOtherShemas =require('../schemas/imgOther.js')
var commentShemas = require('../schemas/comment.js')
var categoryToPictureShemas =require('../schemas/categoryToPicture.js')
var categoryShemas = require('../schemas/category.js')


var database={};

console.log(mongoose.model('user',userShemas))
//向数据库中添加集合
database.user=mongoose.model('user',userShemas)

database.picture=mongoose.model('picture',pictureShemas)

database.news=mongoose.model('news',newsShemas)

database.imagOther = mongoose.model('imagOther',imagOtherShemas)

database.comment = mongoose.model('comment',commentShemas)

database.categoryToPicture=mongoose.model('categoryToPicture',categoryToPictureShemas)

database.category = mongoose.model('category',categoryShemas)

module.exports=database



