/**
 * Greated By xuanhei on 2020/9/5
 **/

module.exports = new class ResultCode {
    SUCCESS({code=200,message="操作成功",data={},state=true}){
        return {code,message,data,state}
    }
    ERRO({code=500,message="操作失败",state=false}){
        return {code,message,state}
    }
}