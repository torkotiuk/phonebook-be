const { userServices: service } = require('../../services');

const getUserByIdCTRL = async (req, res, next) => {
  try {
    const result = await service.getUserByIdSRV(req.params.id);

    // - - - if id doesn't exist
    if (!result) {
      return res.status(404).json({
        status: 'fail',
        code: 404,
        message: `Not Found`,
      });
    }
    // - - -

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserByIdCTRL;
