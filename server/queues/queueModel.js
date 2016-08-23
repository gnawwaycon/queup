const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Queue = sequelize.define('queue', {
  userNumber: { type: Sequelize.STRING },
  userID: { tpye: Sequelize.STRING },
  lineName: { type: Sequelize.STRING },
  capacity: { type: Sequelize.INTEGER }
});

module.exports = Queue;
