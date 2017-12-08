new p5();

var ele = document.getElementById("myContainer");
var eleStyle = window.getComputedStyle(ele);
/* Below is the width of ele */
var eleWidth = eleStyle.getPropertyValue("width");
var eleHeight = eleStyle.height;

var img, img1;
var b1, b2, c1, c2;
var a, b;
var cnv;
var position, velocity;

var rand;

function preload() {
  img = loadImage("jeff.png");
  img1 = loadImage("evan@2x.png");

}

function setup() {
  
  eleWidth.replace(/\px/g,"");
  
  var ewidth = eleWidth.replace(/px/g, "");
  var eheight = eleHeight.replace(/px/g, "");
  
  cnv = createCanvas(ewidth, eheight);
  cnv.parent("myContainer");

  // Define colors
  b1 = color('#F8C9C0');
  b2 = color('#AFC6D1');
  c1 = color('#AFC6D1');
  c2 = color(0, 102, 153);

  background(0);

  //img.resize(img.width/2, img.height/2);

  a = 0;
  b = 0;

  var l = lerpColor(b1, b2, .33);

  position = createVector(width/2, height/2);
  position2 = createVector(width/2-200, height/2-100);

  rand = random(-1, 1);

  //background(l);

  //image(img, 0, 0);
}

function draw() {
  noStroke();
  //fill(c2,0);
  //rect(0, 0, width, height);

  var xoff = map(noise(a), 0, 1, -2, 2);
  var yoff = map(noise(b), 0, 1, -.5, .5);
  var s = map(sin(a/100), -1, 1, .98, 2.00);

  velocity = createVector(xoff, yoff);


  push();
  tint(255, 2);

  imageMode(CENTER);
  scale(s);
  image(img1, position.x + xoff, position.y + yoff);
  image(img, position2.x + xoff, position2.y + yoff);

  position.add(velocity);
  position2.add(velocity);

  pop();

  if (mouseIsPressed){

    var bg = get();
    push();

    imageMode(CENTER);
    scale(rand);
    image(bg, width/2, height/2);


    pop();
  }



  a += 0.05;
  b += 0.03;
}

function mousePressed(){
  rand = random(0.90, 1.02);

  var bg = get();
    push();

    imageMode(CENTER);
    scale(rand);
    image(bg, width/2, height/2);


    pop();
}
