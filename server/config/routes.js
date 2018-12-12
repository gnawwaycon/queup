const mountUserRoutes = require('../users/userRoutes');
const mountQueueRoutes = require('../queues/queueRoutes');
const mountAuthRoutes = require('../auth/authRoutes')

const mountRoutes = (app, passport) => {
  mountUserRoutes(app);
  mountQueueRoutes(app);
  mountAuthRoutes(app,passport)
};

module.exports = mountRoutes;
