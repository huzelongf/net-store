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
            this.userDepartment = this.service.userDepartment;
            this.baseType = this.service.baseType;
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
            console.log(JSON.stringify(params));
            //params.departId = 5;
            //const  params = {'departId':1};
            this.ctx.body = await this.user.list(params);
        }

        async create() {

            await  this.ctx.render('/user/edit.html', {});
        }

        async edit() {
            const  memberLevelId =  this.ctx.query.memberLevelId;
            //const data = this.userDepartment.array(memberLevelId);
            //console.log(`---------memberLevelId:${memberLevelId}-----------`);
            //console.log('---------code:' +data.code+ '-----------');
            //const id = this.ctx.query.id;
            /*const obj = await this.User.edit(id);
            const result = await this.memberLevel.array({});
            const opts = Object.assign(result, obj);*/

            const result = await this.userDepartment.array(memberLevelId);
            console.log('---------result:' + JSON.stringify(result) + '-----------');

            await  this.ctx.render('/user/edit.html', result);
        }

        async save() {
            const { ctx } = this;
            ctx.validate(this.createRule);
            const params = ctx.request.body;
            params.clientId = this.app.config.sysConfig.appKey;
            console.log('---------params:' + JSON.stringify(params) + '-----------');
            ctx.body = await this.user.save(params);
        }
    }

    return UserController;
}