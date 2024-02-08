const path = require('path');
const flash = require('express-flash');  


const pageController = {
  getIndex: (req, res) => {
    res.render('index.ejs', { messages: req.flash() });
  },
  getAbout: (req, res) => {
    res.render('about.ejs' );
  },
  getVideos: (req, res) => {
    res.render('videos.ejs' );
  },
  getContact: (req, res) => {
    req.flash('success', 'Email sent successfully!');
    res.render('contact.ejs', { messages: req.flash() });
  },
};

module.exports = pageController;
