var scl = 20;

function Snake() {
	this.tail = [createVector(0, 0)];
	this.x_dir = 1;
	this.y_dir = 0;
	this.total = 1;

	this.update = function() {
		if (this.total === this.tail.length) { // ate nothing
			this.tail.push(createVector(this.tail[this.total - 1].x + this.x_dir*scl, this.tail[this.total-1].y + this.y_dir*scl));
			this.tail.shift();
		}
		else { // ate something
			this.tail.push(createVector(this.tail[this.total - 2].x + this.x_dir*scl, this.tail[this.total-2].y + this.y_dir*scl));
		}
	}

	this.setDirection = function(x, y) {
		this.x_dir = x;
		this.y_dir = y;
	}

	this.getDirections = function() {
		return (this.x_dir, this.y_dir);
	}

	this.show = function() {
		fill(255);
		for (i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
	}

	this.isAtPosition = function(pos){
		var d = dist(this.tail[this.total-1].x, this.tail[this.total-1].y, pos.x, pos.y);
		return d === 0;
	}

	this.grow = function() {
		this.total++;
	}

	this.isDead = function() {
		for (i = 0; i < this.total - 1; i++) {
			var pos = this.tail[i];
			var d = dist(pos.x, pos.y, this.tail[this.total-1].x, this.tail[this.total-1].y);
			if (d < 1) return true;
		}
		return false;
	}

	this.kill = function() {
		this.tail = [];
		this.total = 0;
	}

}
