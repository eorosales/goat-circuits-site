const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require('dotenv').config();

exports.handler  = function(event, context, callback) {
    let data = JSON.parse(event.body)

    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
          process.env.CLIENT_ID,
          process.env.CLIENT_SECRET,
          "https://developers.google.com/oauthplayground"
        );
        oauth2Client.setCredentials({
          refresh_token: process.env.REFRESH_TOKEN
        });// end oauth2Client.setCredentials
        const accessToken = await new Promise((resolve, reject) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) {
              reject("Failed to create access token :(");
            }
            resolve(token);
          });
        });// end accessToken
      
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            type: "OAuth2",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
          }
        });// end transporter

        let mailOptions = {
            from: "Your nodeMailer app!",  
            to: `${process.env.EMAIL}`,    
            subject: `${data.subject}`,   
            html: `
                <h3>Email from ${data.name} ${data.email}<h3>
                <p>${data.message}<p>
            `,   
            auth: {
             user: `${process.env.EMAIL}`,   
             refreshToken: `${process.env.REFRESH_TOKEN}`,    
             accessToken,   
             expires: new Date().getTime(),  
            },
          };// end mailOptions

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                callback(error);
            } else {
                callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                       'result': 'success'
                    })
            });
            }
        }); //end transporter.sendMail()
      };
}