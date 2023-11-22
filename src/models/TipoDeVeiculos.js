const sequelize  = require('sequelize');
const database = require('../models/db');
const tipoveiculos = database.define('tipoveiculos', {
  idTipoVeiculo: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nrVagas: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  imgAssociadaVagasVeiculos: {
    type: sequelize.BLOB,
    allowNull: false
  },
  snAtivo: {type: sequelize.STRING(1)},

});

module.exports = tipoveiculos;
