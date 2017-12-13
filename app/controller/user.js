/**
 * Created by root on 17-12-9.
 */
/**
 * Created by root on 17-12-8.
 */

module.exports = app => {
    class UserController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                username: {type: 'string'},
                mobile: {type: 'string'}
                /*tab: { type: 'string',   required: true },*/
            };
            this.user = this.service.user;
            //this.memberLevel = this.service.memberLevel;
        }


        async treeJson() {
            const  params = {};
            const result = await this.user.treeJson(params);
            this.ctx.body = result;
        }


        async index() {
            //const result = await this.memberLevel.array({});
            await  this.ctx.render('/user/index.html', {});
        }

        async list() {
            const  params = this.ctx.query;
            this.ctx.body = await this.user.list(params);
        }

        async create() {
            //const result = await this.memberLevel.array({});
            await  this.ctx.render('/user/edit.html', {});
        }

        async edit() {
            const id = this.ctx.query.id;
            /*const obj = await this.User.edit(id);
            const result = await this.memberLevel.array({});
            const opts = Object.assign(result, obj);*/
            await  this.ctx.render('/user/edit.html', {});
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            ctx.body = await this.user.save(params);
        }
    }

    return UserController;
}