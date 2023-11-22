const  sequelize  = require('sequelize');
const database = require('../models/db');
const veiculo = database.define('veiculo', {

  idVeiculo:{ 
    type: sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  dsVeiclo: {
    type: sequelize.STRING(100),
    allowNull: false
  },
  dtCriacao: {
    type: sequelize.DATE,
    allowNull: false
  },
  idUsuario: {
    type: sequelize.INTEGER(11),
    allowNull: false
  },
  imgVeiclo: {
    type: sequelize.BLOB,
    allowNull: false
  },
  idTipoVeiculo: {
    type: sequelize.INTEGER(11),
    allowNull: false
  },
  dsAno: {
    type: sequelize.STRING(9),
    allowNull: false
  },
  idCor: {
    type: sequelize.INTEGER(11),
    allowNull: false
  },
  dsModelo: {
    type: sequelize.STRING(100),
    allowNull: false
  },
  dsPlaca: {
    type: sequelize.STRING(10),
    allowNull: false
  },
  snAtivo: {
    type: sequelize.STRING(1),
    allowNull: false
  }

});

module.exports = veiculo;
