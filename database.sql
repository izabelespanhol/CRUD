CREATE DATABASE CRUD;

USE CRUD;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

create table usuario (
cod int not null auto_increment,
datanascimento date,
senha varchar (10),
login varchar (25),
fone char (15),
documento char (11),
genero char (14),
adm bit,
nome varchar (50),
endereco int,
primary key (cod));
