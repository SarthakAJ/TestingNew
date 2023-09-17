const passport = require('passport');

module.exports = app => {

app.get('/', (req, res) => {
    res.send("<h1>kfhfskfhghsk</h1>");
}),
    
app.get('/auth/google', passport.authenticate('google', {
    scope : ['profile', 'email']
})),

app.get('/api/current_user', (req, res) => {
    res.send(req.user);          // passport automatically attach user to req and some other functions 
}),

app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
}),

app.get('/auth/google/callback', passport.authenticate('google'));
}