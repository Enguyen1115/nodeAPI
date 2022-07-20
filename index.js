var express = require('express');
var mongoose = require('mongoose');

//Setup express
const app = express();

//Create a connection to the database
mongoose.connect('mongodb://localhost:27017/ourdata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());

// initialize routes
app.use('/api', require('./router/api'));

// error handling middleware
app.use(function (err, req, res, next) {

    //console.log(err);

    res.status(422).send({error: err.message});

});


// listen for requests

app.listen(process.env.port || 4000, function () {

    console.log('Ready to Go!');

});