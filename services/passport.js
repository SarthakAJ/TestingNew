const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({_id:id}).then((user) => {
        done(null, user);
    });
     
})

passport.use(new GoogleStrategy(
    {
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy : true                               // callback function is passed through proxy to go to correct server. https becomes http. making proxy true says that we trust heroku server.
    }, 
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
       const existingUser = await User.findOne({ googleID : profile.id});
            if(existingUser){
                // user with specified profile id already exists
                return done(null, existingUser);                    // gets outside of the callback function
            }
            const user = await new User({ googleID : profile.id}).save();
            console.log(user)
            done(null, user);          // user is 2nd model instance same as the one in above line 
    }
    )); 