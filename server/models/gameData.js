var terrain = require("./terrain");
var weather = require("./weather");
var pace = require("./pace");

function gameData() {
	this.groupHealth = 100;
	this.playerNames = null;
	this.playerStatus = [true, true, true, true, true];
	this.playerProfession = null;
	this.playerMoney = 1000;
	this.startMonth = "January";
	this.milesTraveled = 0;
	this.pace = pace.getAllPaces()[1];
	this.daysOnTrail = 0;
	this.weather = weather.getRandomWeather();
	this.terrain = terrain.getRandomTerrain();
	this.currentMessage = null;
}

exports.getGameData = new gameData();



