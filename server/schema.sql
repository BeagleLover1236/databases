DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  /* Describe your table here.*/
  ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  message varchar(200) NOT NULL,
  roomname varchar(20),
  userID int NOT NULL
);

CREATE TABLE users (
  ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(30) NOT NULL
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

