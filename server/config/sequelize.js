const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres@localhost/queup");
sequelize.authenticate()
  .then(() => console.log('database is connected'))
  .catch(err => console.error(err));

module.exports = sequelize;
