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
        }

        async index() {

        }

        async list() {

        }

        async create() {

        }

        async edit() {

        }

        async save() {

        }

    }


    return BaseDictController;
}