const { userServices: service } = require('../../services');

const registerCTRL = async (req, res, next) => {
  // 1 step - > check if user exists already
  try {
    const result = await service.findUserSRV({ email: req.body.email });

    if (result) {
      res.status(409).json({
        status: 'Conflict',
        code: 409,
        message: 'Already registered',
      });
      return;
    }

    // 2 step = > add user
    await service.addUserSRV({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Added successfully',
    });
    // === === === === === === === === ===
  } catch (error) {
    next();
  }
};

module.exports = registerCTRL;
