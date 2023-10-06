const { log } = require('console');
var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:id',function(req,res,next){
    const fileId = req.params.id; // 获取路由参数中的id
    console.log(fileId)
    const filePath = path.join(__dirname,'../public/JSON/', `${fileId}.json`); 
    console.log(filePath)

    // 使用fs模块读取Markdown文件
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // 如果文件读取失败，返回错误响应
            console.log (err)
            res.status(404).send('文件未找到');
        } else {
            // 如果文件读取成功，将文件内容发送给客户端
            console.log("aa")
            res.send(data);
        }
    });
});

module.exports = router;
