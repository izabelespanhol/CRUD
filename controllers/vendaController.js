<<<<<<< HEAD
// controllers/vendaController.js
const Venda = require('../models/vendaModel');
const Produto = require('../models/produtoModel');
const User = require('../models/userModel');

const vendaController = {
    getAllVendas: (req, res) => {
        Venda.getAll((err, vendas) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('vendas/index', { vendas });
        });
    },

    renderCreateForm: (req, res) => {
        Produto.getAll(null, (err, produtos) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            User.getAll((err, users) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                res.render('vendas/create', { produtos, users });
            });
        });
    },

    createVenda: (req, res) => {
        const newVenda = {
            user_id: req.body.user_id,
            produto_id: req.body.produto_id,
            quantidade: req.body.quantidade,  // Adicione a quantidade
            data_compra: req.body.data_compra // Adicione a data da compra
=======
//crie o conteudo deste arquivo vendaController.js com o seguinte conteudo: tabela de vendas com os campos: id, data, valor, quantidade, produto_id

const Venda = require('../models/vendaModel');

const vendaController = {
    createVenda: (req, res) => {
        const newVenda = {
            data: req.body.data,
            valor: req.body.valor,
            quantidade: req.body.quantidade,
            produto_id: req.body.produto_id,
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
        };

        Venda.create(newVenda, (err, vendaId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/vendas');
        });
    },

    getVendaById: (req, res) => {
        const vendaId = req.params.id;

        Venda.findById(vendaId, (err, venda) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!venda) {
                return res.status(404).json({ message: 'Venda not found' });
            }
            res.render('vendas/show', { venda });
        });
    },

<<<<<<< HEAD
=======
    getAllVendas: (req, res) => {
        Venda.getAll((err, vendas) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('vendas/index', { vendas });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('vendas/create');
    },

>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
    renderEditForm: (req, res) => {
        const vendaId = req.params.id;

        Venda.findById(vendaId, (err, venda) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!venda) {
                return res.status(404).json({ message: 'Venda not found' });
            }
<<<<<<< HEAD
            Produto.getAll(null, (err, produtos) => {
                if (err) {
                    return res.status(500).json({ error: err });
                }
                User.getAll((err, users) => {
                    if (err) {
                        return res.status(500).json({ error: err });
                    }
                    res.render('vendas/edit', { venda, produtos, users });
                });
            });
=======
            res.render('vendas/edit', { venda });
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
        });
    },

    updateVenda: (req, res) => {
        const vendaId = req.params.id;
        const updatedVenda = {
<<<<<<< HEAD
            user_id: req.body.user_id,
            produto_id: req.body.produto_id,
            quantidade: req.body.quantidade, // Atualize a quantidade
            data_compra: req.body.data_compra // Atualize a data da compra
        };

        Venda.update(vendaId, updatedVenda, (err) => {
=======
            data: req.body.data,
            valor: req.body.valor,
            quantidade: req.body.quantidade,
            produto_id: req.body.produto_id,
        };

        Venda.update(vendaId, updatedVenda, (err, result) => {
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/vendas');
        });
    },

    deleteVenda: (req, res) => {
        const vendaId = req.params.id;

<<<<<<< HEAD
        Venda.delete(vendaId, (err) => {
=======
        Venda.delete(vendaId, (err, result) => {
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/vendas');
        });
    }
};

<<<<<<< HEAD
module.exports = vendaController;
=======
module.exports = vendaController;
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e
