const getUserProfileCTRL = async (req, res, next) => {
  try {
    res.json({
      status: 'success',
      code: 200,
      data: {
        // id: req.user._id,
        email: req.user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserProfileCTRL;
