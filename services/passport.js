const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys.js');
const User = mongoose.model('Users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
     .then(user => done(null, user));
})

passport.use(new GoogleStrategy(
    {
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        // console.log(JSON.stringify(profile));
        User.findOne({ googleID : profile.id})
         .then((existingUser) => {
            if(existingUser){
                // user with specified profile id already exists
                done(null, existingUser);                    // gets outside of the callback function
            }
            else{
                new User({ googleID : profile.id}).save()
                 .then(user => done(null, user));          // user is 2nd model instance same as the one in above line 
            }  
         });
    }
    ));