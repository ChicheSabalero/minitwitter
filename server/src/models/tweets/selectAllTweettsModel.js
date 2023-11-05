const getDb = require('../../db/getDb')

const selectAllTweettsModel = async (keyword = '', userId = 0) => {
    let connection

    try {
        connection = await getDb()

        const [tweets] = await connection.query(
            `
                SELECT 
                    t.id,
                    t.text,
                    t.image,
                    t.userId,
                    u.username,
                    t.userId = ? AS owner,
                    COUNT(l.id) AS likes,
                    BIT_OR(l.userId = ?) AS likedByMe,
                    COUNT(d.id) AS dislikes,
                    BIT_OR(d.userId = 1) AS dislikedByMe,
                    t.createdAt
                FROM tweets t
                INNER JOIN users u ON u.id = t.userId
                LEFT JOIN likes l ON l.tweetId = t.id
                LEFT JOIN dislikes d ON d.tweetId = t.id
                WHERE u.username LIKE ? OR t.text LIKE ?
                GROUP BY t.id;
            `,
            [userId, userId, `%${keyword}%`, `%${keyword}%`]
        );

        for (const tweet of tweets) {
            tweet.owner = Boolean(tweet.owner);
            tweet.likedByMe = Boolean(tweet.likedByMe);
            tweet.dislikedByMe = Boolean(tweet.dislikedByMe);
        }

        return tweets
    } finally {
        if (connection) connection.release()
    }
}

module.exports = selectAllTweettsModel
