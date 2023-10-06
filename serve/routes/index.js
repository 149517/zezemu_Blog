var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/images/:id', function (req, res, next) {
  const fileId = req.params.id; // 获取路由参数中的id
  // console.log(fileId)
  const filePath = path.join(__dirname,'../public/images/', `${fileId}`);

  const imageExtension = fileId.split('.').pop(); // 获取文件扩展名

  // 根据文件扩展名设置不同的Content-Type
  if (imageExtension === 'jpg') {
    res.setHeader('Content-Type', 'image/jpeg');
  } else if (imageExtension === 'png') {
    res.setHeader('Content-Type', 'image/png');
  } else if (imageExtension === 'webp') {
    res.setHeader('Content-Type', 'image/webp');
  } else {
    // 如果文件类型未知或不受支持，可以返回适当的错误响应
    res.status(400).send('Unsupported image type');
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // 如果文件读取失败，返回错误响应
      console.log(err)
      res.status(404).send('文件未找到');
    } else {
      // 如果文件读取成功，将文件内容发送给客户端
      res.send(data);
    }
  });
});

router.get('/make/:id', function (req, res, next) {
  const fileId = req.params.id; // 获取路由参数中的id
  console.log(fileId)
  switch (fileId) {
    case '1':
      res.redirect('/api/json/library');
      break;
    case '2':
      res.redirect('/api/json/blog');
      break;
    case '3':
      res.redirect('/api/json/music');
      break;
    case '4':
      res.redirect('/api/json/forum');
      break;
    default:
      res.status(404).send("请求失败")
  }
})

router.get('/download/:id', function (req, res) {
  const fileName = req.params.id;
  const filePath = path.join(__dirname,'../public/json/', `${fileName}`);
  res.download(filePath, function (err) {
      if (err) {
          // 发生错误时的处理逻辑
          console.log(err);
          res.status(404).send('文件未找到');
      } else {
          // 文件下载完成时的处理逻辑
          console.log('文件下载完成');
      }
  });
});
module.exports = router;
