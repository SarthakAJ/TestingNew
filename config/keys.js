if(process.env.NODE_ENV === 'production')
{
    module.exports = require('./prod.js');

} else {
    // developement mode
    module.exports = require('./dev.js');
}