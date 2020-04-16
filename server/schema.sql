DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


/* Create tables and define schemas for them here! */

CREATE TABLE userNames (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE roomNames (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  txt varchar(255),
  roomid INT,
  userid INT,
  createdAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (roomid) REFERENCES roomNames(id),
  FOREIGN KEY (userid) REFERENCES userNames(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

