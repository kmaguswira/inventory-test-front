import axios from 'axios';

const apiEndpoint = 'http://localhost:7011/v1/'

export const crud = {
    
    async get(model) {
        const data = await axios.get(apiEndpoint + model);
        return data.data;
    },

    async post(model, params, config) {
        const data = await axios.post(apiEndpoint + model, params, config)
    },

    async delete(model) {
        const data = await axios.delete(apiEndpoint + model);
        return data
    },

    async update(model, params, config) {
        const data = await axios.put(apiEndpoint + model, params, config);
    }
}