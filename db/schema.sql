DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    devoured BOOLEAN
    );