const express = require('express')
const app = express()

//Links all webpages to each other 

app.use(express.static('client/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));

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


var topTenController = require('./controllers/topTenController');
var gameController = require('./controllers/gameController');
var setupController = require('./controllers/setupController');


app.route('/api/topTen')
	.get(topTenController.getTopScores)
	.post(topTenController.saveTopScore);

app.route('/api/getRandomTerrain')
	.get(gameController.getRandomTerrain);

app.route('/api/getAllTerrains')
	.get(gameController.getAllTerrains);	

app.route('/api/gameData')
	.get(gameController.getGameData);

app.route('/api/updateGame')
	.get(gameController.updateGame);

app.route('/api/getRandomWeather')
	.get(gameController.getRandomWeather);

app.route('/api/getAllWeather')
	.get(gameController.getAllWeathers);
	
//app.route('/api/getGroupHealth')
//	.get(gameController.getGroupHealth);

app.route('/api/getAllPaces')
	.get(gameController.getAllPaces);
	
//app.route('/api/getEnd')
//	.get(gameController.getEnd);
		
//app.route('/api/getDeathCheck')
//	.get(gameController.getDeathCheck);

//When port is open and working
	app.listen(1337, () => console.log('Listening on port 1337!'));