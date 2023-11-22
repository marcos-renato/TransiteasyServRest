const sequelize = require('sequelize');
const database = require('../models/db');
const Cidade = database.define('cidades', {

  idCidade: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmCidade:{
    type: sequelize.STRING(100),
    allowNull:false,
  },
  idEstado:{
    type: sequelize.INTEGER,
    allowNull:false,
  },
  snAtivo: {
    type:sequelize.STRING(1),
    allowNull:false,
  },

});

module.exports = Cidade;
