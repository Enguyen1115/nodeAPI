// const express = require('express');
// const router = express.Router();


// router.get('/students', function (req, res) {
//     res.send({type: 'GET'});
// });


// router.post('/students', function (req, res) {
//     res.send({
//         type: 'POST',
//         name: req.body.name,
//         role: req.body.role,
//     });
// });


// router.put('/students/:id', function (req, res) {
//     res.send({type: 'PUT'});
// });


// router.delete('/students/:id', function (req, res) {
//     res.send({type: 'DELETE'});
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Student = require('../models/student')

//Get a list of students from the db
router.get('/students', function (req, res, next) {
    Student.find({}).then(function (students) {
        res.send(students);
    }).catch(next);
});

//Add a new student to db
router.post('/students', function (req, res, next) {
    Student.create(req.body).then(function (student) {
        res.send(student);
    }).catch(next);
});

//Update student information in db
router.put('/students/:id', function (req, res, next) {
    Student.findOneAndUpdate({ id: req.params.id }, req.body).then(function (student) {
        Student.findOne({ id: req.params.id }).then(function (student) {
            res.send(student);
        })
    });
});

//Delete a student from db
router.delete('/students/:id', function(req, res, next){
    Student.findOneAndDelete({id: req.params.id}).then(function(student){
        res.send(student);
    });
});

module.exports = router;