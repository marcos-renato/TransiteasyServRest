const VeiculoControler = require('../controllers/VeiculoControler')
  module.exports = (app) => {
     app.post('/veiculo', VeiculoControler.criarVeiculo);
     app.put('/veiculo/:id', VeiculoControler.atualizarVeivulo);
     app.delete('/veiculo/:id', VeiculoControler.excluirVeiculo);
     app.get('/veiculo', VeiculoControler.listarVeiculos);
     app.get('/veiculo/:id', VeiculoControler.obterVeiculoPorId);
  }
  