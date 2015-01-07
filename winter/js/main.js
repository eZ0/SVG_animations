var animateLine = function (path_class) {
	var path = document.querySelector(path_class);
	var length = path.getTotalLength();
	console.log(length);
	// Clear any previous transition
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';
};

animateLine('.winter');

animateLine('.path');
animateLine('.path1');
animateLine('.path2');
animateLine('.path3');
animateLine('.path4');
animateLine('.path5');
animateLine('.path6');