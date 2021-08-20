function Plant(){

this.x = width + 100;
this.stem = random(50,100);

this.speed = 4 * (this.stem /100);

this.update = function() {
    this.x -= this.speed;
  };

this.offscreen = function() {
    if (this.x < -200) {
      return true;
    } else {
      return false;
    }
  };

}
