var gameContainer = document.getElementById('gameContainer');

function getScreen(screenId) {
	fetch('/api/setup/screen/' + screenId).then(function(response) {
		if (response.status !== 200) {
			return;
		}
		response.text().then(function(data) {
			gameContainer.innerHTML = data;
		})
	});
}

getScreen(0);

gameContainer.addEventListener("click", function(e) {
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "bankerMenuItem") {
			saveProfession("Banker");
			var chosenProfession = "bankerMenuItem";
		}
		if(targetElement.id == "carpenterMenuItem") {
			saveProfession("Carpenter");
			var chosenProfession = "carpenterMenuItem";
		}
		if(targetElement.id == "farmerMenuItem") {
			saveProfession("Farmer");
			var chosenProfession = "farmerMenuItem";
		}
		if(targetElement.id == "differencesMenuItem") {
			console.log("learn more!");
		}
});

gameContainer.addEventListener("click", function(e) {
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "page1sub") {
			wagonLeader(document.getElementById('player0').value);
			var chosenWagonLeader;
		}
});

gameContainer.addEventListener("click", function(e) {
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "page2sub") {
			members(document.getElementById('player1').value);
			members(document.getElementById('player2').value);
			members(document.getElementById('player3').value);
			members(document.getElementById('player4').value);
			var chosenMembers = ['player1', 'player2', 'player3', 'player4']
		}
});

gameContainer.addEventListener("click", function(e) {
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "marchItem") {
			saveMonth("March");
			var chosenMonth = "marchItem";
		} 
		if(targetElement.id == "aprilItem") {
			saveMonth("April");
			var chosenMonth = "aprilItem";
		}
		if(targetElement.id == "mayItem") {
			saveMonth("May");
			var chosenMonth = "mayItem";
		}
		if(targetElement.id == "juneItem") {
			saveMonth("June");
			var chosenMonth = "juneItem";
		}
		if(targetElement.id == "julyItem") {
			saveMonth("July");
			var chosenMonth = "julyItem";
		}
});

gameContainer.addEventListener("click", function(e) {
	var targetElement = event.target || event.srcElement;
		if(targetElement.id == "start") {
			window.location = "http://localhost:1337/trail";
		}
});

function saveProfession(profession) {
	fetch('/api/setup/profession', {
		method:'post',
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		body: '{"profession": "' + profession + '"}'
			}).then(function(response){
	if (response.status !== 200) {
		console.log('problem with ajax call! ' + response.status + 
		" msg: " + response.value);
	return;
	} else {
		getScreen(1);
	}
console.log("Profession " + profession + " saved!");
	});
}

function wagonLeader(name) {
	fetch('/api/setup/saveWagonLeader', {
		method:'post',
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		body: '{"names": "' + name + '"}'
			}).then(function(response){
	if (response.status !== 200) {
		console.log('problem with ajax call! ' + response.status + 
			" msg: " + response.value);
	return;
	} else {
		getScreen(2);
	}
console.log("Wagon Leader " + name + " saved!");
	});
}

function members(groupMembers) {
	fetch('/api/setup/saveMembers', {
		method:'post',
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},	
		body: '{"names": "' + groupMembers + '"}'
			}).then(function(response){
		if (response.status !== 200) {
		console.log('problem with ajax call! ' + response.status + 
			" msg: " + response.value);
	return;
	} else {
		getScreen(3);
	}	
console.log("Members " + groupMembers + " saved!");
	});
}

function saveMonth(month) {
	fetch('/api/setup/month', {
		method:'post',
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		body: '{"month": "' + month + '"}'
			}).then(function(response){
	if (response.status !== 200) {
		console.log('problem with ajax call! ' + response.status + 
			" msg: " + response.value);
	return;
	} else {
		getScreen(4);
	}
console.log("Month " + month + " saved!");
	});
}
