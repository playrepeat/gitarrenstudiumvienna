const path = require('path');

const pageController = {
  getIndex: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  },
  getVideos: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/videos.html'));
  },
  getAbout: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
  },
  getContact: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
  },
};

module.exports = pageController;
