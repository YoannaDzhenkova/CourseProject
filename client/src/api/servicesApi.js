import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/services';

export default {
    create(data) {
        return request.post(baseUrl,data);
    },
}