/*
Title:
Imagined, Designed, and Programmed by: Alexander Yu
Date: 12/15/17
Description: 
Sources of ideas and inspiration (title, author, URL):
 * 
 *
 *
 
Includes code from (title, author, URL):
 * 
 * 
 *
 
<Check that variable and function names are easy to read and understand. eg. "squareButton" vs.
"shapeButton2">
<If you can't remember where you found some code, Google the text to find it.>
<Put your name in the name of this file!>
*/

//image(EsportsRevenue, screen.width*0.25, screen.height*0.2, screen.width*0.5, screen.width*0.5*0.716);

var buttons = ["onebutton", "twobutton", "threebutton", "fourbutton", "fivebutton"];
var theImages = ["img", "second", "third", "fourth", "fifth", "EsportsRevenue", "six"];
var buttonfeature = ["one", "two", "three", "four", "five"];
var buttonImage = ["oneimg", "twoimg", "threeimg", "fourimg"];
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var flag6 = false;
var flag7 = false;
var flag8 = false;
var flag9 = false;
var flag10 = false;
var flag11 = false;
var flag12 = false;
let bubbles = [];

function setup() {
beginning();
//blue page
fill(100,100,250);
rect(0,175,windowWidth,windowHeight);
}

function preload() {
  theImages[0] = loadImage("mario.png");
  theImages[1] = loadImage("dance.gif");
  theImages[2] = loadImage("green-pixels.jpeg");
  theImages[3] = loadImage("Sonic_the_Hedgehog_Rush_Adventure.png");
  theImages[4] = loadImage("NSMBWiiCoin.png");
  theImages[5] = loadImage("EsportsRevenue.png");
  theImages[6] = loadImage("Pong-logo-board.png")
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

function draw() {
  frameRate(10);
  var col = fill(255,255,255);
  buttons[0] = createButton('the beginnings');
    buttons[0].position(50, 125);
    buttons[0].mousePressed(beg);

  //buttons[1] = createButton('how much is it worth?');
    //buttons[1].position(182.5, 125);
    //buttons[1].mousePressed(worth);

  buttons[2] = createButton('eSports?');
    buttons[2].position(200, 125);
    buttons[2].mousePressed(esports);

  buttons[3] = createButton('the future of video games');
    buttons[3].position(320, 125);
    buttons[3].mousePressed(future);

  //buttons[4] = createButton('clear all bubbles (does not work)');
    //  buttons[4].position(window.width-100, 50);
    //buttons[4].mousePressed(conditions);

  /*if (flag1 == true && mouseIsPressed){
      beginning();
  } else if(flag2 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag3 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag4 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag5 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag6 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag7 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag8 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag9 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag10 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag11 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  } else if(flag12 == true && mouseIsPressed){
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
  }*/
}

function beg() {
  clear();
  cover();
  fill(48, 197, 255);
  rect(0, 200, windowWidth, windowHeight);
  stroke(0);
  fill(0);
  textSize(20);
  text('Although the first electronic digital computers were built during World War II, video games grew popular in the 1970s and 1980s, when home computer games and graphics on screens were introduced.', 0, 205, screen.width/2-30, 250);
  text('Gaming computers emerged in the early 1980s, and prices for games dropped as a result.', 0, 345, screen.width/2-30)
  text('Mobile games started to gain traction in the 2000s.  By 2003, revenues passed 1 billion dollars, and in 2007, 5 billion.  In 2008, half of apps sold were games.', 0, 380, screen.width/2-30, 700);
  image(six, 0, 0, 620, 360);
}

/*function conditions(){

    if (flag1 == true){
      beginning();
    } else if(flag2 == true){

    } else if(flag3 == true){

    } else if(flag4 == true){

    } else if(flag5 == true){

    } else if(flag6 == true){

    } else if(flag7 == true){

    } else if(flag8 == true){
    } else if(flag9 == true){

    } else if(flag10 == true){

    } else if(flag11 == true){

    } else if(flag12 == true){

    }
}*/

function worth() {
  clear();
  //sets the page up
  cover();
  //green page
  fill(150,250,170);
  rect(0,200,windowWidth,windowHeight);

  }

function esports() {
    clear();
    cover();
    fill(157, 191, 158);
    rect(0,200,windowWidth,windowHeight);
    fill(0);
    stroke(0);
    textSize(15);
    text('eSports, or electronic sports, take the form of organized competitions by professional gamers.', 0, 215);
    text('The first video game competition took place in 1972, at Stanford, for the game spacewar.  The winner received a subscription for the magazine , Rolling Stone.  In the 1990s, the internet boosted the number of players.', 0, 220, screen.width/2+20, 500);
    text('During the 2000s, televised eSports grew.  In South Korea, 24-hour TV cable stations for eSports were televised.  Elsewhere, it was much more sporadic, but stations like ESPN and CBS still held shows.  This helped rise the popularity more, leading to the boom.  The number of tournaments grew twenty-six fold from 10 in 2000 to 260 in 2010.', 0, 285, screen.width/2+20, 500);
    text('Now, games are typically watched online, using streaming services like Twitch and YouTube.  In 2013, over 12 billion hours were watched on the service, and those numbers have risen as video game producers see the potential of their products.', 0, 390, screen.width/2+20, 500);
    text('Stadiums like the Staples Center have been sold-out to watch these events.  Companies are creating college outreach programs, and some schools have recgonized eSports players as varsity-level athletes and given them scholarships.', 0, 460, screen.width/2+20, 600);
    text('The market for video games, specifically eSports has exploded since then.  The market was worth about 500 million dollars in 2016, and is on the rise.  Other companies, including athletes and NBA teams, are getting involved.  The Houston Rockets, Cleveland Cavaliers and Golden State Warriors all have teams, and stars like Shaquille ONeal have also invested in the business, one that will continue to grow for a while.', 0, 530, screen.width/2+20, 700);
  }



function future() {
    clear();
    cover();
    fill(217, 229, 214);
    rect(0,200,windowWidth,windowHeight);
    fill(0);
    stroke(0);
    textSize(15);
    text('There are many potential features that will affect video games, but also the wide world out there.',0, 215, window.width, 275);
    text('1 - Virtual reality, or VR, is becoming more common.  Though it is mainly used for single player games, heads of companies like Oculus and Sony see a future of VR that will become more collaborative, and perhaps multiplayer VR games will emerge.  Beyond gaming, it is also useful to control robotic arms in NASA, educate people about distracted driving, and help prepare surgeons before having to do a procedure.', 0, 270, window.width, 500);
    text('2 - Haptic technology is the process of receiving and understanding information in the virtual world via your sensations.  The vibration of a phone from a text, or the controller of a PS4 is one example of haptics.  This is able to advance virtual reality by giving the player a feeling as if they were in the game, as the character.  It makes the experience more real.  Haptics can help people with meditation, feel the blood pressure of a heart to assist with a procedure, or help with different simulators.' , 0, 400, window.width, 650);
    text('3 - Augmented reality is technology that superimposes a computer-generated image on a view of the real world.  It has been present in games like PokemonGO, and may be presented in our technology as Apple may have plans to create a phone with a camera specifically for this.  It allows players to experience game play in a real world environment, as it enhances the perception of reality rather than creating a new one, as virtual reality would do.  This can be helpful with remodeling a house, visualize and modify the structure of cars, and troubleshoot things like assembly machines in factories.',0, 700, screen.width, screen.height);
    //text("Potential Features in the Future of Gaming")
    //text("Multiplayer VR")
    //text("Virtual reality, or VR, is becoming more common.  Heads of companies like Oculus and Sony see a future of VR that will become more collaborative, and perhaps multiplayer VR games will emerge.")
    //text("Augumented Reality")
    //text("Augumented reality has already been present in games like PokemonGO, but ")
    //text("Haptic Technology")
    //text("Haptic technology is the process of receiving and understanding information in the virtual world via your sensations.  It's commonly shown through the vibration of your phone or PS4, or in more intense circumstances, through a robot who senses the pressure of someone's heart and sends that back to a surgeon.")
    //text("In video games, ")
    buttonfeature[0] = createButton('Multiplayer VR');
      buttonfeature[0].position(50, 125);
      buttonfeature[0].mousePressed(multiplayer);

    buttonfeature[1] = createButton('Augumented Reality');
      buttonfeature[1].position(182.5, 125);
      buttonsfeature[1].mousePressed(reality);

    buttonfeature[2] = createButton('Haptic Technology');
      buttonfeature[2].position(350, 125);
      buttonfeature[2].mousePressed(haptic);

    buttonfeature[3] = createButton('Multiplayer VR');
      buttonfeature[3].position(500, 125);
      buttonfeature[3].mousePressed(future);

}

function haptic(){


}

function cover() {
      createCanvas(windowWidth, windowHeight);
      background(255);
      noStroke();
      fill(204, 245, 172);
      rect(0,0,window.width,175);
      fill(0);
      rect(0, 175, window.width, 25)
      rect(0, 200, window.width,window.height);
      textSize(39);
      fill(0, 167, 225);
      text("The History of Video Games", 10,45);
      textSize(12);
      text("How they originated and their journey over time", 10, 70);
      textSize(12);
      text("An in-depth look into the past and back to the future", 10, 85);
  }

  function beginning(){
    cover();
    fill(255, 202, 177);
    text("welcome", window.width-50, window.height/2)
  };

  function fivebuttonfunc(){

  }

  function home() {
     clear();
     beginning();
   }

function mousePressed() {
     let r = random(10, 50);
     let b = new Bubble(mouseX, mouseY, r);
     bubbles.push(b);
}





