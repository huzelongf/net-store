/**
 * Created by root on 17-10-31.
 */

module.exports = app => {
    class BaseTypeService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.helper = this.ctx.helper;
        }


        async array(token, params) {
            const  url = this.api.baseType_Array();
            const opt = {data: params};
            const result = await this.helper.request(this.ctx, url, token, opt);
            this.helper.checkSuccess(result);
            return result;
        }

        async list(token, params) {
             const  url = this.api.baseType_list();
             const opt = {data: params};
             const result = await this.helper.request(this.ctx, url, token, opt);
             this.helper.checkSuccess(result);
             return result;
        }

        async edit(token, id) {
             const  url = this.api.baseType_edit(id);
             const result = await this.helper.request(this.ctx, url, token, {});
             this.helper.checkSuccess(result);
             return result;
        }

        async save(token, params) {
             const  url = this.api.baseType_sava();
             const opt = {data: params, method: 'POST'};
             const result = await this.helper.request(this.ctx, url, token, opt);
             this.helper.checkSuccess(result);
             return result;
        }

    }


    return BaseTypeService;
}