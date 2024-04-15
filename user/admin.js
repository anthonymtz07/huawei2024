const express = require('express');
const admin = express.Router();
let Student = require('../models/student');
let Comment = require('../models/comments');
let NewAdmin = require('../models/users_admin');
let Self = require('../models/self_student');
let English_test = require('../models/english_test');
let InterFeedback = require('../models/internfeedback');


admin.post('/login',(req,res)=>{
    NewAdmin.find({
        adminemail: req.body.email,
        adminpassword: req.body.password  
    })
    .then((admin)=>{
        if(admin == ""){
            res.redirect('/')
        }else{
            if(admin[0].type == "admin"){
                req.session.email = admin[0].adminemail;
                res.redirect('/admin/home');
            }
            else{
                res.redirect('/');
            }
        }
    })
    .catch((err)=>{
        console.error(err)
    })
});

admin.get('/home',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    NewAdmin.find().where('adminemail').equals(req.session.email).then((admin)=>{
        res.render('admin_home',{admin:admin});
    })
    .catch((err)=>{
        console.error(err);
    })
    
});

admin.get('/student_information',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    Student.find().where('englishlevel').equals('B1').then((studentB1)=>{
        Student.find().where('englishlevel').equals('B2').then((studentB2)=>{
            Student.find().where('englishlevel').equals('C1').then((studentC1)=>{
                Student.find().where('englishlevel').equals('C2').then((studentC2)=>{
                res.render('student_information',{studentB1:studentB1, studentB2:studentB2, studentC1:studentC1, studentC2:studentC2});  
                })
                .catch((err)=>{
                    console.error("C2: "+err);
                });
            })
            .catch((err)=>{
                console.error("C1: "+err);
            });
        })
        .catch((err)=>{
            console.error("B2: "+err);
        });
    })
    .catch((err)=>{
        console.error("B1: "+err);
    });
});

admin.get('/info_students/:email',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    Student.find().where('studentemail').equals(req.params.email).then((student)=>{
        Self.find().where('studentemail').equals(req.params.email).then((selfStudent)=>{
            English_test.find().where('studentemail').equals(req.params.email).then((english)=>{
                res.render('info_students',{student:student, selfStudent: selfStudent, english:english});
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    .catch((err)=>{
        console.error(err);
    })
})

admin.get('/comments',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    InterFeedback.find().then((comment)=>{
        res.render('comments',{comment:comment});
    }).
    catch((err)=>{
        console.error(err);
    });
});

//---------------------------
admin.get('/add_feedback',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    res.render('add_internship_feedback');
});

admin.get('/add_user',(req,res)=>{
    if(!req.session.email){
        res.redirect('/');
    }
    res.render('new_admin_form');
});

admin.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
});


module.exports = admin;