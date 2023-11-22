const sequelize  = require('sequelize');
const database = require('../models/db');
const cores = database.define('cores', {
  idCor: {
    type: sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cor: {
    type: sequelize.STRING(30),
    allowNull: false
  },
  snAtivo: {
    type: sequelize.STRING(1)
  },

});

module.exports = cores;
