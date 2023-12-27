require('dotenv').config();
const hostDb=process.env.HOSTDBSECRET;
const portDB=process.env.PORTDBSECRET;
const usernameDB=process.env.USERNAMEDBSECRET;
const passwordDB=process.env.PASSWORDDBSECRET;
const databaseDB=process.env.DATABASEDBSECRET;
const dialectDB=process.env.DIALECTDBSECRET;
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
