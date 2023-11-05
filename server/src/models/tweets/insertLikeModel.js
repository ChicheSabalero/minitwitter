const getDb = require('../../db/getDb');

const insertLikeModel = async (tweetId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [likes] = await connection.query(
            `SELECT id FROM likes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );

        if (likes.length > 0) {
            throw new Error('Like already exists');
        }

        await connection.query(
            `DELETE FROM dislikes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );

        await connection.query(
            `INSERT INTO likes (tweetId, userId) VALUES (?, ?)`,
            [tweetId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertLikeModel;