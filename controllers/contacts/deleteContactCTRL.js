const { contactServices: service } = require('../../services');

const deleteContactCTRL = async (req, res, next) => {
  console.log('deleteContactCTRL');
  try {
    const result = await service.deleteContactSRV(req.params.id);

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
      messageStart: 'Item',
      result,
      messageEnd: 'deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContactCTRL;
