const CoresControler = require('../controllers/CoresControler')
module.exports = (app) => {
   app.post('/cores', CoresControler.criarCor);
   app.put('/cores/:id', CoresControler.atualizarCor);
   app.delete('/cores/:id', CoresControler.excluirCor);
   app.get('/cores', CoresControler.listarCores);
   app.get('/cores/:id', CoresControler.obterCorPorId);
}
