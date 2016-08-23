const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Queue = sequelize.define('queue', {
  userNumber: { type: Sequelize.STRING },
  userID: { type:  Sequelize.STRING },
  lineName: { type: Sequelize.STRING },
  capacity: { type: Sequelize.INTEGER }
});

Queue.sync();

module.exports = Queue;
