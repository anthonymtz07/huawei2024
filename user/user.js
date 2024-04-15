const express = require('express');
const rute = express.Router();
let InterFeedback = require('../models/internfeedback');

rute.get('/',(req,res)=>{
    res.render('index');
});

rute.get('/intership',(req,res)=>{
    res.render('internship')
});

rute.get('/login',(req,res)=>{
    res.render('login');
});

rute.get('/intern_form',(req,res)=>{
    res.render('intern_form');
});

rute.get('/interns_feedback',(req,res)=>{
    InterFeedback.find().then((interns)=>{
        res.render('interns_feedback',{interns:interns});
    })
    .catch((err)=>{
        console.log(err)
    });
});


rute.get('/news_page',(req,res)=>{
    res.render('news_page')
});



//Export
module.exports=rute;