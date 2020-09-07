/**
 * Greated By xuanhei on 2020/9/6
 **/
const initList = []
function Init(target,key) {
    initList.forEach((item,index)=>{
        target.prototype[item.key] = item.change;
    })

}
// 将类实例化
function Autowired(bean) {
    return function (target,key) {
        initList.push({
            key,
            change: new bean()
        })
    }
}

module.exports = {
    Init,
    Autowired
};