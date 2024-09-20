const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
<<<<<<< HEAD
const vendaRoutes = require('./routes/vendaRoutes')
=======
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/produtos', produtoRoutes);
app.use('/categorias', categoriaRoutes);
<<<<<<< HEAD
app.use('/vendas', vendaRoutes)
=======
>>>>>>> ac6feb9f59f00c7c5534c262523e8ff2b7c2273e

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
