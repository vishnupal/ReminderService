const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);

    sendBasicEmail(
      'vishal@admin.com',
      'vishalranjan147@gmail.com',
      'This is testing email',
      'hey,how are you , I hope you like the support'
    );
  });
};

setupAndStartServer();
