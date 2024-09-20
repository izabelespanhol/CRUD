CREATE DATABASE CRUD;

USE CRUD;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

<<<<<<< HEAD
=======
//crie a tabela produtos com os campos id, nome, descricao e preco
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    categoria INT NOT NULL,
    FOREIGN KEY (categoria) REFERENCES categorias(id)
);
<<<<<<< HEAD

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    data_compra DATETIME NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
=======
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
