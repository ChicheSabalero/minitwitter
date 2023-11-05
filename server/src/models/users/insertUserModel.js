const bcrypt = require('bcrypt');

const getDb = require('../../db/getDb');

const {
    emailAlreadyRegisteredError,
    userAlreadyRegisteredError,
} = require('../../services/errorService');

const insertUserModel = async (username, email, password) => {
    let connection;

    try {
        connection = await getDb();

        let [users] = await connection.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );

        if (users.length > 0) {
            emailAlreadyRegisteredError();
        }

        [users] = await connection.query(
            `SELECT id FROM users WHERE username = ?`,
            [username]
        );

        if (users.length > 0) {
            userAlreadyRegisteredError();
        }

        const hashedPass = await bcrypt.hash(password, 10);

        await connection.query(
            `INSERT INTO users(username, email, password) VALUES(?, ?, ?)`,
            [username, email, hashedPass]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertUserModel;

