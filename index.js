const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys.js');
const passport = require('passport');
require('./models/User.js');
require('./services/passport.js');

const port = process.env.port || 5000;

mongoose.connect(keys.mongoURI).then(result => {
    app.listen(port);
    console.log("Server running through port : " + port);
    console.log("Connected to database");
}).catch(err => console.log(err));

app.use(cookieSession({              // app.use is a middleware method => small functions that can be used to modify incoming requests
                                     // to our app before going to route handlers
    maxAge : 30 * 24 * 60 * 60 * 1000,
    keys : [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);