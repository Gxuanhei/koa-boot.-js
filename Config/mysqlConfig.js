/**
 * Greated By xuanhei on 2020/9/5
 **/
// const mysql = require('mysql'); // 加载数据库模块
//
// function createConnection() {
//     let connection = {};
//     connection = mysql.createConnection({ // 2. 连接 mysql 数据库
//
//     });
//     connection.connect((err)=>{
//         if(err) throw err;
//         console.log("连接成功")
//     })
//     return connection;
//
// }
// module.exports = createConnection()

// 数据库配置
const config = {
    port: 3000, // koa运行端口
    database: {
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "koadb", // 数据库名
    },
};

module.exports = config;