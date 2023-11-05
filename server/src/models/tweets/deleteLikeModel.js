const getDb = require('../../db/getDb')
const { notFoundError } = require('../../services/errorService')

const deleteLikeModel = async (tweetId, userId) => {
    let connection

    try {
        connection = await getDb()

        const [likes] = await connection.query(
            `SELECT id FROM likes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        )

        if (likes.length < 1) {
            notFoundError('like')
        }

        await connection.query(
            `DELETE FROM likes WHERE tweetId = ? AND userId = ?`,
            [tweetId, userId]
        )

    } finally {
        if (connection) connection.release()
    }
}

module.exports = deleteLikeModel