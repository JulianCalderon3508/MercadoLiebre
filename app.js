const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/register', (req,res)=>{  
    res.redirect('/');
});