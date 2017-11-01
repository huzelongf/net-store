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


    }

    return BaseTypeController;
}