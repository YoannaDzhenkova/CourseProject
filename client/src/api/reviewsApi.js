import requester from "../utils/requester";

const baseUrl = `http://localhost:3030/jsonstore/reviews`;

export default {
    
    create(email, serviceId, review) {
        const data = {email, serviceId, review};
       return requester.post(baseUrl, data);
    }
}