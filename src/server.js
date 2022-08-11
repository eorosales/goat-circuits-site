const express = require('express');
const nodemailer = require('nodemailer');

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = 5000;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  return transporter;
};

app.use(express.json());
app.use(cors());
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://www.goatcircuits.com/send"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/send', (_req, res) => {
  res.send('This is the send endpoint');
})

app.post('/send', (req, res) => {
  let data = req.body;
  console.log(data);
  const sendEmail = async (data) => {
    try {
      let emailTransporter = await createTransporter();
      await emailTransporter.sendMail(data);
    }catch(error) {
      console.log(error)
    } 
  };
  // Email form field inputs
  sendEmail({
    name: `${data.name}`,
    from: `${data.email}`,
    to: "eric.rosales@goatcircuits.com",
    subject: `${data.subject}`,
    html:`
      <h2>Inquiry from ${data.name}!</h2>
      <hr>
      <h3>Details</h3>
      <p>${data.message}</p>
    `
  });
  return data;
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})