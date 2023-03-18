const TicketService = require('../services/email-service');

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: 'Successfully  register an email reminder ',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: 'unable to register email reminder ',
    });
  }
};

module.exports = {
  create,
};
