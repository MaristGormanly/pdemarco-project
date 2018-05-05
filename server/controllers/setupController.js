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

var startGame3 = "<p>What are the first names of the other members of your party?</p>" 
	+ "Player Name: <input id=\"player1\" /><br/>"
	+ "Player Name: <input id=\"player2\" /><br/>"
	+ "Player Name: <input id=\"player3\" /><br/>"
	+ "Player Name: <input id=\"player4\" /><br/>"
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

var startGame5 = "<p>Here are your options</p>"
	+ "<ol id=\"professionItem\">Profession: </ol>"
	+ "<ol id=\"wagonLeaderItem\">Wagon Leader: </ol>"
	+ "<ol id=\"membersItem\">Members: </ol>"
	+ "<ol id=\"monthItem\">Starting Month: </ol>";
	+ "<input type=\"button\" class=\"button-1\" id=\"page3sub\" value=\"Next\" />";
	
	

exports.startGameScreens.push(startGame1);
exports.startGameScreens.push(startGame2); 
exports.startGameScreens.push(startGame3); 
exports.startGameScreens.push(startGame4); 
exports.startGameScreens.push(startGame5);

exports.getGameScreen = function(req, res) { 
	console.log("testing!");
	var gameScreen = exports.startGameScreens[req.params.id];
	res.setHeader('Content-Type', 'application/json'); 
	res.send(gameScreen);
};

exports.saveProfession = function(req, res) {
console.log("testing");
gameData.getGameData.playerProfession = req.body.profession;

res.setHeader('Content-Type', 'text/plain');
res.send(gameData.getGameData.playerProfession); 
};

exports.wagonLeader = function(req, res) {
console.log(req.body.names);
gameData.getGameData.playerNames = req.body.names;

res.setHeader('Content-Type', 'text/plain');
res.send(gameData.getGameData.playerNames);
};

exports.members= function(req, res) {
console.log(req.body.names1);
gameData.getGameData.playerNames1 = req.body.names;

res.setHeader('Content-Type', 'text/plain');
res.send(gameData.getGameData.playerNames);
};

exports.saveMonth = function(req, res) {
console.log(req.body.month);
gameData.getGameData.startMonth = req.body.names;

res.setHeader('Content-Type', 'text/plain');
res.send(gameData.getGameData.startMonth);
};

