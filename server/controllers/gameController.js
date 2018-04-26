

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
	res.send(localGameData.getGroupHealth());
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
	res.send(localGameData);
}

exports.updateGame = function(req, res) {
	localGameData.terrain = terrain.getRandomTerrain();
	localGameData.weather = weather.getRandomWeather();
	localGameData.groupHealth += localGameData.pace.healthChange;
	localGameData.groupHealth += localGameData.weather.healthChange;
	
	var messages = localGameData.messages;
	
	
	if (localGameData.groupHealth >= 100) {
		localGameData.groupHealth = 100; 
	} else if (localGameData.groupHealth < 0) {
		messages.push("Done");
	}
	
	if (localGameData.daysOnTrail > 46) {
		localGameData.messages = ["You lost"];
	} else if (localGameData.milesTraveled >= 500) { 
		localGameData.messages = ["You won"];
	}

	localGameData.messages = [];

	localGameData.daysOnTrail += 1;
	
	localGameData.milesTraveled += localGameData.pace.miles;
	
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}





exports.resetGame = function(req, res) {
	localGameData.terrain = terrain.getRandomTerrain();
	localGameData.weather = weather.getRandomWeather();
	localGameData.groupHealth += 100;
	localGameData.daysOnTrail = 0;
	localGameData.milesTraveled = 0;
	
	
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}




