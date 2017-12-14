/**
 * Created by root on 17-12-8.
 */

module.exports = app => {
    class UserDepartmentService extends app.Service {

        constructor(ctx) {
            super(ctx);
            this.api = this.app.config.api;
            this.myToken = this.ctx.session.globalToken;
            this.req = this.ctx.helper.request;
            this.reqSave = this.ctx.helper.requestSave;
        }


        async list(params) {
            const  url = this.api.userDepartment_list();
            return await this.req(this.ctx, url, this.myToken, {data: params});
        }

        async edit(id) {
            const url = this.api.userDepartment_edit(id);
            return await this.req(this.ctx, url, this.myToken, {});
        }

        async save(params) {
            const  url = this.api.userDepartment_save();
            return await this.reqSave(this.ctx, url, this.myToken, {data: params});
        }

        async update(params) {
            const  url = this.api.userDepartment_update();
            return await this.reqSave(this.ctx, url, this.myToken, {data: params});
        }
    }


    return UserDepartmentService;
}