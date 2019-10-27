/**
 * 所有业务相关的路由
 * 以api开头
 * 
 */
var express = require('express')
var router = express.Router()
var database = require('../database/database.js')

//获取图文资讯
router.get('/getnewslist', function (req, res) {

    let newlist = [];

    database.news.find().sort({
        add_time: '-1'
    }).exec(function (error, result) {

        if (error) throw error;

        result.forEach(item => {
            newlist.push({
                id: item.id,
                title: item.title,
                zhaiyao: item.zhaiyao,
                click: item.click,
                img_url: item.img_url
            })

        })

        res.status(200).json(newlist)
    })
})

//获取图文资讯详情
router.get('/getnew/:newid', function (req, res) {
    let newid = req.params.newid;

    let news = {}
    database.findone().where({
        id: newid
    }).exec(function (error, result) {
        if (error) throw error;

        news.id = result.id;
        news.title = result.title;
        news.click = result.click;
        news.add_time = result.add_time;
        news.content = result.content;

    })

    res.status(200).json(news)

})

//图片列表数据
router.get('/getimages/:cateid', function (req, res) {
    let cateid = req.params.cateid;


})

//图片分类数据
router.get('/getimgcategory', function (req, res) {
    let pictures = [];

    database.category.find().exec(function (error, result) {
        if (error) throw error;

        result.forEach(item => {
            pictures.push({
                title: item.title,
                id: item.id
            });
        })

        res.status(200).json(pictures)

    })
})

//图片分享详情中的缩略图数组
router.get('/getthumimages/:imgid', function (req, res) {
    let imgid = req.params.imgid

    let pictures = [];

    database.imagOther.find().where({
        id: imgid
    }).exec(function (error, result) {
        result.forEach(item => {
            pictures.push({
                src: item.img_url
            })
        })
    })

    res.status(200).json(pictures)
})

//图片详情
router.get('/getimageInfo/:imgid', function (req, res) {
    let imgid = req.params.imgid

    let imgInfo = {};

    database.findone().where({
        id: imgid
    }).exec(function (error, result) {
        if (error) throw error;

        imgInfo.id = result.id;
        imgInfo.title = result.title;
        imgInfo.click = result.click;
        imgInfo.add_time = result.add_time;
        imgInfo.content = result.content;


    })

    res.status(200).json(imgInfo)

})

//获取评论信息
router.get('/getcomments/:artid?pageindex=1', function (req, res) {
    let artid = req.params.artid;

    let pageindex = req.query.pageindex - 1;

    let comment =[];

    database.comment.find().where({
        info_id: artid
    }).skip(pageindex * 10).limit(10).exec(function(error,result){
        if(error) throw error;

        result.forEach(item=>{
           comment.push({
               user_name:item.user_name,
               add_time:item.add_time,
               content:item.content
            }) 


        })
    })
})

//提交评论信息
router.post('postcomment/:artid',function(req,res){
    let artid = req.params.artid;
     
    let content = req.body.content;
     
    let comment=new database.comment();

    comment.content = content;
    comment.info_id = artid;

    comment.save((error)=>{
        if (!error) {
            res.json({
                status: 0,
                message: '品论提交成功'
            })

        } else {
            res.send(JSON.stringify(error))
        }
    })
    
})

商品列表
router.get('/getgoods?pageindex=number',function(req,res){
    let pageindex = req.query.pageindex-1

    let goodsList=[]

    database.goods.find().skip(pageindex*10).limit(10).exec(function(error,result){
        result.forEach(item=>{
            goodsList.push({
                id:item.id,
                title:item.title,
                add_time:item.add_time,
                zhaiyao:item.zhaiyao,
                click:item.click,
                img_url:item.img_url,
                sell_price:item.sell_price,
                market_price:item.market_price,
                stock_quantity:item.count
            })
        })

    })
    
    res.json(goodsList)
    

})

module.exports = router