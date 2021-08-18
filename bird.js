// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
  this.y = height / 2;
  this.x = 120;

  this.gravity = 0.3;
  this.lift = -6;
  this.velocity = 0;
  this.scale = 0.4;

  this.show = function() {
    //fill(113,197,44);
    
    fill(2,34,13);
    head_rad = 6 * this.scale
    ellipse(this.x, this.y, 2 * head_rad, 16 * this.scale);
    fill(255);
    ellipse(this.x + 4 * this.scale, this.y - (4* this.scale), 3 * this.scale, 4 * this.scale);
    fill(0,62,100);
    //ellipse(this.x, this.y -4, 14, 1);
    body_rad = 12 * this.scale
    ellipse(this.x - (body_rad + head_rad), this.y, 2 * body_rad, 22 * this.scale);
    fill(0,62,100,63);
    if (frameCount %4 == 0){
      triangle(this.x - (head_rad + body_rad), this.y + 100 * this.scale, this.x - (head_rad + body_rad), this.y, this.x -(head_rad + body_rad + (20 * this.scale)) , this.y + 90 * this.scale);
      triangle(this.x + (head_rad + body_rad - (20 * this.scale)), this.y + 90 * this.scale, this.x - (head_rad + body_rad), this.y, this.x - (head_rad + body_rad - (2 * this.scale)), this.y + 100 * this.scale);
    }
    else{
    triangle(this.x - (head_rad + body_rad) , this.y - 100 * this.scale, this.x - (head_rad + body_rad), this.y, this.x - (head_rad + body_rad + (20 * this.scale)), this.y - 90 * this.scale);
    triangle(this.x + (head_rad + body_rad - (20 * this.scale)) , this.y - 90 * this.scale, this.x - (head_rad + body_rad), this.y, this.x - (head_rad + body_rad - (2 * this.scale)), this.y - 100 * this.scale);
    }
    fill(0,62,100);
    rectMode(CENTER);
    secWidth = 30 * this.scale
    rect(this.x - ((body_rad * 2) + head_rad + (secWidth/2)), this.y, secWidth, 8 * this.scale, 10 * this.scale);
    rect(this.x - ((body_rad * 2) + head_rad + (secWidth/2) + secWidth), this.y, secWidth, 6 * this.scale, 10 * this.scale);
    //fill(0,62,100);
  
    rect(this.x - ((body_rad * 2) + head_rad + (secWidth/2) + secWidth + secWidth), this.y, secWidth, 6 * this.scale, 10 * this.scale);
    rect(this.x - ((body_rad * 2) + head_rad + (secWidth/2) + secWidth + secWidth +  secWidth) * this.scale, this.y, secWidth, 5 * this.scale, 10 * this.scale);


  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
