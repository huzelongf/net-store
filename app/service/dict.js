/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictService extends app.Service {

        async request(url, token, opts) {
            opts = Object.assign({
                timeout: [ '30s', '30s' ],
                method: 'GET',
                dataType: 'json',
                contentType: 'json',
                headers: { Authorization: `Bearer ${token}`}
            }, opts);
            return await this.ctx.curl(`${url}`, opts);
        }

        async get_dict_array(token) {
            const  url = this.app.config.api.get_api_dict_type();
            const result = await this.request(url, token, {});
            this.checkSuccess(result);
            return result;
        }

        async get_dict_edit(token, id) {
            const  url = this.app.config.api.get_api_dict_type_single(id);
            const result = await this.request(url, token, {});
            this.checkSuccess(result);
            return result;
        }


        async save(token, params) {
            const  url = this.app.config.api.post_api_baseType();
            const opt = {data: params, method: 'POST'};
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

    return DictService;
}