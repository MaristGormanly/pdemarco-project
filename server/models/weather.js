function weather(id, type, healthChange, mileChange, probability) {
	this.id = id;
	this.type = type;
	this.healthChange = healthChange;
	this.mileChange = mileChange;
	this.probability = probability;
}

exports.getNewWeather = function(id, type, healthChange, mileChange, probability) {
	return new weather(id, type, healthChange, mileChange, probability);
}

var weathers = [];
weathers.push(new weather(0, "Very Hot", -8, .7, .1));
weathers.push(new weather(1, "Hot", -3, .9, .1));
weathers.push(new weather(2, "Warm", 1, .1, .2));
weathers.push(new weather(3, "Cool", 1, .95, .1));
weathers.push(new weather(4, "Cold", -5, .8, .1));
weathers.push(new weather(5, "Very Cold", -12, .7, .1));
weathers.push(new weather(6, "Rain", -4, .6, .1));
weathers.push(new weather(7, "Heavy Rain", -8, .4, .05));
weathers.push(new weather(8, "Snow", -15, .3, .05));
weathers.push(new weather(9, "Blizzard", -30, .1, .05));
weathers.push(new weather(10, "Heavy Fog", -3, .5, .05));

exports.getRandomWeather = function() {
	var rand = Math.floor(Math.random() * 100); 
	if (rand < 10) { 
		return weathers[0];
	} else if (rand < 20) { 
	    return weathers[1];
	} else if (rand < 40) { 
	    return weathers[2];
	} else if (rand < 50) { 
	    return weathers[3];
	} else if (rand < 60) { 
	    return weathers[4];
	} else if (rand < 70) { 
	    return weathers[5];
	} else if (rand < 80) { 
	    return weathers[6];
	} else if (rand < 85) { 
	    return weathers[7];
	} else if (rand < 90) { 
	    return weathers[8]; 
	} else if (rand < 95) { 
		return weathers[9];
	} else { 
		return weathers[10];
	}
}


exports.getAllWeathers = function() {
	return weathers;
}


