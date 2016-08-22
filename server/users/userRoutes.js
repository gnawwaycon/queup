const mountUserRoutes = app => {
  app.route('/api/users')
    .get(function(req, res) {
      console.log(req.user)
      res.send('api users get');
    })
    .post(function(req, res) {
      res.send('api users post');
    });

  app.route('/api/users/:id')
    .get(function(req, res) {
      res.send('api users get');
    })
    .put(function(req, res) {
      res.send('api users put');
    })
    .delete(function(req, res) {
      res.send('api users delete');
    });
};

module.exports = mountUserRoutes;
