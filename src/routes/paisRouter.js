const PaisControler = require('../controllers/PaisControler')
  module.exports = (app) => {
     app.post('/pais', PaisControler.criarPais);
     app.put('/pais/:id', PaisControler.atualizarPais);
     app.delete('/pais/:id', PaisControler.excluirPais);
     app.get('/pais', PaisControler.listarPaises);
     app.get('/pais/:id', PaisControler.obterPaisPorId);
  }
  