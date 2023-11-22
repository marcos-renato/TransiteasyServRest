const pontoControler = require('../controllers/PontoControler')
  module.exports = (app) => {
     app.post('/ponto', pontoControler.criarPonto);
     app.put('/ponto/:id', pontoControler.atualizarPonto);
     app.delete('/ponto/:id', pontoControler.excluirPonto);
     app.get('/ponto', pontoControler.listarPontos);
     app.get('/ponto/:id', pontoControler.obterPontoPorId);
  }
