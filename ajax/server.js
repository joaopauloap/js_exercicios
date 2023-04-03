const bodyParser = require('body-parser');
const express = require('express'); 
const app = express();

app.use(express.static('.'))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.post('/formulario', function(req,res){
//    const nome = req.body.nome
//    const sobrenome = req.body.sobrenome
    
    res.send({
//        nome:nome,
//        sobrenome:sobrenome,
        id:1,
        ...req.body
    })
})

app.get('/teste', function(req,res){
    res.send('OK')
})

app.get('*', function(req,res){
    res.send(`<div style="text-align:center;"><h2>ERRO 404</h2><h3>NÃO ENCONTRADO<h3></div>`)
})

console.log('Server Running on port 5000!')
app.listen(5000);