// Including express in our project
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//Defining port where our app will listen on
const port = 8000;

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');


app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(express.urlencoded());

app.use(cookieParser());

//assets contains the static files of the app
app.use(express.static('./assets'));

//use express layouts
app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);


//setting up our view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//mongo store is used to store session cookie in the db
app.use(session({
    name: 'codeial',
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err) {
            console.log(err || 'connect-mongodb setup ok')
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//using express router
app.use('/', require('./routes'));



//making our App to listen on the specified port
app.listen(port, function(err) {
    if (err) {
        console.log('Error');

    }
    console.log('Server is up at port', port);
});