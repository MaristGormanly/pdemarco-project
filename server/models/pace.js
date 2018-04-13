function pace(name, miles, healthChanged) {
	this.name = name;
	this.miles = miles;
	this.healthChanged = healthChanged;
}

exports.getPace = function(name, miles, healthChanged) {
	return new pace(name, miles, healthChanged);

}

var paces = [];
paces.push(new pace("Steady", 2, 0));
paces.push(new pace("Strenuous", 3, -3));
paces.push(new pace("Grueling", 4, -8));
paces.push(new pace("Resting", 0, 5));


exports.getCurrentPace = function() {
	//Get user pace choice
	//Switch pace from array
	return paces;
}

exports.getChangePace = function() {
	//Get user pace choice
	//Switch pace from array
	return paces;
}

exports.getAllPaces = function() {
	return paces;
}

