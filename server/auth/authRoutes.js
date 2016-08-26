const passport = require('passport');
const mountAuthRoutes = app => {
  app.get('/api/auth',
    passport.authenticate('github', { scope: [ 'read:org' ] }),
    function(req, res){
    });

    app.get('/api/auth/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

    app.get('/', ensureAuthenticated, function(req, res){
      res.render('account', { user: req.user });
    });

    app.get('/logout', function(req, res){
      req.logout();
      res.logout('/');
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
    res.redirect('/api/auth')
  }

}

module.exports = mountAuthRoutes;
