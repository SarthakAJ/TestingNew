const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys.js');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User.js');
require('./services/passport.js');
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;


app.use(cookieSession({              // app.use is a middleware method => small functions that can be used to modify incoming requests
    // to our app before going to route handlers
maxAge : 30 * 24 * 60 * 60 * 1000,
keys : [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

mongoose.connect(keys.mongoURI).then(result => {
    app.listen(PORT);
    console.log("Server running through port : " + PORT);
    console.log("Connected to database");
}).catch(err => console.log(err));






