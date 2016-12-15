var food;
var snake;

function setup() {
	createCanvas(600, 600);
	snake = new Snake();
	frameRate(10);
	pickFoodLocation();
}

function draw() {
	background(60);
	if (snake.isAtPosition(food)) {
		snake.grow();
		pickFoodLocation();
	}
	snake.update();
	snake.show();
	fill('red');
	rect(food.x, food.y, scl, scl);
	
	if (snake.isDead()) {
		snake.kill();
		alert("you're dead!");
	}
}

function pickFoodLocation() {
	cols = floor(width/scl);
	rows = floor (height/scl);
	food = createVector(floor(random(cols)) * scl, floor(random(rows)) * scl);
}

function keyPressed() {
	switch(keyCode) {
		case UP_ARROW:
			if (snake.getDirections() != (0, 1))
				snake.setDirection(0, -1);
			break;
		case DOWN_ARROW:
			if (snake.getDirections() != (0, -1))
				snake.setDirection(0, 1);
			break;
		case LEFT_ARROW:
			if (snake.getDirections() != (1, 0))
				snake.setDirection(-1, 0);
			break;
		case RIGHT_ARROW:
			if (snake.getDirections() != (-1, 0))
				snake.setDirection(1, 0);
			break;
		default:
			break;
	}
}
