/**
 * Greated By xuanhei on 2020/9/5
 **/
const {query} = require('../lib/mysql');
const MapperList = []
function Mapper(target,key) {
    console.log('注入Mapper...');
    MapperList.forEach((item,index)=>{
        target.prototype[item.key] = item.change;
    })
}

function Insert(sql) {
    return function (target,key,descriptor) {
        MapperList.push({
            key,
            change:async function (obj) {
                console.log("增加数据");
                console.log(obj);
                let sqlNum = [];
                Object.keys(obj).forEach((key,index)=>{
                    sqlNum.push(obj[key]);
                })
                return await query(sql,[...sqlNum]);
            }
        })
        // console.log(target[key])
    }
}
function Delete(sql) {
    return async function () {
        await connection.query()
    }
}
function Update(sql) {
    return async function (target,key) {
        MapperList.push({
            key,
            change:async function () {
                console.log("查询成功");
                return await query(sql,target[key]);
            }
        })
    }
}
function Select(sql) {
    return function (target,key,descriptor) {
        MapperList.push({
            key,
            change:async function () {
                console.log("查询成功");
                return await query(sql);
            }
        })
        // console.log(target[key])
    }
}

module.exports = {
    Mapper,
    Insert,
    Select
}