const sequelize = require('sequelize');

const TipoFrequencia = sequelize.define('TipoFrequencia', {
  
  idTipoFrequencia: sequelize.INTEGER,
  dsTipoFrequencia: sequelize.STRING,
  frequencia: sequelize.STRING,
  snAtivo: sequelize.STRING

});

module.exports = TipoFrequencia;
