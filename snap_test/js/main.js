var s = Snap('#svg');

var circle = s.circle(90, 100, 20);
circle.attr({
	fill: 'coral',
	stroke: 'coral',
	strokeOpacity: 0.3,
	strokeWidth: 10
});

//animating circle
function resize(){
	circle.animate({r:80},3000, function(){
		circle.animate({r:20}, 3000);
	});
}

//grouping two obj's
var circleA = s.circle(230, 100, 40);
var circleB = s.circle(250, 100, 40);

var circles = s.group(circleA, circleB);
circles.attr({
	fill: 'coral',
	fillOpacity: 0.6
});

//masking shapes with other shapes
var ellipse = s.ellipse(240, 100, 54, 20);
ellipse.attr({
	fill: 'coral',
	mask: circles
});

//animation by changing vertical radius
function blink(){
	ellipse.animate({ry:1}, 100, function(){
		ellipse.animate({ry:20}, 100);
	});
}

//Repeating animations
setInterval(blink, 3000);
setInterval(resize, 6000);
setInterval(glow, 3000);

// animating AE exported image
var creature = Snap('#creature');
var head = creature.select('#head');
var left_eye = creature.select('#b_x5F_eye');
var right_eye = creature.select('#s_x5F_eye');
var lp_eye = creature.select('#p_x5F_s_x5F_eye');
var rp_eye = creature.select('#p_x5F_b_x5F_eye');


function glow(){
	head.animate({fill: 'white' },1000, function() {
		head.animate({fill: 'coral' },1000);
	});
	move_eye();
}
function move_eye(){
	left_eye.animate({ry:0}, 100, function(){
		left_eye.animate({ry:2}, 100);
	});
	right_eye.animate({ry:2}, 100, function(){
		right_eye.animate({ry:4}, 100);
	});
	// console.log(mina.time());
}








