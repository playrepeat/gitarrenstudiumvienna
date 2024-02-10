require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const multer  = require('multer')
const upload = multer();


app.use(express.static('public'));

// Set up view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const pageController = require('./controllers/pageController');
const contactController = require('./controllers/contactController');

app.get('/', pageController.getIndex);
app.get('/contact', pageController.getContact);
app.get('/index', pageController.getIndex);
app.get('/videos', pageController.getVideos);
app.get('/info', pageController.getAbout);
app.post('/contact', upload.none(), contactController.sendEmail);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
