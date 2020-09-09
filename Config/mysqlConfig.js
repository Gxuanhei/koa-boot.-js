/**
 * Greated By xuanhei on 2020/9/5
 **/
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