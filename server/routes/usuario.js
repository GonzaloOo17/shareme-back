const express = require('express')
const app = express();

const Usuario = require('../models/usuario');


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/usuario', function (req, res) {
    res.json('Hello usuario')
})


app.post('/usuario/:id', function (req, res) {

    //let id = req.params.id;
    let body = req.body;

    res.json({
        body
    })
})


app.post('/usuario', function (req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        img: body.img,
        role: body.role
    })

    usuario.save( (err, usuarioDB) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }

        Response.json({
            ok: true,
            usuario: usuarioDB
        })
    } );

})

module.exports = app;