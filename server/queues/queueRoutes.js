queueCtrl = require('./queueController')

const mountQueueRoutes = app => {
  app.route('/api/queues')
    .get(queueCtrl.enqueue)
    .post(queueCtrl.dequeue)
};

module.exports = mountQueueRoutes;
