import { createContext } from "react";

export const ReviewsContext = createContext({
    email: "",
    serviceId: "",
    review: "",
    _id: "",
    reviewCreateHandler: () => null,
})