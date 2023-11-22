const sequelize = require('sequelize');

const Viagem = sequelize.define('Viagem', {
  
  idViagem: sequelize.INTEGER,
  idPonto: sequelize.INTEGER,
  idHorario: sequelize.INTEGER,
  snReservado: sequelize.STRING,
  idUsuario: sequelize.INTEGER,
  snPago: sequelize.STRING,
  snCancelado: sequelize.STRING,
  dtCancelamento: sequelize.DATE,
  idUsuarioCancelamento: sequelize.INTEGER,
  motivoCancelamento: sequelize.STRING,
  idVeiculo: sequelize.INTEGER

});

module.exports = Viagem;
