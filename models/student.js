var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create the student schema & model
var StudentSchema = new Schema({
    id:{
        type: String,
    },
    name:{
        type: String,
    },
    address:{
        type: String,
    },
});

var Student = mongoose.model('student', StudentSchema);

module.exports = Student;