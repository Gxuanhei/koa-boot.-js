
/**
 * Greated By xuanhei on 2020/9/6
 **/

const IndexMapper = require("../Mapper/IndexMapper")
const {Init,Autowired} = require("../Annotation/InitAnnontion")
const {Service} = require("../Annotation/ServiceAnnontion")
const {autobind} = require("core-decorators")
@Service
// @Init //增加这个注解给方法修改
class IndexService{

    // @Autowired("../Mapper/IndexMapper")
    indexMapper = new IndexMapper();

    addTest(data){
        console.log(this.indexMapper)
        return this.indexMapper.addTest(data);
    }
    /**
     *  查询数据
     */
    selectTest(){
        return this.indexMapper.selectTest();
    }
}

module.exports = IndexService;