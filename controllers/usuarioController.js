const Usuario = require('../models/usuarioModel');

const usuarioController = {
    createUsuario: (req, res) => {
        const newUser = {
            datanascimento: req.body.datanascimento,
            senha: req.body.senha,
            login: req.body.login,
            fone: req.body.fone,
            documento: req.body.documento,
            genero: req.body.genero,
            nome: req.body.nome,
        };

        Usuario.create(newUser, (err, userId) => {
            if (err) {
                console.error('Erro ao criar usuário:', err);
                return res.status(500).json({ error: 'Erro ao criar usuário.' });
            }
            res.redirect('/usuarios');
        });
    },

    getUsuarioById: (req, res) => {
        const userId = req.params.id;

        Usuario.findById(userId, (err, usuario) => {
            if (err) {
                console.error('Erro ao buscar usuário:', err);
                return res.status(500).json({ error: 'Erro ao buscar usuário.' });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.render('usuarios/show', { usuario });
        });
    },

    getAllUsuarios: (req, res) => {
        Usuario.getAll((err, usuarios) => {
            if (err) {
                console.error('Erro ao listar usuários:', err);
                return res.status(500).json({ error: 'Erro ao listar usuários.' });
            }
            console.log('Usuários:', usuarios); // Para depuração
            res.render('usuarios/index', { usuarios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('usuarios/create');
    },

    renderEditForm: (req, res) => {
        const userId = req.params.id;

        Usuario.findById(userId, (err, usuario) => {
            if (err) {
                console.error('Erro ao buscar usuário para edição:', err);
                return res.status(500).json({ error: 'Erro ao buscar usuário.' });
            }
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.render('usuarios/edit', { usuario });
        });
    },

    updateUsuario: (req, res) => {
        const userId = req.params.id;
        const updatedUsuario = {
            datanascimento: req.body.datanascimento,
            senha: req.body.senha,
            login: req.body.login,
            fone: req.body.fone,
            documento: req.body.documento,
            genero: req.body.genero,
            nome: req.body.nome,
        };

        Usuario.update(userId, updatedUsuario, (err) => {
            if (err) {
                console.error('Erro ao atualizar usuário:', err);
                return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
            }
            res.redirect('/usuarios');
        });
    },

    deleteUsuario: (req, res) => {
        const userId = req.params.id;

        Usuario.delete(userId, (err) => {
            if (err) {
                console.error('Erro ao deletar usuário:', err);
                return res.status(500).json({ error: 'Erro ao deletar usuário.' });
            }
            res.redirect('/usuarios');
        });
    },
};

module.exports = usuarioController;
