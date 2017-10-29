/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictController extends app.Controller {

        constructor(ctx) {
            super(ctx);

            this.createRule = {
                //id: { format: /\d+/, required: false },
                code: {type: 'string'},
                name: {type: 'string'}
                /*tab: { type: 'string',   required: true },*/
            };
        }

        async index() {
            const token = this.ctx.session.globalToken;
            console.log(`=============token : ${token}=============`)
            const result = await this.service.dict.get_dict_array(token);
            this.ctx.body = result.data;
            this.ctx.status = result.status;
        }
        async edit() {
            const token = this.ctx.session.globalToken;
            const id = this.ctx.query.id;
            const result = await this.service.dict.get_dict_edit(token, id);
            console.log(result.data);
            await  this.ctx.render('/dict/dict-edit.html', result.data);
        }

        async create() {
            await  this.ctx.render('/dict/dict-edit.html', {id:-1});
        }

        async save(){
            const { ctx } = this;
            ctx.validate(this.createRule);  //
            const token = this.ctx.session.globalToken;
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            const result = await this.service.dict.save(token, params);

            ctx.body = { code:result.status, msg:'success' }
        }
    }

    return DictController;
}