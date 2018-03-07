var opacity = 0
var opacityLimit = 1;
var fadeEl = document.getElementId('fadeMe');
fadeEl.style.opacity = opacity;



function fade() {
	if(opaciy < opacityLimit) {
		fadeEl.style.opacity = opacity / 10;
		opacity++;
		setTimeout(fade, 100);
	}
}

fade();

function goToNextPage() {
	window.location = '/mainmenu';
}

fadeEl.addEventListener("click", goToNextPage);