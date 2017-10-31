/**
 * Created by root on 17-10-31.
 */

module.exports = app => {
    class BaseTypeService extends app.Service {

        async request(url, token, opts) {
            opts = Object.assign({
                timeout: ['30s', '30s'],
                method: 'GET',
                dataType: 'json',
                contentType: 'json',
                headers: {Authorization: `Bearer ${token}`}
            }, opts);
            return await this.ctx.curl(`${url}`, opts);
        }

        async get_baseType_array(token, params) {
            const  url = this.app.config.api.get_baseType_Array();
            const opt = {data: params};
            console.log(` token: ${token},  url: ${url}`)
            const result = await this.request(url, token, opt);
            this.checkSuccess(result);
            return result;
        }


        checkSuccess(result) {
            if (result.status !== 200) {
                const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
                this.ctx.throw(result.status, errorMsg);
            }
            /*if (!result.data.success) {
             this.ctx.throw(500, 'remote response error', { data: result.data });
             }*/
        }
    }


    return BaseTypeService;
}