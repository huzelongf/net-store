/**
 * Created by root on 17-12-9.
 */

module.exports = app => {
    class UserService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.myToken = this.ctx.session.globalToken;
            this.req = this.ctx.helper.request;
            this.reqSave = this.ctx.helper.requestSave;
        }


        /*async array(params) {
            const  url = this.api.User_Array();
            const data = await this.req(this.ctx, url, this.myToken, {data: params});
            return {data: data};
        }*/


        async list(params) {
            const  url = this.api.user_list();
            return await this.req(this.ctx, url, this.myToken, {data: params});
        }

        async edit(id) {
            const url = this.api.user_edit(id);
            return await this.req(this.ctx, url, this.myToken, {});
        }

        async save(params) {
            const  url = this.api.user_save();
            return await this.reqSave(this.ctx, url, this.myToken, {data: params});
        }

        async treeJson(params) {
            const  url = this.api.user_treeJson();
            return await this.req(this.ctx, url, this.myToken, {data: params});
        }
    }


    return UserService;
}