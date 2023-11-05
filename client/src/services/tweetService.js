import { getToken } from '../utils/getToken';
const baseURL = import.meta.env.VITE_API_URL;

export const createTweetService = async (formData) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/tweets`, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    });

    const body = await res.json();

    return body;
};

export const listTweetService = async (searchParams) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/tweets?${searchParams}`, {
        headers: token ? { Authorization: token } : {},
    });

    const body = await res.json();

    return body;
};


export const likeTweetService = async (tweetId, method) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/tweets/${tweetId}/likes`, {
        method,
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};

export const dislikeTweetService = async (tweetId, method) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/tweets/${tweetId}/dislikes`, {
        method,
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};

export const deleteTweetService = async (tweetId) => {
    const token = getToken();

    const res = await fetch(`${baseURL}/tweets/${tweetId}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    return body;
};

