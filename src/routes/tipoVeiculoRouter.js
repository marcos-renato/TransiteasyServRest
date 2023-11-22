const TipoVeiculoControle = require('../controllers/TipoVeiculoControle')
  module.exports = (app) => {
     app.post('/tipoveiculo', TipoVeiculoControle.criarTipoDeVeiculo);
     app.put('/tipoveiculo/:id', TipoVeiculoControle.atualizarTipoDeVeiculo);
     app.delete('/tipoveiculo/:id', TipoVeiculoControle.excluirTipoVeiculo);
     app.get('/tipoveiculo', TipoVeiculoControle.listarTipoVeiculos);
     app.get('/tipoveiculo/:id', TipoVeiculoControle.obterTipoDeVeiculoPorId);
  }
  