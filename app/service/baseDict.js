/**
 * Created by root on 17-11-1.
 */

module.exports = app => {
    class BaseDictService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.helper = this.ctx.helper;
        }


        async list(token, params) {

        }

        async edit(token, id) {
           /* const  url = this.api.baseTypeById(id);
            const result = await this.helper.request(this.ctx, url, token, {});
            this.helper.checkSuccess(result);
            return result;*/
        }

        async save(token, params) {
           /* const  url = this.api.baseType();
            const opt = {data: params, method: 'POST'};
            const result = await this.helper.request(this.ctx, url, token, opt);
            this.helper.checkSuccess(result);
            return result;*/
        }


    }


    return BaseDictService;
}