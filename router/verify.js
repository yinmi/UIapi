/**
 * 身份验证
 * 1。登入
 * 2. 注册
 *  路径以/admin开头
 */
var express = require('express')
var router = express.Router()
var database = require('../database/database.js')


//登入
/**
 * 登入表单
 * loginEmail
 * loginPassword
 */
router.post('/login', function (req, res) {
    let loginEmail = req.body.loginEmail
    console.log(loginEmail)
    let loginPassword = req.body.loginPassword
    console.log(loginPassword)
    if (!loginEmail || !loginPassword)
        res.json({
            status: 1,
            error: '邮箱或用户名为空'
        });
    else {
        database.user.findOne({
            'email': loginEmail
        }, (error, result) => {
            if (error) throw error;
            if (!result)
                res.json({
                    status: 1,
                    error: '无此用户'
                })
            else {
                if (result.password === loginPassword) {
                    
                    res.cookie('login', loginEmail, {
                        maxAge: 86400,
                        signed: true
                    })
                    res.cookie('password', loginPassword, {
                        maxAge: 86400,
                        signed: true
                    })
                    req.session.login = loginEmail;
                    req.session.password = loginPassword;

                    res.json({
                        status: 0,
                        message:'登入成功'
                    })

                } else
                    res.json({
                        status: 1,
                        error: '密码错误'
                    })
            }


        })

    }


})

//登出
router.get('/logout', function (req, res) {
    res.cookie('login',  {
        maxAge: 0,
        signed: true
    })
    res.cookie('password',  {
        maxAge: 0,
        signed: true
    })
    req.session.destroy(function (err) {
        res.json({
            status: 0,
            massage: '登出成功'
        })
    })
})

//注册
router.post('/register', function (req, res) {
    let loginName = req.body.loginName;
    console.log(loginName)
    let loginEmail = req.body.loginEmail;
    console.log(loginEmail)
    let loginPassword = req.body.loginPassword;
    console.log(loginPassword)

    let user = new database.user();
    user.userName = loginName;
    user.password = loginPassword;
    user.email = loginEmail;
    user.save(function (error) {
        if (!error) {
            res.json({
                status: 0,
                message: '注册成功'
            })

        } else {
            res.send(JSON.stringify(error))
        }
    });

})

module.exports = router