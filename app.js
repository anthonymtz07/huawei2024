/*Requerimientos*/
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const user = require('./user/user');
const mongodbPath = require('./user/mongoDB');
const admin = require('./user/admin');

//MongoDB
mongoose.connect('mongodb+srv://jesusAntonio:eVXPcFZnMtGbbEtS@cluster0.vmn8kj3.mongodb.net/huawei2024?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('MongoDB is here')
})
.catch(()=>{
    console.log('Sorry, MongoDB has some problems...')
});


/*Rutes*/
app.use('/static', express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: '*****',
    resave: true,
    saveUninitialized: true
}))

/*Principal Route*/
app.use('/',user);
/*Mongo operations route*/
app.use('/mongodb',mongodbPath);
/*Admin operations*/
app.use('/admin',admin);



/*Port*/
app.listen(process.env.PORT || 8080,()=>{
    console.log('Huawei is here 8080')
});