const nodemailer = require('nodemailer');
const flash = require('express-flash');  
const session = require('express-session'); 


const contactController = {
  sendEmail: async (req, res) => {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;

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

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Replace with your email
      to: process.env.EMAIL, // Replace with the recipient's email
      subject: 'Contact Form Submission',
      text: `Name: ${yourname}\nEmail: ${youremail}\nMessage: ${yourmessage}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);

      req.flash('success', 'Email sent successfully!');
      res.redirect('/');
   } catch (error) {
      console.error(error);
      req.flash('error', 'Failed to send email.');
      res.redirect('/contact');
    }
  }
};
  

module.exports = contactController;
