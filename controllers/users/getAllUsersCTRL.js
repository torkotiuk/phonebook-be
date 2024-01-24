const { userServices: service } = require('../../services');

const getAllUsersCTRL = async (req, res, next) => {
  try {
    console.log('getAllUsersCTRL');
    const result = await service.getAllUsersSRV();
    res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsersCTRL;
