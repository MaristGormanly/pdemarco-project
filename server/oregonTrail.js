const express = require('express')
const app = express()

//Links all webpages to each other 

app.use(express.static('client/public'));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: './client/views'});
})

app.get('/mainmenu', function(req, res) {
	res.sendFile('mainmenu.html', {root: './client/views'});
})

app.get('/trail', function(req, res) {
	res.sendFile('trail.html', {root: './client/views'});
})

app.get('/topten', function(req, res) {
	res.sendFile('topten.html', {root: './client/views'});
})

app.get('/setup', function(req, res) {
	res.sendFile('setup.html', {root: './client/views'});
})

app.get('/game', function(req, res) {
	res.sendFile('game.html', {root: './client/views'});
})


//When port is open and working
app.listen(1337, () => console.log('Listening on port 1337!'))