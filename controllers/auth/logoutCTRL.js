const { userServices: service } = require('../../services');

const logoutCTRL = async (req, res, next) => {
  try {
    // receive req.user from authMDW settled in logout route
    await service.updateUserByIdSRV(req.user._id, { token: null });

    res.json({
      status: 'success',
      code: 200,
      message: 'Logout has done successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logoutCTRL;
