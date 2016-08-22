const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
  name: {type: Sequelize.STRING},
  github: {type: Sequelize.STRING, unique: true},
  phone: {type: Sequelize.STRING, unique: true}

})

User.sync();


module.exports = User;
