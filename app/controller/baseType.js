/**
 * Created by root on 17-10-31.
 */

module.exports = app => {
    class BaseTypeController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                code: {type: 'string'},
                name: {type: 'string'}
                /*tab: { type: 'string',   required: true },*/
            };
        }


        async array() {
            const token = this.ctx.session.globalToken;
            const  params = {};
            const result = await this.service.baseType.array(token, params);
            this.ctx.body = result.data;
            this.ctx.status = result.status;
        }

        async list() {
            const token = this.ctx.session.globalToken;
            const  params = this.ctx.query;
            const result = await this.service.baseType.list(token, params);
            this.ctx.body = result.data;
            this.ctx.status = result.status;
        }

        async create() {
            await  this.ctx.render('/baseType/edit.html', {id:-1});
        }

        async edit() {
            const token = this.ctx.session.globalToken;
            const id = this.ctx.query.id;
            const result = await this.service.baseType.edit(token, id);
            await  this.ctx.render('/baseType/edit.html', result.data);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const token = this.ctx.session.globalToken;
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            const result = await this.service.baseType.save(token, params);
            ctx.body = { code:result.status, msg:'success' }
        }
    }

    return BaseTypeController;
}