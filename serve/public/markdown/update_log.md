##  3.0 

（2023/9/24-9/28）

1. 重新设计并修改网页UI，在原本PC端网页的基础上更加的简洁和美观
2. 修改了`redbook`页面中，加载速度过慢容易造成卡顿的问题。通过分页来降低延迟
3. 新增加了笔记内容版块，笔记模块会随着下滑加载新的内容，但是在内容接续部分容易出现乱码，但不影响体验
4. 新增了展示模块，包含了几个已经制作和正在制作的网站展示。



***



## 2.6.0

(2023/04/29)
1. **增加移动端网页的适配**

2. **修改网页`about`页面的数据方式，PC端通过渲染markdown文件完成，移动端使用了json数据的方式**

   
****

##  2.0.1

（2023/03/30）

1. **修复按钮点击无效果的问题**
2. **删除显示字体的问题，原字体加载很慢，然后进行删除**
3. **修改`red`界面图片和文字的布局方式，做了对齐处理**



****



##  2.0.0

（2023/03/29）

1. **重新设计网页UI，相比原本的页面添加了更过的网页动画效果。**
2. **在网页中删除了不太必要的页面和元素**
3. **在网站首页添加了一个播放按钮，点击可以播放音乐，也有一小段音浪的动画**
4. **部分网页仍在修改和添加中，部分功能仍未完善，手机端依然没有相应的适配**



***



##  1.6.3

（2023/03/13）

1. **`essay`页面中CSDN的图片链接失效**

2. **将所有的图片文件储存到服务器中**

   ```js
   app.use(express.static(path.join(__dirname,'/images')))
   
   router.get('/api/images/:id', (req, res) => {
       res.sendFile(path.join(__dirname, `./images/${req.params.id}`));
   })
   ```



****



##  1.6.2

（2023/03/09）

1. **修改了导航栏在鼠标移除后色块仍在的情况**
2. **添加了在redbook界面的两个动画和代码**



****





##  1.6.1

(2023/03/01-02)

1. **在后端添加文件图片上传接口并测试成功**（0301）
2. **添加log写入文字页面，最先使用的是`v-md-editor`中的markdown编辑框，但是在添加图片上传时候遇到问题，后改为`elementui-plus`中的编辑组件和图片上传，但是图片上传仍然有问题，故改为`file`文件上传的方式，并将图片转化为URL，传入后面的`img`中并进行预览**
3. **添加contact页面，添加微信和小红书二维码**
4. 页面功能实现暂时告一段落

***



## 1.6.0

1. **添加文件下载地址**

2. **通过node后端加上Nginx配置修改路由，**

   ```js
   const express = require('express');
   const path = require('path');
   
   const app = express();
   
   // 设置静态文件目录
   app.use('/downloads', express.static(path.join(__dirname, '/path/to/downloads')));
   
   // 下载文件路由
   app.get('/download/:filename', function(req, res){
     const filename = req.params.filename;
     const file = path.join(__dirname, '/path/to/downloads', filename);
     res.download(file);
   });
   
   ```

   ```nginx
   // 文件配置
   location /download {
       root C:/wwwroot/127.0.0.1/last/md/redbook;
       types { zip jpg png; }
       default_type application/octet-stream;
   }
   
   ```

	3. **在宝塔上修改后端文件需要重启后端服务器，node后端需要在软件中找到pm2软件，找到项目进行重启**



***



##  1.5.2

（2023/02/27）

1.  **添加essay页面新内容**

2. 、**修改elementui组件，使其图片滚动组件在外部传递参数给子组件**

   解决：去除原来组件中的`setup`属性

   ```js
   // 原来组件内容，const urls 内部含有图片链接  
   <script lang="ts" setup>
   
     const urls = [ ]
   
     </script>
   ```

   

   ```js
   // 修改后，添加props
   <script lang="ts">
   import { defineComponent } from 'vue'
   
   export default defineComponent({
     props: {
       urls:[]
     },
   })
    </script>
   ```



***





##  1.5.1

（2023/02/19）

1. **添加`essay`页面中的两个内容**
2. 暂存问题：
   1. 使用的elementUI-plus组件，在essay页面的侧边导航和文章图片显示上运用
   2. 尚且不美观
   3. 图片组件的使用不完善，原本打算使用组件传值的方式，当时图片组件内部使用的是ts。
   4. 导致错误频发，故而使用了两个同样的组件，以储存不同的图片信息

****



##  1.5.0

（2023/02/19 - 20)

1. **重置网页布局，修改部分布局**

   a.  修改网页适配方案，采用750设计稿+ rem布局的方式进行排列，在PC和iPad上显示均正常

   b. 尝试 发送带有图片的 markdown 文件，但是均失败，解决：删除md内部的图片

   c. 组件结构划分更加明确，页面内部结构组件复用

2. **在`home, about`  页面中都使用md解析为html结构的方式显示**

3. **修改页面导航栏样式，增加鼠标经过动画和点击切换动画 **



****

##  1.1.2

（2023/02/19）

1. **修改网页布局单位，改为rem适配单位。使其在网页宽度大小改变时候，页面整体不变。**

   ```js
   // 引入amfe-flexible
   import 'amfe-flexible'
   
   ```

   ```js
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import postCssPxToRem from "postcss-pxtorem"
   
   export default defineConfig({
     plugins: [vue()],
     server:{
       host:"0.0.0.0"
     },
     build:{
       chunkSizeWarningLimit:1500,
     },
     css: {
       postcss: {
         plugins: [
           postCssPxToRem({
             rootValue: 144, // 1rem的大小
             propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
           })
         ]
       }
     },
   })
   
   ```

2. **但在一些小部件上有问题，显示上定位略有偏移，显示上有问题。**



****





## 1.1.1

（2023/02/15）

1. **修改反向代理，修改宝塔内的 Nginx 配置，实现在这个服务器内开放另一个端口响应后端请求，一个端口是默认的前端界面。添加代码如下**

   ``` nginx
   location /api {
       proxy_pass http://localhost:8000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   }
   
   ```





****



##  1.1.0

(2023/02/15)

1. **添加后端，并通过后端读取md文档发送到前端的方式在vue页面中渲染md文件**

   ```js
   // 发送路由
   
   router.get('/markdown', (req, res) => {
   	fs.readFile('md/about/update_log.md', (err, data) => {
   		if (err) {
   			console.error(err);
   			res.status(500).send('Server error');
   		} else {
   			res.set('Content-Type', 'text/markdown');
   			res.send(data);
   		}
   	});
   });
   ```

   

2. **使用的是`v-md-editor`**

   ```html
       <div class="main">
         <v-md-preview :text="md" class="md"></v-md-preview>
       </div>
   
   ```

3. **还在入口文件中进行相关模块的导入**





****





##  1.0.2

（2023/02/02）

1. **失效，因为在该项目中使用的是宝塔作为构建工具，宝塔中使用 Nginx作为服务器，所以修改node无效**

   *增加了**connect-history-api-fallback** 插件，修复了单页面程序中的页面刷新出现白屏404错误的情况，同时也能够通过端口后面增加页面的访问。如`127.0.0.1:3000/about`*

   ```js
   // 回退路由
   const history = require('connect-history-api-fallback');
   
   const express = require('express')
   const app = express()
   
   app.use(history(
   ))
   
   ```

2. **修改导航栏文字样式**

3. **修复 在网页中刷新界面就会 出现白屏的错误。**

   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

   



****






##  1.0.1

（2023/02/01-02）

1. 移除了最先制作网页中添加的视频，使网页的样式统一，也去除了网页在加在视频时候的黑屏的现象。（而且视频非自己制作）

2. 增加了 About 页面中的一个文字内容，并打算将更新内容发布到 about 页面。
3. 增加首页图标联系方式，实现点击弹出的简单效果（进一步修改，添加好看一点的UI，增加小红书的二维码）
4. 在网页修改中因为你文件上传到服务器错误，然后重新安装宝塔并重置文件恢复访问。（02）
5. 公安备案成功备案成功，增加了页面底部的ICP和公安备案号（02）







****





##  1.0.0

（2023/01/31）

1. 完成基础网页的制作
2. 网站的发布于2023年2月1日，在几天前已近完成了服务器、域名的购买，在中间的这几天时间里面，一方面在进行网站域名的备案，一方面我也开始着手 写网页的前端界面。
3. 网页使用`vue+vite`的形式进行编写，由于对页面的设计并没有做过详细的规划，所以在页面中主要参考了 [Mr.Long's Blog](https://longlongyu.github.io/archives/)这个界面， 在编写中，一边写代码一边想页面的设计。
4. 目前为止，网页的界面就只是几个简单的展示界面，**没有实现 小红书文章代码的下载， 文章列表和文章内容的跳转实现，以及日志内容的添加及其储存,手机以及其他设备的适配** 部分功能需要通过后端实现，因为学过一些node 和 Java 这些后端语言，所以后面我会进行改进。
   逐步实现功能的完善。



