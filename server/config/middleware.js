const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const mountMiddleware = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session({ secret: "sompop" }));
  app.use(passport.initialize());
  app.use(passport.session());
};

module.exports = mountMiddleware;
