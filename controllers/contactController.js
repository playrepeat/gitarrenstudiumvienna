const nodemailer = require('nodemailer');
exports.getContact = (req, res) => {
  res.sendFile('contact.html', { root:'../views/contact.html'});
};

exports.handleContactForm = (req, res) => {
  // Set up NodeMailer and send email
  // Retrieve form data from req.body
  // Send response back to client
};

let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'Gmail'
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  // Inside handleContactForm, use transporter.sendMail()
  
