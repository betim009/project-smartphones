DROP DATABASE IF EXISTS smartphones;

CREATE DATABASE smartphones;

USE smartphones;

CREATE TABLE phones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  brand VARCHAR(80) NOT NULL,
  model VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  color VARCHAR(50) NOT NULL
);