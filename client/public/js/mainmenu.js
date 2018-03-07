//Goes to setup page when '1' key is pressed
$(document).ready(function() {
	$(document).keydown(function(e) {
    	if (e.keyCode == '49') {
      	  	window.location.href = 'http://localhost:1337/setup';
     	}
    });
  });

//NOT IN USE YET: Goes to learn about trails page page when '2' key is pressed
/*
$(document).ready(function() {
	$(document).keydown(function(e) {
     	if (e.keyCode == '50') {
        	window.location.href = 'http://localhost:1337/learn';
       	}
    });
  });
*/
  
//Goes to topten page when '3' key is pressed
$(document).ready(function() {
	$(document).keydown(function(e) {
    	if (e.keyCode == '51') {
        	window.location.href = 'http://localhost:1337/topten';
        }
    });
  });

//NOTE IN USE YET: Plays music when '4' key is hit, but user can abuse and keep playing over it
/*
$(document).ready(function() {
	$(document).keydown(function(e) {
		  if (e.keyCode == '52') {
		  	myAudio = new Audio('/music/OregonTrailMusic.mp3'); 
		  	myAudio.addEventListener('ended', function() {  	    
				this.currentTime = 0;
		  	    this.play();
		  	}, false);
		  	myAudio.play();
          }
        });
      }); 
*/