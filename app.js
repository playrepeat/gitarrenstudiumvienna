require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const flash = require('express-flash');  // Add this line
const session = require('express-session');  // Add this line
const ejs = require('ejs');


// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));



// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

app.use(flash());

// Routes
const pageController = require('./controllers/pageController');
const contactController = require('./controllers/contactController');

app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

// server.js
// ... (other imports)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ...



// ...


//app.get('/', pageController.getIndex);
app.get('/', pageController.getIndex);
app.get('/contact', pageController.getContact);
app.get('/index', pageController.getIndex);
app.get('/videos', pageController.getVideos);
app.get('/info', pageController.getAbout);
//app.get('/contact', pageController.getContact);
app.post('/contact', contactController.sendEmail);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

