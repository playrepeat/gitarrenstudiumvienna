const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();



const port = process.env.PORT || 3000;



// Set up routes
const indexController = require('./controllers/indexController');
const contactController = require('./controllers/contactController');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('views'));


app.get('/', indexController.getIndex);
app.get('/contact', contactController.getContact);
app.post('/contact', express.urlencoded({ extended: true }), contactController.handleContactForm);


// Add routes for other pages...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});