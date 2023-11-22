
const SequenceRouter = require('./sequenceRouter');
const PaisRouter = require('./paisRouter');
const EstadoRouter = require('./estadoRouter');
const CidadeRouter =require('./cidadeRouter');
//const PontoRouter =require('./pontoRouter');
const UsuarioRouter =require('./usuarioRouter');
const express = require('express');
const bodyParser = require('body-parser');
const tipoVeiculoRouter = require('./tipoVeiculoRouter');
const coresRouter =require('./coresRouter');
const veiculoRouter = require('./veiculoRouter.js');
const app = express();

app.use(bodyParser.json()); // Middleware para analisar o corpo das solicitações em formato JSON

// Outras configurações e rotas da sua aplicação



module.exports = (app) => {
    SequenceRouter(app);
    PaisRouter(app);
    EstadoRouter(app);
    CidadeRouter(app);
    //PontoRouter(app);
    UsuarioRouter(app);
    tipoVeiculoRouter(app);
    coresRouter(app);
    veiculoRouter(app);
};
