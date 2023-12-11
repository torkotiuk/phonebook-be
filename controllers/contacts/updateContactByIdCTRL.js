const { contactServices: service } = require('../../services');

const updateContactByIdCTRL = async (req, res, next) => {
  try {
    const result = await service.updateContactByIdSRV(req.params.id, req.body);

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
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactByIdCTRL;
