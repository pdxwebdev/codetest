// server.js

// modules =================================================
var express        = require('express');
var app            = express();
// configuration ===========================================
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// config files
// set our port
var port = process.env.PORT || 8081; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// get all data/stuff of the body (POST) parameters
// parse application/json 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app); // configure our routes
// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port, '0.0.0.0');         

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  