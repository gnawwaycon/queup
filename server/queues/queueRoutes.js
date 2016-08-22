const mountQueueRoutes = app => {
  app.route('/api/queues')
    .get(function(req, res) {
      res.send('api queues get');
    })
    .post(function(req, res) {
      console.log(req);
    })
    .put(function(req, res) {
      res.send('api queues get');
    });

  app.route('/api/queues/:id')
    .get(function(req, res) {
      res.send('api queues id get');
    })
    .post(function(req, res) {
      res.send('api queues post');
    })
    .put(function(req, res) {
      res.send('api queues get');
    });
};

module.exports = mountQueueRoutes;
