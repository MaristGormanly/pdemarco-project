//var gameContainer = document.getElementById('gameContainer');

function getScreen(screenId) {
	fetch('/api/setup/screen/' + screenId).then(function(response) {
		if (response.status !== 200) {
			console.log(response.status + " msg: " + response.value); 
			return;
		} 
		response.text().then(function(data) {
			gameContainer.innerHTML = data; 
		})
	}); 
}

//var currentScreen = 0;
getScreen(0);
	
	
gameContainer.addEventListener("click", function(e) { 
	var targetElement = event.target || event.srcElement;
	if(targetElement.id == "bankerMenuItem") { 
		saveProfession("banker");
	}
	if(targetElement.id == "carpenterMenuItem") {
		saveProfession("carpenter"); 
	}
	if(targetElement.id == "farmerMenuItem") { 
		saveProfession("farmer");
	}
	if(targetElement.id == "differencesMenuItem") {
		console.log("learn more!"); 
	}		
//		currentScreen++;
//		gameScreen(); 
});
	
function saveProfession(profession) { 
	fetch('/api/setup/profession', 
	  {
		method:'post', 
		headers: {"Content-type": "application/json; charset=UTF-8" 
		},
		body: '{"profession": "' + profession + '"}'
			}).then(function(response) {
				if (response.status !== 200) {
					console.log('problem with ajax call! ' + 
					response.status + " msg: " + response.value);
					return; 
				} else { 
					getScreen(1);
				}
				console.log("profession " + profession + " saved!"); 
				});
			}		
						
						