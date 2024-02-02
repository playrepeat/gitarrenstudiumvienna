const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Routes
const pageController = require('./controllers/pageController');
const contactController = require('./controllers/contactController');

app.get('/', pageController.getIndex);
app.get('/videos', pageController.getVideos);
app.get('/about', pageController.getAbout);
app.get('/contact', pageController.getContact);

app.post('/send-email', contactController.sendEmail);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
