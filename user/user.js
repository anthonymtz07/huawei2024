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


//Export
module.exports=rute;