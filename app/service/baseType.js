/**
 * Created by root on 17-10-31.
 */

module.exports = app => {
    class BaseTypeService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.myToken = this.ctx.session.globalToken;
            this.req = this.ctx.helper.request;
            this.reqSave = this.ctx.helper.requestSave;
        }


        async array(params) {
            const  url = this.api.baseType_Array();
            const opt = {data: params};
            const data = await this.req(this.ctx, url, this.myToken, opt);
            const result = {data: data};
            return result;
        }

        async list(params) {

            const  url = this.api.baseType_list();
            const opt = {data: params};
            return await this.req(this.ctx, url, this.myToken, opt);
        }

        async edit(id) {
            const  url = this.api.baseType_edit(id);
            return await this.req(this.ctx, url, this.myToken, {});
        }

        async save(params) {
            const  url = this.api.baseType_sava();
            const opt = {data: params, method: 'POST'};
            return  await this.reqSave(this.ctx, url, this.myToken, opt);
        }

    }


    return BaseTypeService;
}