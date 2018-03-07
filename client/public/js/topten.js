$(document).ready(function() {
	$(document).keydown(function(e) {
      if (e.keyCode == '32') {
        window.location.href = 'http://localhost:1337/mainmenu';
      }
    });
  });