const getDb = require("../db/getDb")
const { notFoundError } = require("../services/errorService")

const tweetExistsController = async (req, res, next) => {
    let connection

    try {
        connection = await getDb()

        const { tweetId } = req.params

        const [tweet] = await connection.query(
            `SELECT id FROM tweets WHERE id = ?`,
            [tweetId]
        )

        if (tweet.length < 1) {
            notFoundError('tweet')
        }
        next()
    }
    catch (error) {
        next(error)

    }
    finally {
        if (connection) connection.release()
    }

}

module.exports = tweetExistsController