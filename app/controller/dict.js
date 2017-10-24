/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictController extends app.Controller {
        async get_dict_array() {
            const token = this.ctx.session.globalToken;
            console.log(`=============token : ${token}=============`)
            const result = await this.service.dict.get_dict_array(token);
            this.ctx.body = result.data;
            this.ctx.status = result.status;
        }
    }

    return DictController;
}