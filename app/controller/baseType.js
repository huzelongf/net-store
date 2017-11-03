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
            this.baseType = this.service.baseType;
        }


        async array() {
            const  params = {};
            const result = await this.baseType.array(params);
            this.ctx.body = result;
        }

        async list() {
            const  params = this.ctx.query;
            this.ctx.body = await this.baseType.list(params);
        }

        async create() {
            await  this.ctx.render('/baseType/edit.html', {id:-1});
        }

        async edit() {
            const id = this.ctx.query.id;
            const result = await this.baseType.edit(id);
            await  this.ctx.render('/baseType/edit.html', result);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            ctx.body = await this.baseType.save(params);
        }
    }

    return BaseTypeController;
}