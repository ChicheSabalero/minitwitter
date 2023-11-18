const getDb = require('../../db/getDb');
const { unauthorizedUserError } = require('../../services/errorService');

const deleteTweetModel = async (tweetId, userId) => {
    let connection;
    try {
        connection = await getDb();

        const [tweets] = await connection.query(
            `SELECT userId FROM tweets WHERE id = ?`,
            [tweetId]
        );

        if (tweets[0].userId !== userId) {
            unauthorizedUserError();
        }

        await connection.query(
            `DELETE FROM likes WHERE tweetId = ?`,
            [tweetId]
        );

        await connection.query(`DELETE FROM dislikes WHERE tweetId=?`, [tweetId]);

        await connection.query(
            `DELETE FROM tweets WHERE id = ?`,
            [tweetId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteTweetModel;