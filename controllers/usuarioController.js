const mysql = require('mysql2/promise');


const usuarioController = {
    createusuario: async (req, res) => {
        const { datanascimento, senha, login, fone, documento, genero, adm, nome, endereco } = req.body;
        try {
            const [result] = await pool.query(
                'INSERT INTO usuario (datanascimento, senha, login, fone, documento, genero, adm, nome, endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [datanascimento, senha, login, fone, documento, genero, adm, nome, endereco]
            );
            res.redirect('/usuarios');
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getusuarioById: async (req, res) => {
        const usuarioId = req.params.id;
        try {
            const [rows] = await pool.query('SELECT * FROM usuario WHERE cod = ?', [usuarioId]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'usuario not found' });
            }
            res.render('usuarios/show', { usuario: rows[0] });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllusuarios: async (req, res) => {
        try {
            const [rows] = await pool.query('SELECT * FROM usuario');
            res.render('usuarios/index', { usuarios: rows });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    renderCreateForm: (req, res) => {
        res.render('usuarios/create');
    },

    renderEditForm: async (req, res) => {
        const usuarioId = req.params.id;
        try {
            const [rows] = await pool.query('SELECT * FROM usuario WHERE cod = ?', [usuarioId]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'usuario not found' });
            }
            res.render('usuarios/edit', { usuario: rows[0] });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateusuario: async (req, res) => {
        const usuarioId = req.params.id;
        const { datanascimento, senha, login, fone, documento, genero, adm, nome, endereco } = req.body;
        try {
            await pool.query(
                'UPDATE usuario SET datanascimento = ?, senha = ?, login = ?, fone = ?, documento = ?, genero = ?, adm = ?, nome = ?, endereco = ? WHERE cod = ?',
                [datanascimento, senha, login, fone, documento, genero, adm, nome, endereco, usuarioId]
            );
            res.redirect('/usuarios');
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteusuario: async (req, res) => {
        const usuarioId = req.params.id;
        try {
            await pool.query('DELETE FROM usuario WHERE cod = ?', [usuarioId]);
            res.redirect('/usuarios');
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = usuarioController;

