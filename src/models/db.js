const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Use 'mysql' para MariaDB
  host: '45.33.50.50', 
  port:'3499',
  username: 'adm_server',
  password: 'M$rc3l4V1c3nt3F@b14n4M4rt1ns', 
  database: 'trasitedb', 
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
