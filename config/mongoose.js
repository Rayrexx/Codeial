//mongoose configuration file

//Including mongoose in our file
const mongoose = require('mongoose');

// establishing a connection with mongodb
mongoose.connect('mongodb://localhost/codeial_develpment');

const db = mongoose.connection;

//For connection error
db.on('error', console.error.bind(console, 'error connecting to db'));

//Successul connection
db.once('open', function() {
    console.log('successfully connected');

});

module.exports = db;