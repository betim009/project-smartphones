DROP DATABASE IF EXISTS smartphones;

CREATE DATABASE smartphones;

USE smartphones;

CREATE TABLE
  phones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    brand VARCHAR(80) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    color VARCHAR(50) NOT NULL,
    img LONGTEXT NOT NULL
  );

CREATE TABLE
  sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone_id INT NOT NULL,
    sale_date DATE NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (phone_id) REFERENCES phones (id)
  );