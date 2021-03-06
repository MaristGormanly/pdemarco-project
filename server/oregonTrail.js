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

var gameData = require('./models/gameData');
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

app.route('/api/resetGame')
	.get(gameController.resetGame);

app.route('/api/getRandomWeather')
	.get(gameController.getRandomWeather);

app.route('/api/getAllWeather')
	.get(gameController.getAllWeathers);
	
app.route('/api/getGroupHealth')
	.get(gameController.getGroupHealth);

app.route('/api/getAllPaces')
	.get(gameController.getAllPaces);
	
app.route('/api/getPace')
	.get(gameController.getPace);
	
app.route('/api/setup/screen/:id') 
	.get(setupController.getGameScreen);
	
app.route('/api/setup/profession') 
	.post(setupController.saveProfession);
	
app.route('/api/setup/saveWagonLeader')
	.post(setupController.wagonLeader);
	
app.route('/api/setup/saveMembers')
	.post(setupController.members);
	
app.route('/api/setup/month')
	.post(setupController.saveMonth);


//When port is open and working
	app.listen(1337, () => console.log('Listening on port 1337!'));