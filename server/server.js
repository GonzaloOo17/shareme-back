require('./config/config');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shareme', { useNewUrlParser: true }, (err,res)=>{
    if(err)
        throw err;

    console.log('BBDD Online');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/usuario'));



app.listen(process.env.PORT)