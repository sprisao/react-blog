const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://BruceChoe:Brucechoe123!@cluster0.waqcs.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {useNewUrlParser: true }).then(() =>console.log('DB connected'))

app.get('/', (req,res)=>{
    res.send('hello')
});



app.listen(5000);