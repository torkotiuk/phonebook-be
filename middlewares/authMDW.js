const passport = require('passport');

const authMDW = (req, res, next) => {
  return passport.authenticate('jwt', { session: false }, (error, user) => {
    // if (error || !user) {
    if (error || !user || !user.token) {
      console.log('authMDW');
      res.status(401).json({
        status: 'fail',
        code: 401,
        message: 'Unauthorized',
      });
    }

    // add "user" obj to "req" obj
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = authMDW;
