import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { listTweetService } from '../services/tweetService';

export const useTweets = () => {

    const [tweets, setTweets] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                setLoading(true);
                const body = await listTweetService(searchParams);

                setTweets(body.data.tweets);
                console.log("setLoadingtrue", body.data.tweets);
            } catch (err) {
                alert(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTweets();
    }, [searchParams]);

    const likeTweetById = (tweetId) => {
        const newTweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                const likedByMe = !tweet.likedByMe;

                const likes = likedByMe ? tweet.likes + 1 : tweet.likes - 1;

                return {
                    ...tweet,
                    likedByMe,
                    likes,
                };
            }

            return tweet;
        });

        setTweets(newTweets);
    };

    const dislikeTweetById = (tweetId) => {
        const newTweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                const dislikedByMe = !tweet.dislikedByMe;

                const dislikes = dislikedByMe ? tweet.dislikes + 1 : tweet.dislikes - 1;

                return {
                    ...tweet,
                    dislikedByMe,
                    dislikes,
                };
            }

            return tweet;
        });

        setTweets(newTweets);
    };

    const deleteTweetById = (tweetId) => {
        const newTweets = tweets.filter((tweet) => tweet.id !== tweetId);

        setTweets(newTweets);
    };

    return {
        tweets,
        setSearchParams,
        likeTweetById,
        dislikeTweetById,
        deleteTweetById,
        loading,
    };
};
