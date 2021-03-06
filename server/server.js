require('./config/config.js');

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', function(req, res){
	res.json('get usuario');
});

app.post('/usuario', function(req, res){

	let body = req.body;
	if(body.nombre === udefined){
		res.status(400).json({
			ok: false,
			mensaje: 'el nombre es necesario'
		});
	}else{
		res.json({
			persona:body
		});
	}
});

app.delete('/usuario', function(req, res){
	res.json('delete usuario');
});

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env.PORT, () => {
	console.log('escuchando puerto : ', 3000);
});