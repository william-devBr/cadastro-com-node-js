
const express = require("express")
const bodyParser = require("body-parser")
//const hello  = require("./functions")
const app = express()
const handlebars = require('express-handlebars')
//const pathFiles =__dirname +"/public/";

/** DATABASE */
const db = require("sequelize")
const sequelize = new db('test','root','',{
    host:'localhost',
    dialect : 'mysql'
})
/** template engine handlebars */
app.engine('handlebars', handlebars.engine({defaultLayout : 'main'}))
app.set('view engine','handlebars')
/* BODY PARSER */
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// app.get app.post
app.get('/',function(req,res){
    res.send('página home')
})
app.get('/cad',(req,res)=>{
    res.render('form')
})
app.post('/formulario',(req,res)=>{
    const {titulo, conteudo} = req.body
   res.send('titulo ' + titulo + ' '+ 'conteudo '+ conteudo)
})

app.listen(3000, function(){
    console.log('listen')
})

