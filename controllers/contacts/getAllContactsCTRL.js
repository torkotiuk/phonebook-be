const { contactServices: service } = require('../../services');

const getAllContactsCTRL = async (req, res, next) => {
  try {
    const result = await service.getAllContactsSRV();
    res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContactsCTRL;
