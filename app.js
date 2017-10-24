/**
 * Created by root on 17-9-5.
 */
module.exports = app => {
    // 在中间件最前面统计请求时间
    //app.config.coreMiddleware.unshift('report');

    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const  ms = new Date() - start;
        const url = `${ctx.url}`;
        if (url.search('/public') == -1) {
            console.log(`--------${ctx.method}--------${ctx.url} --------- ${ms}ms`);
        }
    });
};