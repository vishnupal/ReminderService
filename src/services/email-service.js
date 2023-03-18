const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  const response = await sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
  console.log(response);
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await repo.get({ status: 'PENDING' });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    // console.log(data.notificationTime)
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    // console.log(data.notificationTime)
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
