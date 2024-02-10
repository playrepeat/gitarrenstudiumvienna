require("dotenv").config();
const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');

const nodemailer = require('nodemailer');


const contactController = {
  sendEmail: (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log(req.body);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: process.env.EMAIL, 
      subject: 'Contact Form Submission',
      text: `You got a message from 
      Email : ${email}
      Name: ${name}
      Subject: ${subject}
      Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return res.status(500).json({ success: false, message: 'Failed to send email.' });
      }
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });

  
   
  } 
};
  

module.exports = contactController;
