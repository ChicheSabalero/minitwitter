const getDb = require('../../db/getDb');

const insertDislikeModel = async (tweetId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [dislikes] = await connection.query(
            `SELECT id FROM dislikes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );

        if (dislikes.length > 0) {
            throw new Error('Dislike already exists');
        }

        await connection.query(
            `DELETE FROM likes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );

        await connection.query(
            `INSERT INTO dislikes (tweetId, userId) VALUES (?, ?)`,
            [tweetId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertDislikeModel;
