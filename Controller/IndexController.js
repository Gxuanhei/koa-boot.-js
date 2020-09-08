/**
 * Greated By xuanhei on 2020/9/4
 **/

const {Api,Controller,PostMapping,GetMapping,DeleteMapping,PutMapping,FilePostMapping} = require('../Annotation/HttpAnnotion');
const IndexService = require("../Service/IndexService");
const {Init,Autowired} = require("../Annotation/InitAnnontion")
const ResultCode = require('../Utils/ResultCode');
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
        return this.indexService.addTest(data);
    }

    /**
     *  删除文章
     */
    @DeleteMapping("/deleteArticle")
    deleteArticle(data){
        return ResultCode.SUCCESS({
            data:this.indexService.deleteTest(data)
        });
    }

    @PutMapping("/updateArticle")
    updateArticle(data,next){
        return ResultCode.SUCCESS({
            data:this.indexService.updateArticle(data),
            message:"删除成功"
        });
    }

    /**
     *  查询单篇文章
     */
    @GetMapping("/selectOneTest")
    selectOneTest(data,next){
        return ResultCode.SUCCESS({
            data:this.indexService.selectOneTest(data)
        });
    }

    /**
     *  查询多篇文章
     */
    @GetMapping("/selectArticle")
    selectArticle({aa = "",bb = ""},next){
        return ResultCode.SUCCESS({
            data:this.indexService.selectTest()
        });
    }

    /**
     *  上传文件
     */
    @FilePostMapping("/upFile")
    upFile(ctx,next){
        return this.indexService.upFile(ctx,next);
    }
}
