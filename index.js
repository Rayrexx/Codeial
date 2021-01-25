// Including express in our project
const express = require('express');
const app = express();

//Defining port where our app will listen on
const port = 8000;

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');

//assets contains the static files of the app
app.use(express.static('./assets'));

//use express layouts
app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//using express router
app.use('/', require('./routes'));

//setting up our view engine
app.set('view engine', 'ejs');
app.set('views', './views');




//making our App to listen on the specified port
app.listen(port, function(err) {
    if (err) {
        console.log('Error');

    }
    console.log('Server is up at port', port);
});