require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.OUTPUT_HOSTDBSECRET,
  port: process.env.OUTPUT_PORTDBSECRET,
  username: process.env.OUTPUT_USERNAMEDBSECRET,
  password: process.env.OUTPUT_PASSWORDDBSECRET,
  database: process.env.OUTPUT_DATABASEDBSECRET
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
