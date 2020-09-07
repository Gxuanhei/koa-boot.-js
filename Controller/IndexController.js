/**
 * Greated By xuanhei on 2020/9/4
 **/

const {Api,Controller,PostMapping,GetMapping} = require('../Annotation/HttpAnnotion');
const ResultCode = require('../Utils/ResultCode');
const IndexService = require("../Service/IndexService");
const {Init,Autowired} = require("../Annotation/InitAnnontion")
/**
 * 首页api
 */
@Api("/Article")
@Controller
@Init //增加这个注解给方法修改
class IndexController{
    //自动实例化
    @Autowired(IndexService)
    indexService;
    /**
     *  增加文章
     */
    @PostMapping("/addArticle")
    addArticle(data,next){
        return ResultCode.SUCCESS({
            data:this.indexService.addTest(data)
        });
    }

    /**
     *  查询文章
     */
    @GetMapping("/selectArticle")
    selectArticle({aa = "",bb = ""},next){
        // console.log(this.indexService.selectTest().then());
        return ResultCode.SUCCESS({
            data:this.indexService.selectTest()
        });
    }

}

// module.exports = new IndexController();