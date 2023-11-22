const cidadeControler = require('../controllers/CidadeControler')
  module.exports = (app) => {
     app.post('/cidade', cidadeControler.criarCidade);
     app.put('/cidade/:id', cidadeControler.atualizarCidade);
     app.delete('/cidade/:id', cidadeControler.excluirCidade);
     app.get('/cidade', cidadeControler.listarCidades);
     app.get('/cidade/:id', cidadeControler.obterCidadePorId);
  }
