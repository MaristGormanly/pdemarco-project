var terrain = require("./terrain");
var weather = require("./weather");
var weather = require("./pace");

function gameData() {
	this.groupHealth = 100;
	this.playerNames = ["Preston", "Raislan", "Aang", "Korra", "Suki"];
	this.playerStatus = true, true, true, true, true;
	this.playerProfession = "Farmer";
	this.playerMoney = 1000;
	this.startMonth = "January";
	this.milesTraveled = 0;
	this.currentPace = "steady";
	this.daysOnTrail = 0;
	this.weather = "cool";
	this.terrain = "desert";
	this.messages = []
}

exports.getGroupHealth = function() {
groupHealth = 100;
	if (paces[0]) { 
		groupHealth = groupHealth
	} else if (paces[1]) { 
		groupHealth =- 3
	} else if (paces[2]) {
		groupHealth =- 8
	} else { 
		groupHealth =+ 5
	}
	
	if (weathers[0]) {
		groupHealth =- 8
	} else if (weathers[1]) {
		groupHealth =- 3
	} else if (weathers[2]) {
		groupHealth =+ 1
	} else if (weathers[3]) {	
		groupHealth =+ 1
	} else if (weathers[4]) {
		groupHealth =- 5
	} else if (weathers[5]) {
		groupHealth =- 12
	} else if (weathers[6]) {
		groupHealth =- 4
	} else if (weathers[7]) {
		groupHealth =- 8
	} else if (weathers[8]) {
		groupHealth =- 15
	} else if (weathers[9]) {
		groupHealth =- 30
	} else { 
		groupHealth =- 3
	}

	return groupHealth;
}

exports.getDeathCheck = function() {
groupHealth = 100;
var players = ["player0","player1","player2","player3","player4"]
	
	if (groupHealth < 1) {
		for (var i = 0; i < 5; i++) {
			var rand = Math.floor(Math.random() * 100);
			if (rand < 90) { 
				return players[i] = true;
			}
		}
	
	} else if (groupHealth < 20) {	
		for (var i = 0; i < 5; i++) {
			var rand = Math.floor(Math.random() * 100);
			if (rand < 90) { 
				return players[i] = true;
			} else {
				return players[i] = false;
			}
		}
	
	} else if (groupHealth < 50) {
		for (var i = 0; i < 5; i++) {
			var rand = Math.floor(Math.random() * 100);
			if (rand < 97) { 
				return players[i] = true;
			} else {
				return players[i] = false;
			}
		}
	}  	
}

exports.getEnd = function() {
	var daysOnTrail;
	var milesTraveled;
	var lost = "Your party will be lost in the snowy mountains and eat each other";
	var win = "Your party won!";
	
	if (daysOnTrail > 46) {
		return lost;
	} else if (milesTraveled >= 500) { 
		return win
	}
}

exports.getGameData = function() {
	return new gameData();
}
