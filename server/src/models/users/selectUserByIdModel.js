const getDb = require('../../db/getDb')
const { notFoundError } = require('../../services/errorService')

const selectUserByIdModel = async (userId) => {
    let connection = await getDb()


    try {
        const [users] = await connection.query(
            `SELECT id, username, email, avatar, role FROM users WHERE id = ?`,
            [userId]
        )

        if (userId.length < 1) {
            notFoundError('user')
        }

        return users[0]

    } finally {
        if (connection) connection.release()
    }
}

module.exports = selectUserByIdModel