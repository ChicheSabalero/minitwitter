const mysql = require('mysql2/promise')

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env

let pool;

const getDb = async () => {
    try {
        if (!pool) {
            const connection = await mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                timezone: 'Z'
            })
            await connection.query(`CREATE DATABASE IF NOT EXISTS minitwitter`)

            pool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: 'minitwitter',
                timezone: 'Z'
            })
        }
        return await pool.getConnection()
    } catch (error) {
        console.error(error)
    }
}

module.exports = getDb