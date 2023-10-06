var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/about', (req, res, next) => {
    const fileName = 'update_log'
    const filePath = path.join(__dirname,'../public/markdown/', `${fileName}.md`);
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
})


// 分片发送，下一次请求时候再进行下一次发送
router.get('/:fileName/:chunk', (req, res, next) => {
    const fileName = req.params.fileName;
    const chunk = req.params.chunk;
    const filePath = path.join(__dirname,'../public/markdown/', `${fileName}.md`);

    // 文件块大小
    const chunkSize = 1024 * 2; // 2kb，可以根据需要调整

    const chunkNumber = parseInt(chunk, 10);

    // 读取文件块并发送
    const start = chunkNumber * chunkSize;
    const end = start + chunkSize - 1;

    fs.stat(filePath, (err, stats) => {
        if (err) {
            return res.status(404).end(); // 文件不存在，返回404
        }

        let flag = true
        // 确保范围在文件大小内
        // const clampedEnd = Math.min(end, stats.size - 1);
        let clampedEnd;
        if (end > stats.size) {
            return res.status(400).end('文件没有更多了');
        } else {
            clampedEnd = end
        }

        // 设置响应头部，指示使用分片传输
        res.status(206)
            .set('Content-Type', 'application/octet-stream')
            .set('Content-Length', clampedEnd - start + 1)
            .set('Content-Range', `bytes ${start}-${clampedEnd}/${stats.size}`);

        // 创建可读流，并将文件块的内容发送到响应
        const fileStream = fs.createReadStream(filePath, { start, end: clampedEnd });
        fileStream.pipe(res);
    });
});


module.exports = router;