/**
 * Created by root on 17-11-1.
 */

module.exports = app => {
    class BaseDictController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                code: {type: 'string'},
                name: {type: 'string'}
            };

            this.updateRule = {
                id: { type: 'string',   required: true },
                status: { type: 'string',   required: true }
            };

            this.baseDict = this.service.baseDict;
            this.baseType = this.service.baseType;
        }

        async index() {
            const result = await this.baseType.array({});
            await this.ctx.render('/baseDict/index.html', result);
        }

        async list() {
            const params = this.ctx.query;
            this.ctx.body = await this.baseDict.list(params);
        }

        async create() {
            const result = await this.baseType.array({});
            await this.ctx.render('/baseDict/edit.html', result);
        }

        async edit() {
            const id = this.ctx.query.id;
            const obj = await this.baseDict.edit(id);
            const result = await this.baseType.array({});
            const opts = Object.assign(result, obj);
            await this.ctx.render('/baseDict/edit.html', opts);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            ctx.body = await this.baseDict.save(params);
        }

        async update() {
            const { ctx } = this;
            ctx.validate(this.updateRule);
            const params = ctx.request.body;
            ctx.body = await this.baseDict.save(params);
        }

    }


    return BaseDictController;
}