const Sequelize = require('sequelize');
/*require('dotenv').config();
const hostDB=process.env.hostDBSECRET;*/

const sequelize = new Sequelize({
  dialect: 'mysql', // Use 'mysql' para MariaDB
  host:'${{ secrets.HOSTDB }}', 
  port:'${{ secrets.PORTDB }}',
  username: '${{ secrets.USERNAMEDB }}',
  password: '${{ secrets.PASSWORDDB }}', 
  database: '${{ secrets.DATABASEDB }}'
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
