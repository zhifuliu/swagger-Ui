# 工程介绍
1. markdown 书写工具(mac下)：MacDown
2. 采用的 文档(api)管理工具：swagger ui

---
swagger ui 使用初体验：
===
swagger ui 就是一个 html 静态工程，可以直接点击index.html 文件来运行，现在前端工具已经很多，可以使用 node 来运行工程，这样的话可以加很多自定义的东西，比如：
1. 开发一个 node 工程，里面只用权限管理，然后把 swagger ui 工程加入其中，就有了权限管理功能。
2. 由于 swagger ui 运行于你的工程中，而且是 html 静态工程，那么，样式什么的都可以自己定义。


---
swagger ui 简易安装教程：
===
1. 新建文件夹(test)做实验
`touch test`
`cd test`
2. 下载 swagger ui:
`git clone https://github.com/swagger-api/swagger-ui.git `
3. 初始化 npm
`npm init`
4. 安装 express 依赖
`npm install --save-dev express --verbose`
5. 创建 index.js
`mkdir index.js`
6. 将一下代码粘贴进 index.js 中
`var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('hello world!');
});
app.listen(9000, function() {
    console.log('example app listening on port 9000');
});`
7. 在根目录下创建 public 文件夹
`mkdir public`
8. 将下载的 swagger ui 文件夹下的 dist 目录下的所有文件拷贝到 public 目录下
9. 修改路由，将前端页面主目录指向 public/index.html ，这样 node 项目运行起来后，http://localhost:xxxx 就可以访问主页面了。方法：将一下代码粘贴进 index.js 的第三行：
`app.use(express.static('./public'));`
这个时候，整个 index.js 文件就是这样的了：
`var express = require('express');
var app = express();
app.use(express.static('./public'));
app.get('/', function(req, res) {
    res.send('hello world!');
});
app.listen(9000, function() {
    console.log('example app listening on port 9000');
});`
10. 运行 node 项目，运行一下命令：
`node index.js`
这个时候，打开浏览器，就可以看见主页面了，但是会报错（网速慢的时候，因为需要取 swagger ui 默认配置文件，地址：[默认配置文件地址](http://petstore.swagger.io/v2/swagger.json)），取不到文件
11. 修改配置，将配置文件的地址指向本地文件，并下载官方 demo
下载官方 demo 方法：打开[官方 swagger ui 在线编辑地址](http://editor.swagger.io/#/)，左上角有一个file，是一个下拉框，下来并点击 Download JSON，将会开始下载配置文件
修改默认文档地址方法：将 ./public/index.html 下的
`url = "http://petstore.swagger.io/v2/swagger.json"`
修改为：`url = "./swagger.json";`
并将下载下来的 json 文件放入 ./public 目录下。
12. 再次运行 node index.js，打开浏览器，就可以看见文档了，接下来就是优化和书写自己的文档了

---
后期优化：
===
1. 为文档工程添加用户管理。本来就是基于 node 的，所以很容易配合数据库来管理，这样的话，只有项目成员登录后可以看文档
2. 为文档工程添加权限管理。可以将项目配合成员管理和权限管理还有文档地址动态化，那么，可以实现很丰富的配置，只有注册并具有权限的人员可以看相应的文档。
3. 中文化
4. 样式定制
5. 使用前端工程思想优化工程，主要是代码修改，页面实时刷新(已完成)
