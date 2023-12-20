const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Use 'mysql' para MariaDB
  host: '', 
  
  username: '',
  password: '', 
  database: '', 
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
