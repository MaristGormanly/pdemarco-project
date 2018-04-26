function pace(name, miles, healthChange) {
	this.name = name;
	this.miles = miles;
	this.healthChange = healthChange;
}

var paces = [];
paces.push(new pace("Steady", 2, 0));
paces.push(new pace("Strenuous", 3, -3));
paces.push(new pace("Grueling", 4, -8));
paces.push(new pace("Resting", 0, 5));

exports.getPace = function() {
	return paces[2];
}

exports.getAllPaces = function() {
	return paces;
}

