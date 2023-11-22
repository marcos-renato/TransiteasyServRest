const  Sequelize  = require('sequelize');
const database = require('../models/db');

const Estado = database.define('estado', {
  idEstado: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmEstado: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  uf: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
  idPais: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  snAtivo: {type: Sequelize.STRING(1)},


});

module.exports = Estado;
