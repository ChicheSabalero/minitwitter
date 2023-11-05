require('dotenv').config()

const getDb = require('./getDb')

const main = async () => {

    let connection;

    try {
        connection = await getDb()

        console.log('Borrando tablas...');

        console.log('Borrando Tabla dislikes...');
        await connection.query('DROP TABLE IF EXISTS dislikes');
        console.log('Tabla dislikes Borrada');

        console.log('Borrando Tabla likes...');
        await connection.query('DROP TABLE IF EXISTS likes');
        console.log('Tabla likes Borrada');

        console.log('Borrando Tabla tweets...');
        await connection.query('DROP TABLE IF EXISTS tweets');
        console.log('Tabla tweets Borrada');

        console.log('Borrando Tabla users...');
        await connection.query('DROP TABLE IF EXISTS users');
        console.log('Tabla users Borrada');

        console.log('Creando tablas...');

        console.log('Creando tabla users...');
        await connection.query(` 
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                avatar VARCHAR(100),
                role ENUM('admin', 'normal') DEFAULT 'normal',
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log('Tablas user creada');

        console.log('Creando tabla tweets...');
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tweets (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                userId INT UNSIGNED NOT NULL,
                text VARCHAR(280) NOT NULL,
                image VARCHAR(100),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id)
            )
        `);
        console.log('Tabla tweets creada');

        console.log('Creando tabla likes...');
        await connection.query(`
            CREATE TABLE IF NOT EXISTS likes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                userId INT UNSIGNED NOT NULL,
                tweetId INT UNSIGNED NOT NULL, 
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id),
                FOREIGN KEY(tweetId) REFERENCES tweets(id) 
            )
        `);
        console.log('Tabla likes creada');

        console.log('Creando tabla dislikes...');
        await connection.query(`
        CREATE TABLE IF NOT EXISTS dislikes (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            userId INT UNSIGNED NOT NULL,
            tweetId INT UNSIGNED NOT NULL, 
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(userId) REFERENCES users(id),
            FOREIGN KEY(tweetId) REFERENCES tweets(id)
        )
    `);
        console.log('Tabla dislikes creada');




        console.log('¡Todas las Tablas creadas!');
    } catch (error) {
        console.error(error)
    } finally {
        if (connection) connection.release()
        process.exit()
    }
}

main()