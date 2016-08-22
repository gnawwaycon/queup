const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport')
const session = require('express-session')

const mountMiddleware = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan('dev'));
  app.use(session({ secret: "sompop" }));

  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = mountMiddleware;
