const express = require('express');
const admin = express.Router();
let Student = require('../models/student');


admin.get('/student_information',(req,res)=>{
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


module.exports = admin;