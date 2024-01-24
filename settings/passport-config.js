const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { userServices: service } = require('../services');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const jwtStrategy = new Strategy(settings, async (payload, done) => {
  try {
    // v-1. send to the next middleware payload with user info
    // done(null, payload);
    // In this case the Strategy create & add
    // automatically to request the obj "user" with all payload { id: '', iat: ""}
    // so in ctrl-s we should receive "req.user" object for making smth.

    // v-2. --- --- ---
    const user = await service.getUserByIdSRV(payload.id);

    if (!user) {
      throw new Error('Not Found');
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
  // --- --- --- ---
});

passport.use(jwtStrategy);
// identificate strategy, like 'jwt' if a project has couple of them
// passport.use('jwt', jwtStrategy);
