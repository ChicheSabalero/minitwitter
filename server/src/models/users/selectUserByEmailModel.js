const getDb = require('../../db/getDb')
const { invalidCredentialsError } = require('../../services/errorService')

const selectUserByEmailModel = async (email) => {
    let connection = await getDb()


    try {
        const [users] = await connection.query(
            `SELECT id, password, role FROM users WHERE email = ?`,
            [email]
        )
        if (users.length < 1) {
            invalidCredentialsError()
        }

        return users[0]

    } finally {
        if (connection) connection.release()
    }
}

module.exports = selectUserByEmailModel