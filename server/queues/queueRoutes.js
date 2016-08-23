queueCtrl = require('./queueController')

const mountQueueRoutes = app => {
  app.route('/api/queues')
    .post(queueCtrl.enqueue)
    .get(queueCtrl.stats)
  app.route('/api/queues/text')
    .post(queueCtrl.dequeue)
};

module.exports = mountQueueRoutes;
