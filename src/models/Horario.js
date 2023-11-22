const sequelize = require('sequelize');

const Horario = sequelize.define('Horario', {
  
  idHorario: sequelize.INTEGER,
  dsTitulo: sequelize.STRING,
  idTipoEncontro: sequelize.INTEGER,
  idVeiculo: sequelize.INTEGER,
  idPonto: sequelize.INTEGER,
  valorCobrado: sequelize.DOUBLE,
  dtInicio: sequelize.DATE,
  hrInicio: sequelize.DATE,
  idUsuario: sequelize.INTEGER,
  dtCriacao: sequelize.DATE

});

module.exports = Horario;
