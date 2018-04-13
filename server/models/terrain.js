function terrain(name, imageUrl) {
	this.name = name;
	this.imageUrl = imageUrl;
}

exports.getNewTerrain = function(name, imageUrl) {
	return new terrain(name, imageUrl);
}

var terrains = [];
terrains.push(new terrain("Valley", "/images/valley.jpg"));
terrains.push(new terrain("Mountain", "/images/mountain.jpg"));
terrains.push(new terrain("Forest", "/images/forest.jpg"));
terrains.push(new terrain("Desert", "/images/desert.jpg"));

exports.getRandomTerrain = function() {
	var rand = Math.floor(Math.random() * terrains.length);
	return terrains[rand];
}

exports.getAllTerrains = function() {
	return terrains;
}