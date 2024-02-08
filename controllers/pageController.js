const path = require('path');
const flash = require('express-flash');  


const pageController = {
  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index'));
  },
  getVideos: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/videos'));
  },
  getAbout: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/info'));
  },
  getContact: (req, res) => {
    req.flash('success', 'Email sent successfully!');
    res.render('contact.ejs', { messages: req.flash() });
  },
};

module.exports = pageController;
