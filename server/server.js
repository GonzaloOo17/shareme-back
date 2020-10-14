require('./config/config');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/usuario', function (req, res) {
    res.json('Hello usuario')
  })

  app.post('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    })
  })

  app.post('/usuario/:id', function (req, res) {
    let body = req.body;

    res.json({
        body
    })
  })


  app.post('/usuario', function (req, res) {
    res.json('Hello usuario')
  })
 
app.listen(3000)