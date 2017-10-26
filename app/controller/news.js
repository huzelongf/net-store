/**
 * Created by root on 17-10-26.
 */
'use strict';

module.exports = app => {
    class NewsController extends app.Controller {
        constructor(ctx) {
            super(ctx);

            this.createRule = {
                token: 'string',
                title: 'string',
                /*tab: { type: 'string',   required: true },*/
            };
        }

        async index()  {
            console.log('news index');

        }

        async create() {
            const { ctx } = this;
            ctx.validate(this.createRule);  //
            console.log(ctx.request.body);

        }

    }

    return NewsController;
}