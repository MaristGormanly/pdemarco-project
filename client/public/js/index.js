$(function () {
    var $element = $('h3');
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






$(document).ready(function() {
	$(document).keydown(function(e) {
      if (e.keyCode == '32') {
        window.location.href = 'http://localhost:1337/mainmenu';
      }
    });
  });