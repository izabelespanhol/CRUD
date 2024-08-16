const db = require('../config/db');

const usuario = {
    create: (usuario, callback) => {
        const query = 'INSERT INTO usuario (datanascimento, senha, login, fone, documento, genero, adm, nome, endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [usuario.datanascimento, usuario.senha, usuario.login, usuario.fone, usuario.documento, usuario.genero, usuario.adm, usuario.nome, usuario.endereco], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM usuario WHERE cod = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByLogin: (login, callback) => {
        const query = 'SELECT * FROM usuario WHERE login = ?';
        db.query(query, [login], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, usuario, callback) => {
        const query = 'UPDATE usuario SET datanascimento = ?, senha = ?, login = ?, fone = ?, documento = ?, genero = ?, adm = ?, nome = ?, endereco = ? WHERE cod = ?';
        db.query(query, [usuario.datanascimento, usuario.senha, usuario.login, usuario.fone, usuario.documento, usuario.genero, usuario.adm, usuario.nome, usuario.endereco, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usuario WHERE cod = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usuario';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = usuario;
