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
      res.redirect('/');
    });
}

module.exports = mountAuthRoutes;
