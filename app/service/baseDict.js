/**
 * Created by root on 17-11-1.
 */

module.exports = app => {
    class BaseDictService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.helper = this.ctx.helper;
            this.myToken = this.ctx.session.globalToken;
            this.req = this.ctx.helper.request;
        }


        async list(params) {
            const  url = this.api.baseDict_list();
            const opt = {data: params};
            return await this.req(this.ctx, url, this.myToken, opt);
        }

        async edit(id) {
            const url = this.api.baseDict_edit(id);
            return await this.req(this.ctx, url, this.myToken, {});
        }

        async save(params) {
            const  url = this.api.baseDict_save();
            const opt = {data: params, method: 'POST'};
            return await this.req(this.ctx, url, this.myToken, opt);
        }
    }


    return BaseDictService;
}