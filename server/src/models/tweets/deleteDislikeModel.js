const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

const deleteDislikeModel = async (tweetId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [dislikes] = await connection.query(
            `SELECT id FROM dislikes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );

        if (dislikes.length < 1) {
            notFoundError('dislike');
        }

        await connection.query(
            `DELETE FROM dislikes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteDislikeModel;
