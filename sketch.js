// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

var gen_int = 75;
var plant_gen_int = 400;
var fly_gen_int = 200;
var frame_counter = 0;
var plant_frame_counter = 0;
var fly_frame_counter = 0;
var multiplier_val = 0.9;
var bird;
var pipes = [];
var plants = [];
var flies = [];
var max_vol = 0;
var min_vol = 100;
var start = false;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
var y_last = 200;
function preload() {
  song = loadSound('NightOwl.mp3');
}


function setup() {
   // Define colors
   b1 = color(143,153,118);
   b2 = color(255,255,255);
 
  let cnv = createCanvas(300, 400);
  cnv.mousePressed(canvasPressed);
  bird = new Bird();
  pipes.push(new Pipe());
  plants.push(new Plant());
  flies.push(new fly());
  volobj = new Volumeobj();
  frameRate(30);
  
  
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  if(!start){
      song.setVolume(0.6);
      song.play();
      start = true;
      console.log('MUSIC');
  }
  else{
    bird.up();
  }
}


function draw() {
   
  if(start){
  // Background
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
  
  volobj.updatevol();
  var vol = volobj.vol;
  var y_pos = map(vol, 0, 0.5, height, 0);
  var sun_pulse =map(vol, 0, 0.5, 0, 20);
  if (abs(y_last - y_pos) > 3){
    if (y_last - y_pos <  0){
      y_pos = y_last + 3;
    }
    else{
      y_pos = y_last -3;
    }
  }
  //y_pos = y_pos + y_change;
  
  y_last =y_pos;

  
  for (var i = flies.length - 1; i >= 0; i--) {
    
    if (flies[i].offscreen()) {
      flies.splice(i, 1);
    }
    else{
      flies[i].show(y_pos - 10);
    flies[i].update();

    if (flies[i].hits(bird)) {
      flies.splice(i, 1);
      bird.scale += 0.1;
    }

    }

  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      bird.scale = 0.4;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  for (var i = plants.length - 1; i >= 0; i--) {
   
      push();
      translate(plants[i].x,height-20);
  
      branch(plants[i].stem);
      pop();
      plants[i].update();
  
      if (plants[i].offscreen()) {
        plants.splice(i, 1);
      }
    }
  


  bird.update();
  bird.show();
 
  //lake
  fill(9,100, 125,63);
  rectMode(CORNER);
  rect(0, height - 20, width, 20);
  //sun
  fill(255, 165, 0, 50);
  circle(160, 144, 120 + sun_pulse);
  fill(255, 100, 0, 100);
  circle(160, 144, 100 + sun_pulse);


  //create new piples

  if (frame_counter == gen_int) {
    pipes.push(new Pipe(y_pos));
    gen_int = floor(random(60,90));
    frame_counter = 0;
  }
  else{
    frame_counter += 1;
  }


//create new plants

if (plant_frame_counter == plant_gen_int) {
  plants.push(new Plant());
  gen_int_plant = floor(random(300,600));
  plant_frame_counter = 0;
}
else{
  plant_frame_counter += 1;
}

//create new flies

if (fly_frame_counter == fly_gen_int) {
  flies.push(new fly());
  fly_int_plant = floor(random(50,150));
  fly_frame_counter = 0;
}
else{
  fly_frame_counter += 1;
}
}
else{
  // Background
 
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
  //push();
  //translate(width / 2,height);
  //welcome_branch(100);
  //pop();
  
}
}





function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function branch(len){
  angle = 0.48
  stroke(23,82,0,100);
  strokeWeight(len / 10);
  line(0,0,0,-len);
  translate (0,-len);
  if (len>12){
  push();
  rotate (angle);
  branch (len*0.67);
  pop();
  push();
  rotate(-angle);
  branch (len*0.67);
  pop();
  }

  //line(0,0,0,-len*0.67);
}

function welcome_branch(len){

  angle = 0.48;
  multiplier = random(0.8,1.2);
  stroke(23,82,0,100);
  strokeWeight(len / 10);
  line(0,0,0,-len);
  translate (0,-len);
  if (len>2){
  push();
  rotate (angle*multiplier);
  branch (len*0.67*multiplier);
  pop();
  push();
  rotate(-angle*multiplier);
  branch (len*0.67*multiplier);
  pop();
  }

  
}
