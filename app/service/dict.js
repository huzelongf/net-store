/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictService extends app.Service {
        async get_dict_array(token) {
            const  api_dict_type = this.app.config.api.get_api_dict_type();
            const result3 = await this.app.curl(`${api_dict_type}`, {
                method: 'GET',
                dataType: 'json',
                headers: { Authorization: `Bearer ${token}`}
            });
            return result3;
        }
    }

    return DictService;
}