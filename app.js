const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const usuarioRoutes = require('./routes/usuarioRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/usuarios', usuarioRoutes);


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
