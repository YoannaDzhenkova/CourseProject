import { useEffect, useRef } from "react";
import requester from "../utils/requester"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef();

    const login = async (email, password) => {
        const result = await requester.post(`${baseUrl}/login`, { email, password }, {signal: abortRef.current.signal})
    
        return result;
    }

    useEffect(() => {
        const abortController = new AbortController();
        abortRef.current = abortController;
        return () => abortController.abort();
    }, []);

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) => 
        requester.post(`${baseUrl}/register`, { email, password});
    
    return {
        register,
    }
}