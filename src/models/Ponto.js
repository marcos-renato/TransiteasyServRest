const sequelize = require('sequelize');
const database = require('../models/db');
const ponto = database.define('Pontos', {
  
  idPonto: {
    type: sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dsPonto:{
    type: sequelize.STRING(200),
    allowNull: false,
  },
  imgPonto: {
    type:sequelize.BLOB,
  },
  idUsuario: {
    type:sequelize.INTEGER(11),
    allowNull: false,
  },
  dtCriacao: {
    type:sequelize.DATE,
    allowNull: false,
  },
  idTipoLocal: {
    type:sequelize.INTEGER(11),
    allowNull: false,
  },
  idCidade: {
    type:sequelize.INTEGER(11),
    allowNull: false,
  },
  bairro: {
    type:sequelize.STRING(100),
    allowNull: false,
  },
  referencia: {
    type:sequelize.STRING(150),
  },
  idHorario: {
    type:sequelize.INTEGER(11),},

});

module.exports = ponto;
