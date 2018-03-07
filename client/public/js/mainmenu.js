$(document).ready(function() {
	$(document).keydown(function(e) {
      if (e.keyCode == '49') {
        window.location.href = 'http://localhost:1337/setup';
      }
    });
  });
  
  $(document).ready(function() {
  	$(document).keydown(function(e) {
        if (e.keyCode == '51') {
          window.location.href = 'http://localhost:1337/topten';
        }
      });
    });




   
   
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
	  
    $(document).ready(function() {
    	$(document).keydown(function(e) {
		  if (e.keyCode == '52') {
		  	stopAudio(audio);
          }
        });
      });
  