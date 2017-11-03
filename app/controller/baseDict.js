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
                /*tab: { type: 'string',   required: true },*/
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

        }

        async edit() {
            const id = this.ctx.query.id;
            const obj = await this.baseDict.edit(id);
            const result = await this.baseType.array({});
            const opts = Object.assign(result, obj);
            await this.ctx.render('/baseDict/edit.html', opts);
        }

        async save() {

        }

    }


    return BaseDictController;
}