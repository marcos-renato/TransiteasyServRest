require('dotenv').config();
const hostDb=process.env.hostDbSECRET;
const portDB=process.env.portDBSECRET;
const usernameDB=process.env.usernameDBSECRET;
const passwordDB=process.env.passwordDBSECRET;
const databaseDB=process.env.databaseDBSECRET;
const dialectDB=process.env.dialectDBSECRET;
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: dialectDB, 
  host: hostDb, 
  port: portDB,
  username: usernameDB,
  password: passwordDB, 
  database: databaseDB
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;
