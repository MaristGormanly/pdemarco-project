

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
	res.setHeader('Content-Type', 'application/json');
	res.send(gameData.getGameData)
}

	function deathCheck (percentage) {
	for (i = 0; i < gameData.getGameData.playerNames.length; i++) {
		var rand = Math.floor(Math.random() * 100)
			if (rand < percentage) {
				gameData.getGameData.playerStatus[i] = false;
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


