import requester from "../utils/requester";

const baseUrl = `http://localhost:3030/jsonstore/reviews`;

export default {
    async getAll(serviceId) {
        const reviews = await requester.get(baseUrl);
        
        const serviceReview = Object.values(reviews).filter(review => review.serviceId === serviceId);

        return serviceReview;
    },
    
    create(email, serviceId, review) {
        const data = {email, serviceId, review};
       return requester.post(baseUrl, data);
    }
}