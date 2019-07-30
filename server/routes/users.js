const express = require('express');
const router = express.Router();
const service=require('./../servers/userService');



router.post('/list',service.userList);/*用户数据列表*/
router.post('/login',service.login);/*用户登陆验证*/
//router.post('/findByKeyWord',service.findByKeyWord);/*关键字搜索用户*/
//router.post('/userAdd',service.userAdd);/*添加用户*/
//router.post('/userUpdate',service.userUpdate);/*修改用户*/
router.get('/findUserById',service.findUserById);/*根据ID查找用户*/
//router.get('/deleteUserById',service.deleteUserById);/*根据ID删除用户*/
//router.post('/deleteByBatch',service.deleteByBatch);/*批量删除用户*/



module.exports = router;
