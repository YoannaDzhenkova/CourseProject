import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/services';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const services = Object.values(result);

        return services;
    },
    create(data) {
        return request.post(baseUrl,data);
    },
}