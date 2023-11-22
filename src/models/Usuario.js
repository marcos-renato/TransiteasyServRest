const sequelize = require('sequelize');
const database = require('../models/db');
const Usuario = database.define('usuarios', {
  
  idUsuario: {
    type:sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cpf: {
    type:sequelize.STRING(11),
    allowNull: false
  },
  celPessoal: {
    type:sequelize.STRING(14)
  },
  celProfissional: {
    type:sequelize.STRING(14),
    allowNull: false
  },
  nome: {
    type:sequelize.STRING(100),
    allowNull: false
  },
  numRg: {
    type:sequelize.STRING(11),
    allowNull: false
  },
  orgaoExpedidorRg: {
    type:sequelize.STRING(100),
    allowNull: false
  },
  habilitacao: {
    type:sequelize.STRING(11)},
  imgFoto:{type:sequelize.BLOB},
  dtNascimento: {
    type:sequelize.DATE,
    allowNull: false
  },
  email: {
    type:sequelize.STRING(100),
    allowNull: false
  },
  idCidade: {
    type:sequelize.INTEGER,
    allowNull: false
  },
  bairro: {
    type:sequelize.STRING(100),
    allowNull: false
  },
  referencia: {
    type:sequelize.STRING(200)}

});

module.exports = Usuario;
