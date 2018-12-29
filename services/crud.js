import axios from 'axios';

export const apiEndpoint = 'http://localhost:7011/v1/'
const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

export const crud = {
    
    async get(model, params) {
        const data = await axios.get(apiEndpoint + model, {
            params: params,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            crossdomain: true
        });
        return data.data;
    },

    async post(model, params, config) {
        const data = await axios.post(apiEndpoint + model, params, config)
        return data.data
    },

    async delete(model) {
        const data = await axios.delete(apiEndpoint + model);
        return data
    },

    async update(model, params, config) {
        const data = await axios.put(apiEndpoint + model, params, config);
    }
}