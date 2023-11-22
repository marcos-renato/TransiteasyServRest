const sequelize  = require('sequelize');
const database = require('../models/db');
const Possuirveiculos = database.define('PossuirVeiculos', {
  idVeiculo: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  idUsuario: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
});

module.exports = Possuirveiculos;
