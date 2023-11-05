const getDb = require('../../db/getDb');

const insertTweetModel = async (text, img, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [tweet] = await connection.query(
            `INSERT INTO tweets(text, image, userId) VALUES(?, ?, ?)`,
            [text, img, userId]
        )

        return tweet.insertID

    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertTweetModel;