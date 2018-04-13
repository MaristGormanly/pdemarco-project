var terrain = require("./terrain");
var weather = require("./weather");
var weather = require("./pace");

function gameData() {
//this.groupHealth = gameData.getGroupHealth();
	this.playerNames = ["Preston", "Raislan", "Aang", "Korra", "Suki"];
	this.playerStatus = true, true, true, true, true;
	this.playerProfession = "Farmer";
	this.playerMoney = 1000;
	this.startMonth = "January";
	this.milesTraveled = 0;
	this.groupHealth = 100;
	this.currentPace = "steady";
	this.daysOnTrail = 0;
	this.currentWeather = weather.getRandomWeather();
	this.currentTerrain = terrain.getRandomTerrain();
	this.messages = []
}

exports.getPlayerProfession= function() {
	//Banker, Carpenter, or farmer
	return profession
}

exports.getPlayerNames= function() {
	//Get user choice for player name
	return []
}

exports.getPlayerMoney = function() {
	//Get current user money
	return 1000
}

exports.getStartMonth = function() {
	//Get start month user chooses
	return month 
}


exports.getGroupHealth = function() {
var groupHealth = 100
	
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
	if (groupHealth < 50) {
		var rand = Math.floor(Math.random() * 100);
		if (rand < 97 ) {
			return playerStatusOne = null
		}
		else if (rand < 97 ) {
			return playerStatusTwo = null
		}
		else if (rand < 97 ) {
			return playerStatusThree = null
		}
		else if (rand < 97 ) {
			return playerStatusFour = null
		}
		else if (rand < 97 ) {
			return playerStatusFive = null
		}	
	}
	
	if (groupHealth < 20) {
		var rand = Math.floor(Math.random() * 100);
		if (rand < 90 ) {
			return playerStatusOne = null
		}
		else if (rand < 90 ) {
			return playerStatusTwo = null
		}
		else if (rand < 90 ) {
			return playerStatusThree = null
		}
		else if (rand < 90 ) {
			return playerStatusFour = null
		}
		else if (rand < 90 ) {
			return playerStatusFive = null
		}	
	}
	
	if (groupHealth < 1) {
		
		return playerStatusOne = null
		return playerStatusTwo = null
		return playerStatusThree = null
		return playerStatusFour = null
		return playerStatusFive = null
		
		//End game message 
	}
	
}

exports.getMilesTraveled = function() {
	//Get current miles traveled
	//Get current pace 
	//Get current weather
	//Add current miles to pace and weather
	return  
}



exports.getGameData = function() {
	return new gameData();
}