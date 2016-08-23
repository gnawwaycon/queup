queueCtrl = require('./queueController')

const mountQueueRoutes = app => {
  app.route('/api/queues')
    .post(queueCtrl.enqueue)
    .get(queueCtrl.dequeue)
};

module.exports = mountQueueRoutes;
