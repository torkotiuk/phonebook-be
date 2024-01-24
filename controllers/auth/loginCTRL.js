const bcrypt = require('bcryptjs');
const { userServices: service } = require('../../services');
// STEP 2 ---
const jwt = require('jsonwebtoken');
require('dotenv').config();
// ----- ---

const loginCTRL = async (req, res, next) => {
  try {
    const user = await service.findUserSRV({ email: req.body.email });
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      res.status(400).json({
        status: 'Fail',
        code: 400,
        message: `Bad request`,
      });
      return;
    }

    // STEP 2 --- generate token and return it in response ---
    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: token,
      },
    });
    // --- --- --- --- --- --- --- --- --- --- --- ---
  } catch (error) {
    next(error);
  }
};

module.exports = loginCTRL;
