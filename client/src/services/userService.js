const baseURL = import.meta.env.VITE_API_URL

import { getToken } from "../utils/getToken";

export const signUpService = async (username, email, password) => {
    const res = await fetch(`${baseURL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        })
    })

    const body = await res.json()

    return body
}

export const signInService = async (email, password) => {
    const res = await fetch(`${baseURL}/users/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const body = await res.json();

    return body;
};


export const getPrivateProfileService = async () => {
    const token = getToken()

    const res = await fetch(`${baseURL}/users`, {
        headers: {
            'Authorization': token,
        },
    })

    const body = await res.json()

    return body
}

