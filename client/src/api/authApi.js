import { useContext, useEffect } from "react";
import requester from "../utils/requester"
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) => {
        try {
            const result = await requester.post(`${baseUrl}/login`, { email, password })
            return result;
        } catch (error) {
            alert('Login failed! Please try again or check your details!')
            return;
        }

    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) =>
        requester.post(`${baseUrl}/register`, { email, password });

    return {
        register,
    }
}

export const useLogout = () => {
    const { accessToken, userLoginHandler } = useContext(UserContext);

    useEffect(() => {
        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        requester.get(`${baseUrl}/logout`, null, options)
            .then(() => {
                userLoginHandler({});
            })
    }, [accessToken])


    return {
        isLoggedOut: !!accessToken,
    }
}