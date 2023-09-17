const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys.js');
const passport = require('passport');
require('./models/User.js');
require('./services/passport.js');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
mongoose.connect(keys.mongoURI).then(result => {
    console.log("Server running through port : " + PORT);
    console.log("Connected to database");
}).catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send("<h1>kfhfskfhghsk</h1>");
});
// require('./routes/authRoutes')(app);
// app.use(cookieSession({              // app.use is a middleware method => small functions that can be used to modify incoming requests
//                                      // to our app before going to route handlers
//     maxAge : 30 * 24 * 60 * 60 * 1000,
//     keys : [keys.cookieKey]
// }));

// app.use(passport.initialize());
// app.use(passport.session());

