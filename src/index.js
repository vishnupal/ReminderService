const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/serverConfig');

const EmailService = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');

const setupAndStartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
  // subscribeMessage(channel, undefined, REMINDER_BINDING_KEY);

  app.post('/api/v1/tickets', TicketController.create);
  app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);
    // jobs();
  });
};

setupAndStartServer();
