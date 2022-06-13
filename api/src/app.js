// Importação das dependências
const express = require('express');
const cors = require('cors');

// Criação das instâncias dos componentes
const app = express();
const router = express.Router();

// Criação da rota
router.get('/welcome', (req, res) => {
    res.json({ message: 'Aplicação - DevOps Mercurianos - Cássio Gamarra! Pona says: Chora não 😢' });
});

// Habilitando as funções que serão executadas entre as requisições e respostas (middlewares)
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use('/api', router);

// Exportando a configuração da nossa aplicação
module.exports = app;
