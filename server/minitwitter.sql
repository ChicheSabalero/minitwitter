DROP DATABASE IF EXISTS minitweetter;

CREATE DATABASE minitweetter;

USE minitweetter;

CREATE TABLE
    users(
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(100) UNIQUE NOT NULL,
        username VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        avatar VARCHAR(100),
        role ENUM('admin', 'normal') DEFAULT 'normal',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS tweets (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        userId INT UNSIGNED NOT NULL,
        text VARCHAR(280) NOT NULL,
        image VARCHAR(100),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(userId) REFERENCES users(id)
    );

CREATE TABLE
    IF NOT EXISTS likes (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        userId INT UNSIGNED NOT NULL,
        tweetId INT UNSIGNED NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(userId) REFERENCES users(id),
        FOREIGN KEY(tweetId) REFERENCES tweets(id)
    );