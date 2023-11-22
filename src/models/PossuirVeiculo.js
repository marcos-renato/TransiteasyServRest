const sequelize = require('sequelize');

const PossuirVeiculo = sequelize.define('PossuirVeiculo', {
  
  idVeiculo: sequelize.INTEGER,
  idUsuario: sequelize.INTEGER


});

module.exports = PossuirVeiculo;
