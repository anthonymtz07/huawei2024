const express = require('express');
const rute = express.Router();

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
    res.render('interns_feedback')
});

rute.get('/news_page',(req,res)=>{
    res.render('news_page')
});

rute.get('/internMoreinformation',(req,res)=>{
    res.render('moreInformation_form');
});

rute.get('/englishTest',(req,res)=>{
    res.render('english_test');
});


//Export
module.exports=rute;