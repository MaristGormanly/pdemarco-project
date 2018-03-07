//Fade in and Fade out text
$(function () {
    var $element = $('a'||'h3');
    function fadeInOut () {
        $element.fadeIn(1000, function () {
            $element.fadeOut(1500, function () {
                $element.fadeIn(1500, function () {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});

//When user pressed spacebar key, pages goes to main menu page
$(document).ready(function() {
	$(document).keydown(function(e) {
      if (e.keyCode == '32') {
        window.location.href = 'http://localhost:1337/mainmenu';
      }
    });
  });