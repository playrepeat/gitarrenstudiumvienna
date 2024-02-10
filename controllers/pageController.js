const path = require('path');

const pageController = {
  getIndex: (req, res) => {
    res.render('index.ejs');
  },
  getAbout: (req, res) => {
    res.render('about.ejs' );
  },
  getVideos: (req, res) => {
    res.render('videos.ejs' );
  },
  getContact: (req, res) => {
    res.render('contact.ejs');
  },
};

module.exports = pageController;
