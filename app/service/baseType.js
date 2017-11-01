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
            const  url = this.api.get_baseType_Array();
            const opt = {data: params};
            const result = await this.helper.request(this.ctx, url, token, opt);
            this.helper.checkSuccess(result);
            return result;
        }


    }


    return BaseTypeService;
}