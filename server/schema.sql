DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/* users table */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  PRIMARY KEY(id)
)

/* rooms table */
CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(25) NOT NULL,
  PRIMARY KEY(id)
)

/* messages table */
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  userid FOREIGN KEY ('id') REFERENCES `users` (`id`),
  txt varchar(100) NOT NULL,
  roomid FOREIGN KEY ('id') REFERENCES `rooms` (`id`),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

