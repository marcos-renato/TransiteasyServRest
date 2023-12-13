const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Use 'mysql' para MariaDB
  host: '45.79.53.83', 
  //host: '172.17.0.2', 
  username: 'transiteasy',
  password: '12345678', 
  database: 'transiteasydb', 
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
