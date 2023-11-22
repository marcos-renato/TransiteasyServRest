const estadoControler = require('../controllers/EstadoControler')
  module.exports = (app) => {
     app.post('/estado', estadoControler.criarEstado);
     app.put('/estado/:id', estadoControler.atualizarEstado);
     app.delete('/estado/:id', estadoControler.excluirEstado);
     app.get('/estado', estadoControler.listarEstados);
     app.get('/estado/:id', estadoControler.obterEstadoPorId);
  }
