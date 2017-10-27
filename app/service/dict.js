/**
 * Created by root on 17-10-24.
 */
module.exports = app => {
    class DictService extends app.Service {
        async get_dict_array(token) {
            const  url = this.app.config.api.get_api_dict_type();
            const result = await this.app.curl(`${url}`, {
                method: 'GET',
                dataType: 'json',
                headers: { Authorization: `Bearer ${token}`}
            });
            return result;
        }

        async get_dict_edit(token, id) {
            const  url = this.app.config.api.get_api_dict_type_single(id);
            const result = await this.app.curl(`${url}`, {
                method: 'GET',
                dataType: 'json',
                headers: { Authorization: `Bearer ${token}`}
            });
            return result;
        }

        async update_baseType(token, params) {
            const  url = this.app.config.api.put_api_baseType();
            const result = await this.app.curl(`${url}`, {
                method: 'PUT',
                dataType: 'json',
                contentType: 'json',
                data: params,
                headers: { Authorization: `Bearer ${token}`}
            });
            return result;
        }

        async create_baseType(token, params) {
            const  url = this.app.config.api.post_api_baseType();
            const result = await this.app.curl(`${url}`, {
                method: 'POST',
                dataType: 'json',
                contentType: 'json',
                data: params,
                headers: { Authorization: `Bearer ${token}`}
            });
            return result;
        }
    }

    return DictService;
}