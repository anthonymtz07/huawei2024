const express = require('express');
const mongodb = express.Router();

let Student = require('../models/student');
let Comment = require('../models/comments')


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
    //console.log('res: '+student.studentemail);
    res.redirect('/internMoreinformation');
});


mongodb.post('/more_information',(req,res)=>{
    res.redirect('/englishTest')
});

mongodb.post('/english_test',(req,res)=>{
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