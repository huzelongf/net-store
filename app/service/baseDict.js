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
            const  url = this.api.baseDict_list();
            const opt = {data: params};
            return await this.helper.request(this.ctx, url, token, opt);
        }

        async edit(token, id) {
            const url = this.api.baseType_edit(id);
            return await this.helper.request(this.ctx, url, token, {});
        }

        async save(token, params) {
            const  url = this.api.baseDict_save();
            const opt = {data: params, method: 'POST'};
            return await this.helper.request(this.ctx, url, token, opt);
        }
    }


    return BaseDictService;
}