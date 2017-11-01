/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.helper = this.ctx.helper;
        }

        async get_dict_array(token, params) {
            const  url = this.api.get_api_dict_type();
            const opt = {data: params};
            const result = await this.helper.request(this.ctx, url, token, opt);
            this.helper.checkSuccess(result);
            return result;
        }



        async get_dict_edit(token, id) {
            const  url = this.api.get_api_dict_type_single(id);
            const result = await this.helper.request(this.ctx, url, token, {});
            this.helper.checkSuccess(result);
            return result;
        }


        async save(token, params) {
            const  url = this.api.post_api_baseType();
            const opt = {data: params, method: 'POST'};
            const result = await this.helper.request(this.ctx, url, token, opt);
            this.helper.checkSuccess(result);
            return result;
        }


    }

    return DictService;
}