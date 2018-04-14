

var terrain = require('../models/terrain');
var gameData = require('../models/gameData');
var pace = require('../models/pace');
var weather = require('../models/weather');

var localGameData = gameData.getGameData();

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
	res.send(weather.getGroupHealth());
}

exports.getAllPaces = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(pace.getAllPaces());
}

exports.getGameData = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}

exports.updateGame = function(req, res) {
	localGameData.terrain = terrain.getRandomTerrain();
	localGameData.weather = weather.getRandomWeather();
//	localGameData.groupHealth = gameData.groupHealth();
	localGameData.deathCheck = gameData.getDeathCheck();
	localGameData.end = gameData.getEnd();
	localGameData.daysOnTrail += 1;
	localGameData.milesTraveled += 2;
	localGameData.messages =[]
	
	
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}



