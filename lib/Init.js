/**
 * Greated By xuanhei on 2020/9/5
 **/

/**
 *  初始化启动类
 */
class Init {
    constructor(app) {
        this.init(app);
    }
    init(app){
        this.createController();
        //开启跨域
        const cors= require('koa2-cors');
        app.use(cors());
        //使用文件传输中间件
        const koaBody = require('koa-body');
        app.use(koaBody({
            multipart:true, // 支持文件上传
            encoding:'gzip',
            formidable:{
                // uploadDir:"./FileStatic/images/", // 设置文件上传目录
                keepExtensions: true,    // 保持文件的后缀
                maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
                onFileBegin:(name,file) => { // 文件上传前的设置
                    console.log(`name: ${name}`);
                    console.log(file);
                },
            }
        }));
    }

    /**
     * 创建控制器
     */
    createController(){
        // 给Koa注入Controller层
        const file = require('fs');
        const ControllerListPath = './Controller';
        const ControllerList = file.readdirSync(ControllerListPath);
        //需要追加的内容
        // const classContent = file.readFileSync(ControllerListPath+'/'+ControllerList[0], 'utf-8');
        // const classLast = classContent.substring(classContent.indexOf('class'),classContent.length-1);
        // const className = classLast.substring(classLast.indexOf('class'), classLast.indexOf('{')).replace('class',"").replace(/\s*/g,"");
        // const lastContent = 'module.exports = new '+className+"();";
        // console.log(lastContent)
        ControllerList.forEach((item,index)=>{
            // file.appendFile('./Controller/'+item,lastContent , (error)  => {
            //     if (error) return console.log("追加文件失败" + error.message);
            //     console.log("追加成功");
            //     require('../Controller/'+item.replace('.js',''))
            // });
            require('../Controller/'+item.replace('.js',''))
        })
    }

    /**
     * 创建数据库连接
     */
    createDB(){

    }

    /**
     *  获取路由
     * @param app
     */
    getRouters(app){
        // const bodyParser = require('koa-bodyparser');
        // app.use(bodyParser());
        app.use(require('../Annotation/HttpAnnotion').Router.routes());
    }
}

module.exports = Init;
