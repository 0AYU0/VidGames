var onebutton;
var twobutton;
var threebutton;
var fourbutton;
var img;
var second;
var third;
var fourth;
var fifth;
var EsportsRevenue;
var y = 0;
var speed = 3;
var x = 0;
var i = 0;
let bubbles = [];
function preload() {
  theImages = [loadImage("mario.png"), loadImage("dance.gif"), loadImage("Sonic_the_Hedgehog_Rush_Adventure.png"), loadImage("NSMBWiiCoin.png")];
  //img = loadImage("mario.png");
  //second = loadImage("dance.gif");
  third = loadImage("green-pixels.jpeg");
  //fourth = loadImage("Sonic_the_Hedgehog_Rush_Adventure.png");
  //fifth = loadImage("NSMBWiiCoin.png");
  EsportsRevenue = loadImage("EsportsRevenue.png");
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-2.5, 2.5);
    this.y = this.y + random(-2.5, 2.5);
  }

  condition(){
    if(x > canvas.width){
      for(let i = 0; i < 15; i++){
      this.x = this.x - 5
      }
    }
    if(y > canvas.width){
      for(let i = 0; i < 15; i++){
      this.y = this.y - 5
      }
    }
    if(x > this.r){
      for(let i = 0; i < 15; i++){
      this.x = this.x + 5
      }
    }
    if(y < this.r){
      for(let i = 0; i < 15; i++){
      this.y = this.y + 5
        }
      }
    }

  show() {
    strokeWeight(4);
    noFill();
    stroke(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.x, this.y, this.r * 2);
  }
}

function setup() {
  canvas = createCanvas(screen.width, screen.height);
  fill(78, 200, 180)
  stroke(78, 200, 180);
  textFont("Courier New", 70);
  textAlign(CENTER);
  text("The Economics of Video Games", 325, 75, 600, 300);
  onebutton = createButton('START');
  onebutton.position((screen.width/2)-140, 320);
  onebutton.mousePressed(page2);
  onebutton.size(100, 50);
  //onebutton.style("padding", "25px 100px");
  //onebutton.style("font-size", "24px");
  //onebutton.style("text-align", "center");
  //onebutton.style("background-color", "#4CAF50");
}

/*function start(){
  canvas = createCanvas(screen.width, screen.height);
  //image(third, 0, 0, screen.width, screen.height);
  //image(theImages[0], 30, 400, 300, 221);
  //image(theImages[1], 30, 50, 250, 250);
  fill(78, 200, 180)
  stroke(78, 200, 180);
  textFont("Courier New", 70);
  textAlign(CENTER);
  text("The Economics of Video Games", 325, 75, 600, 300);
  onebutton = createButton('START');
  onebutton.position((screen.width/2)-140, 320);
  onebutton.mousePressed(page2);
  onebutton.size(100, 50);
  onebutton.style("padding", "25px 100px");
  onebutton.style("font-size", "24px");
  onebutton.style("text-align", "center");
  onebutton.style("background-color", "#4CAF50");
}*/

function page1(){
  canvas = createCanvas(screen.width, screen.height);
  textFont("Courier New", 70);
  textAlign(CENTER);
  text("The Economics of Video Games", 325, 75, 600, 300);
  onebutton = createButton('START');
  onebutton.position((screen.width/2)-140, 320);
  onebutton.mousePressed(page2);
  onebutton.size(100, 50);
}

function page2(){
  onebutton.remove();
  image(third, 0, 0, screen.width, screen.height);
  for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
  }
  stroke(0, 0, 0);
  text("What is eSports?", 10, 15, 200, 50)
  twobutton = createButton('Other');
  twobutton.position(1150, 600);
  twobutton.mousPressed(page3);
}

function page3(){
  twobutton.remove();
  image(third, 0, 0, screen.width, screen.height);
  text("eSports", 325, 50, 600, 300);
  image(EsportsRevenue, screen.width*0.25, screen.height*0.2, screen.width*0.5, screen.width*0.5*0.716);
  threebutton = createButton('Other');
  threebutton.position(900, 600);
  threebutton.mousePressed(animation);
  threebuttonbutton.size(100, 50);
}

function page4(){
  threebutton.remove();
  image(third, 0, 0, screen.width, screen.height);
}

function animation(){
  threebutton.remove();
  clear();
    background(0, 0, 0);
    stroke(255);
    strokeWeight(4);
    noFill();
    for(x = 0; x<screen.width; x++){
      ellipse(x, y, 100, 100);
      if (y > screen.height-150) {
        speed = -3;
      }
      y=y+speed
      if (y < 50) {
        speed = 3;
      }
    }
}

function draw(){
  for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
  }
}

function mousePressed() {
  /*  i = i + 1;
  if (i == theImages.length) {
    i = 0;
  }*/
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

/*function setup() {
  createCanvas(screen.width, screen.height);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  for(x = 0; x<screen.width; x++){
    ellipse(x, y, 100, 100);
    if (y > screen.height-150) {
      speed = -3;
    }
    y=y+speed
    if (y < 50) {
      speed = 3;
    }

  }
}*/
