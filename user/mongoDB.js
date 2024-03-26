const express = require('express');
const mongodb = express.Router();

let Student = require('../models/student');
let Student_description = require('../models/self_student');
let English_test = require('../models/english_test');
let Comment = require('../models/comments');


/*Students*/

mongodb.post('/student_information',(req,res)=>{
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
    });
    console.log(student);
    //res.redirect('/internMoreinformation');
    res.render('moreInformation_form',{student:student});
});


mongodb.post('/more_information',(req,res)=>{
    const description = new Student_description({
        studentemail: req.body.studentemail,
        yourself: req.body.yourself,
        razons: req.body.razons,
        goals: req.body.goals
    });

    console.log(description);
    res.render('english_test',{description: description});
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

    console.log(english_test);

    res.redirect('/')
});

/*mongodb.post('/student_information_more',(req,res)=>{
    student({
        yourself: req.body.yourself,
        razons: req.body.razons,
        goals: req.body.goals
    });
    student.save()
    .then(()=>{
        res.redirect('/');
        console.log("Archivos enviados:\n"+student);
    })
    .catch((err)=>{
        console.error('Check this information -> : '+err);
    });
});*/





/*Comments*/
mongodb.post('/comments',(req,res)=>{
    Comment.create(req.body).then((data)=>{
        console.log("Comment added...\n["+data+"]");
        console.log(data);
        res.send(data);
        //res.redirect('/');
    })
    .catch((err)=>{
        console.error("Check this information: "+err);
    })
});


module.exports = mongodb;