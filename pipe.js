// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Pipe(y_pos) {
  this.spacing = 50;
  this.top = y_pos;
  this.front_edge = random(20,50);
  this.back_edge = random(20,50);
  this.fill_colour = random(100,200);

  this.x = width;
  this.w = 80;
  this.speed = 6;

  this.highlight = false;

  this.hits = function(bird) {

    hit = collidePointTriangle(bird.x, bird.y,this.x - this.front_edge, height, this.x, this.top, this.x + this.back_edge , height);
    if(hit) { 
    this.highlight = true;
    return true; 
    }
    this.highlight = false;
    return false;
  };

  this.show = function() {
    fill(this.fill_colour);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    noStroke();
    triangle(this.x - this.front_edge, height, this.x, this.top, this.x + this.back_edge , height);
    //rect(this.x, 0, this.w, this.top);
    //rect(this.x, this.bottom, this.w, height);
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
