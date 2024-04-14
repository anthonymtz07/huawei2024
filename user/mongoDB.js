const express = require('express');
const mongodb = express.Router();
var fs = require('fs')
var path = require('path');

let Student = require('../models/student');
let Student_description = require('../models/self_student');
let English_test = require('../models/english_test');
let Comment = require('../models/comments');
let NewAdmin = require('../models/users_admin');
let InterFeedback = require('../models/internfeedback');
const { mongo } = require('mongoose');


/*Students*/

mongodb.post('/student_information',(req,res, next)=>{
    const student = new Student({
        studentname: req.body.studentname,
        studentlastname: req.body.studentlastname,
        studentphone: req.body.studentphone,
        studentemail: req.body.studentemail,
        studentcareer: req.body.studentcareer,
        startyearcareer: req.body.startyearcareer,
        endyearcareer: req.body.endyearcareer,
        studentuniversity: req.body.studentuniversity,
        studentlevel: req.body.studentlevel,
        englishlevel: req.body.englishlevel,
        studentphoto: req.body.studentphoto
        /*studentphoto: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.studentphoto)),
            contentType: 'image/png'
        }*/
    });
    student.save().then(()=>{
        console.log(student.studentphoto);
        res.render('moreInformation_form',{student:student});
    })
    .catch((err)=>{
        console.error('Check this: '+err);
    });
    //console.log(student);
    //res.redirect('/internMoreinformation');
});


mongodb.post('/more_information',(req,res)=>{
    const description = new Student_description({
        studentemail: req.body.studentemail,
        yourself: req.body.yourself,
        razons: req.body.razons,
        goals: req.body.goals
    });
    description.save().then(()=>{
        res.render('english_test',{description: description});

    })
    .catch((err)=>{
        console.error('Check this: '+err);
    });
});

mongodb.post('/english_test',(req,res)=>{
    const english_test = new English_test ({
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer5: req.body.answer5,
        answer6: req.body.answer6,
        answer7: req.body.answer7,
        answer8: req.body.answer8,
        answer9: req.body.answer9,
        answer10: req.body.answer10,
        studentemail: req.body.studentemail,
    })
    english_test.save().then(()=>{
        res.render('correct_information',{english_test:english_test});
    })
    .catch((err)=>{
        res.render('incorrect_information');
        console.error(err);
    })
});

/*Comments*/
mongodb.post('/comments',(req,res)=>{
    const comments = new Comment({
        comment: req.body.comment
    });
    comments.save().then(()=>{
        res.redirect('/interns_feedback');
    }).catch((err)=>{
        console.error(err);
    });
});

/*New admin*/
mongodb.post('/newAdmin',(req,res)=>{
    const newAdmin = new NewAdmin({
        adminname: req.body.adminname,
        adminlastname: req.body.adminlastname,
        adminage: req.body.adminage,
        adminphone: req.body.adminphone,
        adminemail: req.body.adminemail,
        adminpassword: req.body.adminpassword,
        adminphoto: req.body.adminphoto
    });
    newAdmin.save().then(()=>{
        res.render('correct_information_admin')
    })
    .catch((err)=>{
        console.error(err);
    });
});

mongodb.post('/internFeedback',(req,res)=>{
    const interFeedback = new InterFeedback({
        name: req.body.name,
        lastname: req.body.lastname,
        comment: req.body.comment
    });
    interFeedback.save().then(()=>{
        res.redirect('/admin/home');
    })
    .catch((err)=>{
        console.error(err)
    });
});

/*Delete comments*/
mongodb.get('/delete/:id',(req,res)=>{
    var id = req.params.id;
    Comment.findByIdAndDelete(id).then(()=>{
        res.redirect('/admin/comments');
    }).catch((err)=>{
        console.error(err);
    });
});


module.exports = mongodb;