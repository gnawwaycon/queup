const passport = require('passport');
const mountAuthRoutes = app => {
  app.get('/api/auth',
    passport.authenticate('github', { scope: [ 'read:org' ] }),
    function(req, res){
    });

  app.get('/api/auth/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('ME HERE', req.user);
      res.redirect('/main');
    });

  app.get('/main', function(req, res){
    res.send(req.user)
  });

  app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
}

module.exports = mountAuthRoutes;
