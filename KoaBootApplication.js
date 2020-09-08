/**
 * Greated By xuanhei on 2020/9/4
 **/
// app.js为主入口文件
require("babel-register");
require("babel-polyfill");
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const Init = require('./lib/Init');
new Init(app).getRouters(app);
//初始化层次

app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');