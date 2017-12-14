/**
 * Created by root on 17-12-8.
 */

module.exports = app => {
    class MemberLevelController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                memberLevel: {type: 'string'},
                memberLevelMsg: {type: 'string'}
                /*tab: { type: 'string',   required: true },*/
            };
            this.updateRule = {
                id: {type: 'string', required: true},
                status: {type: 'string', required: true}
            };
            this.memberLevel = this.service.memberLevel;
        }


        async index() {
            await  this.ctx.render('/memberLevel/index.html', {});
        }

        async list() {
            const  params = this.ctx.query;
            this.ctx.body = await this.memberLevel.list(params);
        }

        async create() {
            await  this.ctx.render('/memberLevel/edit.html', {id:-1});
        }

        async edit() {
            const id = this.ctx.query.id;
            const result = await this.memberLevel.edit(id);
            await  this.ctx.render('/memberLevel/edit.html', result);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            ctx.body = await this.memberLevel.save(params);
        }

        async update() {
            const { ctx } = this;
            ctx.validate(this.updateRule);
            const params = ctx.request.body;
            ctx.body = await this.memberLevel.save(params);
        }


    }

    return MemberLevelController;
}