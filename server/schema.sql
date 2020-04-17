DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


/* Create tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room_name varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  txt varchar(255),
  roomid INT,
  userid INT,
  PRIMARY KEY(id),
  FOREIGN KEY (roomid) REFERENCES rooms(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

