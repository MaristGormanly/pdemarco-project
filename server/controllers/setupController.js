exports.startGameScreens = [];

var gameData = require('../models/gameData');

var startGame1 =  
	"<p>You may:</p>"
	+ "<ol id=\"setupQuestions1\" >"
	+ "<li id=\"bankerMenuItem\">Be a banker from Boston ($2000)</li>"
	+ "<li id=\"carpenterMenuItem\">Be a carpenter from Ohio ($1800)</li>"
	+ "<li id=\"farmerMenuItem\">Be a farmer from Illinois ($1500)</li>"
	+ "<li id=\"differencesMenuItem\">Find out the differences between the choices</li>" + "</ol>"
	+ "<div id=\"selectedOption\">What is your choice?</div>";

var startGame2 = "<p>What is the first name of the wagon leader?</p>"
	+ "Leader Name: <input id=\"player0\" />"
	+ "<input type=\"button\" class=\"button-1\" id=\"page1sub\" value=\"Next\" />";

var startGame3 = "<p>What are the first names of the other members of your party?</p>" + "Player Name: <input id=\"player1\" /><br />"
	+ "Player Name: <input id=\"player2\" /><br />"
	+ "Player Name: <input id=\"player3\" /><br />"
	+ "Player Name: <input id=\"player4\" /><br />"
	+ "<input type=\"button\" class=\"button-1\" id=\"page2sub\" value=\"Next\" />";

var startGame4 = "<p>It is 1848. Your jumping off place for oregon is Independence, Missouri. You must decide which month to leave Independence.</p>"
	+ "<ol id=\"setupQuestions2\" >"
	+ "<li id=\"marchItem\">March</li>"
	+ "<li id=\"aprilItem\">April</li>"
	+ "<li id=\"mayItem\">May</li>"
	+ "<li id=\"juneItem\">June</li>"
	+ "<li id=\"julyItem\">July</li>"
	+ "</ol>"
	+ "<div id=\"selectedOption\">What is your choice?</div>";

var startGame5 = "";

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2); 
exports.startGameScreens.push(startGame3); 
exports.startGameScreens.push(startGame4); 
exports.startGameScreens.push(startGame5);

exports.getgameScreen = function(req, res) { 
	console.log("testing!");
	var gameScreen = exports.startGameScreens[req.params.id];
	res.setHeader('Content-Type', 'application/json'); 
	res.send(gameScreen);
};

exports.saveProfession = function(req, res) {
console.log("testing");
gameData.gameSettings.playerProfession = req.body.profession;
console.log("params : " + req.params.playerId + " and " + req.params.playerName + 
" settings: " + game.gameSettings.playerNames[req.params.playerId]);
res.setHeader('Content-Type', 'text/plain');
res.send(gameData.gameSettings.playerProfession); };
