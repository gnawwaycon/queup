const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Inqueue = sequelize.define('inqueue', {
  userNumber: { type: Sequelize.STRING },
  userID: { type:  Sequelize.STRING },
  lineName: { type: Sequelize.STRING },
  capacity: { type: Sequelize.INTEGER }
});

Inqueue.sync();

module.exports = Inqueue;
