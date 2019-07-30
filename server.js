const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shops = require('./routes/api/shops');
const products = require('./routes/api/products');
const users = require('./routes/api/users');

const passport = require('passport');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config 
const db = require('./config/keys').mongoURI;

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(er => console.log(err));

// Use Routes
app.use('/api/shops', shops);
app.use('/api/products', products);
app.use('/api/users', users);

const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});