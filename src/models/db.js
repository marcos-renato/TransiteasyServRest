require('dotenv').config();
const HOSTDB=process.env.HOSTDBSECRET;
const PORTDB=process.env.PORTDBSECRET;
const USERNAMEDB=process.env.USERNAMEDBSECRET;
const PASSWORDDB=process.env.PASSWORDDBSECRET;
const DATABASEDB=process.env.DATABASEDBSECRET;
const DIALECTDB=process.env.DIALECTDBSECRET;
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: DIALECTDB, 
  host: HOSTDB, 
  port: PORTDB,
  username: USERNAMEDB,
  password: PASSWORDDB, 
  database: DATABASEDB
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
