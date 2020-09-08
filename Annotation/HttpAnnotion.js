/**
 * Greated By xuanhei on 2020/9/5
 **/

/**
 * 注入注解
 * @type {*|module:koa-router|Router|undefined}
 */
let ApiAddress = "";

function Api(url = "") {
    ApiAddress = url;
    return function () {
        console.log('注入Api头部信息...');
    }
}

const Router = require('koa-router')();

function Controller(target) {
    console.log('注入控制器...');
    return class extends target {
        Router = Router;
    }
}

function GetMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.get(ApiAddress+url,  async (ctx, next) => {
            //写入body
            const data = target[key](ctx.request.query || ctx.query, next);
            console.log(data)
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}
function PostMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.post(ApiAddress+url, async (ctx, next) => {
            //写入body
            console.log(ctx.request.body)
            const data = await target[key](ctx.request.body, next)();
            console.log(data)
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}
function DeleteMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.delete(ApiAddress+url,  async (ctx, next) => {
            //写入body
            const data = target[key](ctx.request.query || ctx.query, next);
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}
function PutMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.put(ApiAddress+url, async (ctx, next) => {
            //写入body
            console.log(ctx.request.body)
            const data = target[key](ctx.request.body, next);
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}

function FilePostMapping(url){
    console.log('注入路由接口...');
    return function (target,key) {
        Router.post(ApiAddress+url, async (ctx, next) => {
            //写入body
            console.log(ctx.request.files)
            const data = await target[key](ctx, next)();
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}




module.exports = {
    Api,
    Controller,
    GetMapping,
    PostMapping,
    DeleteMapping,
    PutMapping,
    FilePostMapping,
    Router
}