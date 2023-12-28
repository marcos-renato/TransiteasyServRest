require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOSTDBSECRET,
  port: process.env.PORTDBSECRET,
  username: process.env.USERNAMEDBSECRET,
  password: process.env.PASSWORDDBSECRET,
  database: process.env.DATABASEDBSECRET
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
