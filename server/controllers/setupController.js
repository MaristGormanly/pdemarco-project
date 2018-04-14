exports.resetGame = function(req, res) {
	localGameData.terrain = terrain.getRandomTerrain();
	localGameData.weather = weather.getRandomWeather();
	localGameData.groupHealth = 100;
	localGameData.daysOnTrail = 0;
	localGameData.milesTraveled = 0;
	localGameData.playerNames = null;
	playerStatus = true, true, true, true, true;
	playerProfession = null;
	playerMoney = null;
	startMonth = null;
	currentPace = null;
	localGameData.messages =[]
	
	
	res.setHeader('Content-Type', 'application/json');
	res.send(localGameData);
}