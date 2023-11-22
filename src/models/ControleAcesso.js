const sequelize = require('sequelize');

const ControleAcesso = sequelize.define('ControleAcesso', {
  
  idControle: sequelize.INTEGER,
  password: sequelize.STRING,
  snAtivo: sequelize.STRING,
  dtRegistro: sequelize.DATE,
  idUsuario: sequelize.INTEGER,
  idUsuarioAdm: sequelize.INTEGER,
  dtInativacao: sequelize.DATE,
  motivoInativacao: sequelize.STRING,
  observacao: sequelize.STRING

});

module.exports = ControleAcesso;
