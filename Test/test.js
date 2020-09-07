/**
 * Greated By xuanhei on 2020/9/5
 **/

    //需要追加的内容
const lastContent = '\nmodule.exports = new ';
// 给Koa注入Controller层
const file = require('fs');
const ControllerListPath = './kk';
const ControllerList = file.readdirSync(ControllerListPath);


// ControllerList.forEach((item,index)=>{
//     file.appendFile('./kk/'+item,lastContent, (error)  => {
//         if (error) return console.log("追加文件失败" + error.message);
//         console.log("追加成功");
//     });
// })