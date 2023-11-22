const  sequelize  = require('sequelize');
const database = require('../models/db');
const Pais = database.define('pais', {
  idPais: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nmPais: {
    type: sequelize.STRING(100),
    allowNull: false
  },
  snAtivo: {type: sequelize.STRING(1)},

});

module.exports = Pais;
