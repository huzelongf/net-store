/**
 * Created by root on 17-12-8.
 */

module.exports = app => {
    class UserDepartmentController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                departcode: {type: 'string'},
                departname: {type: 'string'}
                /*tab: { type: 'string',   required: true },*/
            };
            this.userDepartment = this.service.userDepartment;
            this.memberLevel = this.service.memberLevel;
        }


        async index() {
            const result = await this.memberLevel.array({});
            await  this.ctx.render('/userDepartment/index.html', result);
        }

        async list() {
            const  params = this.ctx.query;
            this.ctx.body = await this.userDepartment.list(params);
        }

        async create() {
            const result = await this.memberLevel.array({});
            await  this.ctx.render('/userDepartment/edit.html', result);
        }

        async edit() {
            const id = this.ctx.query.id;
            const obj = await this.userDepartment.edit(id);
            const result = await this.memberLevel.array({});
            const opts = Object.assign(result, obj);
            await  this.ctx.render('/userDepartment/edit.html', opts);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            ctx.body = await this.userDepartment.save(params);
        }

        async updateStatus() {
            const {ctx} = this;
            const params = ctx.request.body;
            console.log(params);
            await this.userDepartment.update(params);
            ctx.body = {code:200};
        }
    }

    return UserDepartmentController;
}