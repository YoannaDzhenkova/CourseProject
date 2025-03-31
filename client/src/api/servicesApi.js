import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/services';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const services = Object.values(result);

        return services;
    },

    getOne(serviceId) {
        return request.get(`${baseUrl}/${serviceId}`);
    },

    create(data) {
        return request.post(baseUrl,data);
    },

    edit(serviceId, serviceData) {
        return request.put(`${baseUrl}/${serviceId}`,{...serviceData, _id: serviceId});
    },

    
    delete(serviceId) {
        return request.delete(`${baseUrl}/${serviceId}`);
    }

}