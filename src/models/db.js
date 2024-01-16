require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: ${{secrets.HOSTDBSECRET}},
  port: ${{secrets.PORTDBSECRET}},
  username: ${{secrets.USERNAMEDBSECRET}},
  password: ${{secrets.PASSWORDDBSECRET}},
  database: ${{secrets.DIALECTDBSECRET}}
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
