/**
 * Created by root on 17-11-1.
 */

module.exports = {

    //创建请求对像
    async request(ctx, url, token, opts) {
        opts = Object.assign({
            timeout: ['30s', '30s'],
            method: 'GET',
            dataType: 'json',
            contentType: 'json',
            headers: {Authorization: `Bearer ${token}`}
        }, opts);
        const result = await ctx.curl(`${url}`, opts);
        ctx.helper.checkSuccess(result);
        return result;
    },

    //请求结果检查
    checkSuccess(result) {
        if (result.status !== 200) {
            const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
            this.ctx.throw(result.status, errorMsg);
        }
        /*if (!result.data.success) {
         this.ctx.throw(500, 'remote response error', { data: result.data });
         }*/
    }
};