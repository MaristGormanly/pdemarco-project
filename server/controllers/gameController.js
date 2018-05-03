var terrain = require('../models/terrain');
var gameData = require('../models/gameData');
var pace = require('../models/pace');
var weather = require('../models/weather');

// var localGameData = gameData.getGameData();

exports.getRandomTerrain = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(terrain.getRandomTerrain());
}

exports.getAllTerrains = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(terrain.getAllTerrains());
}

exports.getRandomWeather = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(weather.getRandomWeather());
}

exports.getAllWeathers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(weather.getAllWeathers());
}

exports.getGroupHealth = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getGameData.getGroupHealth());
 }

exports.getAllPaces = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getAllPaces());
}

exports.getPace = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getPace());
}

exports.getGameData = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getGameData);
}

exports.updateGame = function(req, res) {
	gameData.getGameData.currentMessage = "";
	gameData.getGameData.groupHealth += gameData.getGameData.pace.healthChange;
	gameData.getGameData.groupHealth += gameData.getGameData.weather.healthChange;
		
	if (gameData.getGameData.groupHealth >= 100) {
		gameData.getGameData.groupHealth = 100; 
	} else if (gameData.getGameData.groupHealth < 0) {
		gameData.getGameData.groupHealth = 0;
	}
	
	if (gameData.getGameData.groupHealth > 0) {
		gameData.getGameData.terrain = terrain.getRandomTerrain();
		gameData.getGameData.weather = weather.getRandomWeather();
		gameData.getGameData.daysOnTrail += 1;	
		gameData.getGameData.milesTraveled += gameData.getGameData.pace.miles;
	} 
	
	if (gameData.getGameData.daysOnTrail > 45) {
		gameData.getGameData.currentMessage = "You ran out of days. You Lost.";
	} else if (gameData.getGameData.milesTraveled >= 500) { 
		gameData.getGameData.currentMessage = "You have completed the 500 mile journey. You won.";
	}

	if (gameData.getGameData.groupHealth >= 80) {
		} else if (gameData.getGameData.groupHealth < 80 && gameData.getGameData.groupHealth >= 50) {
		} else if (gameData.getGameData.groupHealth < 50 && gameData.getGameData.groupHealth >= 20) {
			deathCheck(3);
		} else if (gameData.getGameData.groupHealth < 20 && gameData.getGameData.groupHealth > 1) {
			deathCheck(10);
		} else if (gameData.getGameData.groupHealth < 1) {
			for (i = 0; i < gameData.getGameData.playerNames.length; i++) {
				gameData.getGameData.playerStatus[i] = false;
			}
			gameData.getGameData.currentMessage = "Everyone has died. You have lost";
	}	
	
var rand = Math.floor(Math.random() * 30)
	console.log(rand);
	if (rand == 1) {
		gameData.getGameData.currentMessage = "You cross a river safely and shorten your trip"
		+ "(Gain 3 extra miles)";
		gameData.getGameData.milesTraveled += 3;
	} else if (rand == 2) {
		gameData.getGameData.currentMessage = "You cross a river and lose your supplies " 
		+ "(Lose 5 days in trip)";
		gameData.getGameData.daysOnTrail += 5;
	} else if (rand == 3) {
		gameData.getGameData.currentMessage = "You have encountered a group of Indians "
		+ "and they show you a secret route (Gain 5 extra miles)";
		gameData.getGameData.milesTraveled += 5;
	} else if (rand == 4) {
		gameData.getGameData.currentMessage = "You have been robbed and spend 1 day gathering " 
		+ "back your supplies";
		gameData.getGameData.daysOnTrail += 1;	
	}
	
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getGameData)
}

	function deathCheck (percentage) {
	for (i = 0; i < gameData.getGameData.playerNames.length; i++) {
		var rand = Math.floor(Math.random() * 100)
			if (rand < percentage) {
				gameData.getGameData.playerStatus[i] = false;
				gameData.getGameData.currentMessage = gameData.getGameData.playerNames[i] + " has died"
			}
		}
	}

exports.resetGame = function(req, res) {
	gameData.getGameData.terrain = terrain.getRandomTerrain();
	gameData.getGameData.weather = weather.getRandomWeather();
	gameData.getGameData.groupHealth = 100;
	gameData.getGameData.daysOnTrail = 0;
	gameData.getGameData.milesTraveled = 0;
	gameData.getGameData.currentMessage = null;
	
	for (i = 0; i < gameData.getGameData.playerNames.length; i++) {
		gameData.getGameData.playerStatus[i] = true;
	}
	
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getGameData);
}
