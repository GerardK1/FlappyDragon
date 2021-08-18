
function fly() {
   
    
    this.x = width;
    this.y = 0;
    this.speed = 1.5;
  
  
    this.hits = function(bird) {
  
      //update for head size
      hit = collidePointCircle(this.x, this.y, bird.x, bird.y, 25);
      if(hit) { 
      this.highlight = true;
      return true; 
      }
      this.highlight = false;
      return false;
    };
  
    this.show = function(y_pos) {

      this.y = y_pos;
      fill(0);
      ellipse(this.x , y_pos, 8, 4);
      fill(0,62,100,63);
      if (frameCount %4 == 0){
        triangle(this.x - 5, this.y - 8, this.x, y_pos, this.x , this.y - 12);
      }
      else{
        triangle(this.x, this.y - 9, this.x, y_pos, this.x +5, this.y - 14);
      }

    
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
  
