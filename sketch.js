var buttons = ["History", "Blank", "eSports", "Future", "Home"];
var theImages = ["img", "second", "third", "fourth", "fifth", "EsportsRevenue", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "more", "then", "k"];
var buttonfeature = ["one", "two", "three", "four", "five"];
var buttonImage = ["oneimg", "twoimg", "threeimg", "fourimg"];
var frontButtons = ["one", "two", "three", "four", "front"];
var ebuttons = ["eSportsRevenue", "HighProfileInvestments", "SoccerInvestments", "WhyPopular"];
var futurebuttons = ["teslasuit", "guidevr", "three", "four"];
var historybuttons = ["Infographic", "Facts", "Snake", "Pong"];
var removeButton = ["beg", "eSports", "Future"]

function setup() {
    beginning();
}

var buttonPlacement= {
  one: 440,
  two: 490,
  three: 540,
  four: 590
}

var Alignments = {
  one: 5,
  two: 10,
  three: 210
}

function preload() {
    theImages[0] = loadImage("mario.png");
    theImages[1] = loadImage("dance.gif");
    theImages[2] = loadImage("green-pixels.jpeg");
    theImages[3] = loadImage("Sonic_the_Hedgehog_Rush_Adventure.png");
    theImages[4] = loadImage("NSMBWiiCoin.png");
    theImages[5] = loadImage("EsportsRevenue.png");
    theImages[6] = loadImage("Pong-logo-board.png");
    theImages[7] = loadImage("SpaceInvadeFIrst.jpg");
    theImages[8] = loadImage("4544481362a342e39417127f95999fd4.jpg");
    theImages[9] = loadImage("video-game-3.jpg");
    theImages[10] = loadImage("download (2).jpg")
    theImages[11] = loadImage("statistic_id490522_revenue-of-the-global-esports-market-2012-2020.png");
    theImages[12] = loadImage("light_grey_wallpaper_by_iamslowe-d5yqer5.png");
    theImages[13] = loadImage("oculus-army-2-1500x1000-1443621408-VOjq-full-width-inline.jpg");
    theImages[14] = loadImage("175275675-56a6ab5f5f9b58b7d0e431f1.jpg");
    theImages[15] = loadImage("teslasuit-vr.png");
    theImages[16] = loadImage("pong.png")
}

function cover() {//creates page, that becomes cover for each page
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
    frameRate(10);
    fill(204, 245, 172);
    rect(0, 0, window.width, 175);
    fill(0);
    rect(0, 175, window.width, 25)
    rect(0, 200, window.width, window.height);
    textSize(39);
    fill(0, 167, 225);
    text("The History of Video Games", 10, 45);
    textSize(12);
    text("How they originated and their journey over time", 10, 70);
    textSize(12);
    text("An in-depth look into the past and back to the future", 10, 85);
    textSize(8);
    textAlign(CENTER);
    text("Are there extra buttons?  Click on the respective button above to remove all buttons of that page.", window.width-300, 40, 100, 75);
    buttons[0] = createButton('The History of Video Games');
    buttons[0].position(50, 125);
    buttons[0].mousePressed(beg);
    
    buttons[2] = createButton('The Rise of eSports');
    buttons[2].position(300, 125);
    buttons[2].mousePressed(esports);

    buttons[3] = createButton('Technology of the Future');
    buttons[3].position(500, 125);
    buttons[3].mousePressed(future);

    buttons[4] = createButton('Home');
    buttons[4].position(window.width-75, Alignments.one);
    buttons[4].mousePressed(beginning);

    removeButton[2] = createButton('Remove History');
    removeButton[2].position(window.width-425, Alignments.one);
    removeButton[2].mousePressed(removeHistButtons);

    removeButton[3] = createButton('Remove eSports');
    removeButton[3].position(window.width-310, Alignments.one);
    removeButton[3].mousePressed(removeEButtons);

    removeButton[4] = createButton('Remove Future');
    removeButton[4].position(window.width-190, Alignments.one);
    removeButton[4].mousePressed(removeFutureButtons);
}

function removeHistButtons(){ //removes all buttons from 'HISTORY' tab
  historybuttons[0].remove();
  historybuttons[1].remove();
  historybuttons[2].remove();
  historybuttons[3].remove();

}

function removeEButtons(){ //removes all buttons from 'eSPORTS' tab
  ebuttons[0].remove();
  ebuttons[1].remove();
  ebuttons[2].remove();
  ebuttons[3].remove();
}

function removeFutureButtons(){ //removes all buttons from 'FUTURE' tab
  futurebuttons[0].remove();
  futurebuttons[1].remove();
  futurebuttons[2].remove();
  futurebuttons[3].remove();
}

function beg() { /page for history of video games
    frontButtons[0].remove();
    frontButtons[1].remove();
    frontButtons[2].remove();
    frontButtons[3].remove();
    clear();
    cover();
    fill(48, 197, 255);
    rect(0, 200, windowWidth, windowHeight);
    stroke(0);
    fill(0);
    textSize(17);
    textAlign(LEFT);
    text('Although the first electronic digital computers were built during World War II, video games grew popular in the 1970s and 1980s, when home computer games and graphics on screens were introduced.', Alignments.two, Alignments.three, screen.width / 2 + 20, 250);
    text('In the 1990s, Microsoft includes Solitaire with Windows 3.0.  As we know, Solitaire has become one of the most popular games ever, and it provides a gaming model for something games like Bejeweled, Minesweeper, or Sudoku.', Alignments.two, 300, screen.width / 2 + 20)
    text('Mobile games started to gain traction in the 2000s.  By 2003, revenues passed 1 billion dollars, and in 2007, 5 billion.  In 2008, half of apps sold were games.', Alignments.two, 355, screen.width / 2 + 20, 700);
    text('Throughout history, different forms of video games have attracted many people to start playing.', Alignments.two, 400, screen.width/2+20, 50);
    text('Motion-sensitive remotes appealed to many people who never played before, and it got people more active.', Alignments.two, 440, screen.width/2+20, 50);
    text('Social games like Farmville and mobile games like Angry Birds shake up the industry again, attracting more people.', Alignments.two, 480, screen.width/2+20, 50);
    text('Now, we live in an age where all types of games have been present.  There have been indie games, games made without a publisher, like Minecraft.  There have been Multiplayer Online Battle Arenas (MOBA)s, shooter games, freemiums, simulations, and many others.  And, well, video games are becoming more and more implemented into our lives.', Alignments.two, 540, screen.width/2+20);
    historybuttons[0] = createButton('Infographic on History of Video Games');
    historybuttons[0].position(window.width/2+320, buttonPlacement.one);
    historybuttons[0].mousePressed(infographic);

    historybuttons[1] = createButton('Facts about Video Games');
    historybuttons[1].position(window.width/2+320, buttonPlacement.two);
    historybuttons[1].mousePressed(facts);

    historybuttons[2] = createButton('Play Snake');
    historybuttons[2].position(window.width/2+320, buttonPlacement.three);
    historybuttons[2].mousePressed(snake);

    historybuttons[3] = createButton('Play Pong');
    historybuttons[3].position(window.width/2+320, buttonPlacement.four);
    historybuttons[3].mousePressed(pong);
}

function infographic(){
  window.open('https://www.forbes.com/sites/hnewman/2017/11/29/the-history-of-video-games-in-one-infographic/#4448e3b11a5c');
}

function facts(){
    window.open('https://electronics.howstuffworks.com/video-game6.htm');
}

function snake(){
  window.open('http://patorjk.com/games/snake/');
}

function pong(){
  window.open('https://pong-2.com/');
}

function esports() { //page for eSPorts
    frontButtons[0].remove();
    frontButtons[1].remove();
    frontButtons[2].remove();
    frontButtons[3].remove();
    clear();
    cover();
    fill(255);
    rect(0, 200, windowWidth, windowHeight);
    fill(0);
    stroke(0);
    image(theImages[12], 0, 200, window.width, window.width*0.625);
    textSize(15);
    textAlign(LEFT);
    text('eSports, or electronic sports, take the form of organized competitions by professional gamers.', 10, Alignments.three);
    text('The first video game competition took place in 1972, at Stanford, for the game spacewar.  The winner received a subscription for the magazine , Rolling Stone.  In the 1990s, the internet boosted the number of players.', Alignments.two, 220, screen.width / 2 + 20, 500);
    text('During the 2000s, televised eSports grew.  In South Korea, 24-hour TV cable stations for eSports were televised.  Elsewhere, it was much more sporadic, but stations like ESPN and CBS still held shows.  This helped rise the popularity more, leading to the boom.  The number of tournaments grew twenty-six fold from 10 in 2000 to 260 in 2010.', Alignments.two, 285, screen.width / 2 + 20, 500);
    text('Now, games are typically watched online, using streaming services like Twitch and YouTube.  In 2013, over 12 billion hours were watched on the service, and those numbers have risen as video game producers see the potential of their products.', Alignments.two, 390, screen.width / 2 + 20, 500);
    text('Stadiums like the Staples Center have been sold-out to watch these events.  Companies are creating college outreach programs, and some schools have recgonized eSports players as varsity-level athletes and given them scholarships.', Alignments.two, 460, screen.width / 2 + 20, 600);
    text('The market for video games, specifically eSports has exploded since then.  The market was worth about 500 million dollars in 2016, and is on the rise.  Other companies, including athletes and NBA teams, are getting involved.  The Houston Rockets, Cleveland CaAlignmentsiers and Golden State Warriors all have teams, and stars like Shaquille ONeal have also invested in the business, one that will continue to grow for a while.', Alignments.two, 530, screen.width / 2 + 20, 700);
    textAlign(CENTER);
    image(theImages[7], window.width / 2 + 30, Alignments.three, 262.5, 168.75);
    textSize(10);
    text('Attendees of the 1981 Space Invaders Championships attempt to set the highest score', window.width / 2+30, 380, 262.5, 168.75);
    image(theImages[10],  window.width / 2 + 32, 410, 258.36, 172.24);
    text('The IEM Counterstrike Global Offensive championship draws big crowds in Katowice, Poland.', window.width /2+30, window.height-70, 258.36, 50);
    textSize(11);
    image(theImages[11], window.width / 2 + 320, Alignments.three, 278.787879, 159.090909, 40, 80, 920, 525);
    text('This statistic shows the global eSports market revenue (in millions) from 2012 to 2020.  Each year, the market is projected to grow by 30 percent or more.  It is projected to hit 1.5 billion dollars in 2020.', window.width/2 +320, 373, 277, 60);
    ebuttons[0] = createButton('Article about eSports Revenues');
    ebuttons[0].position(window.width/2+320, buttonPlacement.one);
    ebuttons[0].mousePressed(eSportRev);

    ebuttons[1] = createButton('Sports Teams in eSports');
    ebuttons[1].position(window.width/2+320, buttonPlacement.two);
    ebuttons[1].mousePressed(investments);

    ebuttons[2] = createButton('Professional Soccer Teams in eSports');
    ebuttons[2].position(window.width/2+320, buttonPlacement.three);
    ebuttons[2].mousePressed(soccer);

    ebuttons[3] = createButton('Why is investing in eSports becoming popular?');
    ebuttons[3].position(window.width/2+320, buttonPlacement.four);
    ebuttons[3].mousePressed(popularity);
}

function eSportRev(){
  window.open("http://www.esportsinsider.com/2017/02/newzoo-esports-revenues-will-hit-1-48bn-2020/");
}

function investments(){
  window.open("https://dotesports.com/general/news/the-biggest-investments-esports-3871#list-1");
}

function soccer(){
  window.open("https://www.dexerto.com/news/full-list-of-professional-sports-teams-in-esports/19056");
}

function popularity(){
  window.open("https://thelacesout.com/why-sports-teams-are-investing-in-esports-and-why-you-should-too-7d1143464a33");
}

function future() { //page for future technology
    frontButtons[0].remove();
    frontButtons[1].remove();
    frontButtons[2].remove();
    frontButtons[3].remove();
    clear();
    cover();
    fill(217, 229, 214);
    fill(255);
    rect(0, 200, windowWidth, windowHeight);
    image(theImages[12], 0, 200, window.width, window.width*0.625);
    fill(0);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('There are many potential features that will change the way video games are played, but also the wide world out there.', Alignments.two, 205, screen.width / 2 + 20, 600);
    text('Virtual reality, or VR, is becoming more common.  Though it is mainly used for single player games, heads of companies like Oculus and Sony see a future of VR that will become more collaborative, and perhaps multiplayer VR games will emerge.  Beyond gaming, it is also useful to control robotic arms in NASA, educate people about distracted driving, and help prepare surgeons before having to do a procedure.', Alignments.two, 245, screen.width / 2 + 20, 600);
    text('Haptic technology is the process of receiving and understanding information in the virtual world via your sensations.  The vibration of a phone from a text, or the controller of a PS4 is one example of haptics.  This is able to advance virtual reality by giving the player a feeling as if they were in the game, as the character.  It makes the experience more real.  Haptics can help people with meditation, feel the blood pressure of a heart to assist with a procedure, or help with different simulators.', Alignments.two, 350, screen.width / 2 + 20, 600);
    text('Augmented reality is technology that superimposes a computer-generated image on a view of the real world.  It has been present in games like PokemonGO, and may be presented in our technology as Apple may have plans to create a phone with a camera specifically for this.  It allows players to experience game play in a real world environment, as it enhances the perception of reality rather than creating a new one, as virtual reality would do.  This can be helpful with remodeling a house, visualize and modify the structure of cars, and troubleshoot things like assembly machines in factories.', Alignments.two, 470, screen.width / 2 + 20, 600);
    image(theImages[13], window.width / 2 + 30, Alignments.three, 257.77777778, 145+(1/9));
    textSize(12);
    textAlign(CENTER);
    text('Soldiers in the US Military train using VR', window.width / 2+30, 360, 262.5, 168.75);
    image(theImages[14],  window.width / 2 + 32, 380, 258.36, 172.24);
    text('One future application of augmented reality allows it to recognize buildings and locations and display information.', window.width /2+30, window.height-90, 258.36, 50);
    image(theImages[15], window.width / 2 + 320, Alignments.three, 274, 124);
    text('This shows the Teslasuit, which is a full body haptic suit that lets you feel and touch virtual reality', window.width/2 +320, 340, 277, 60);
    futurebuttons[0] = createButton('Information on the TeslaSuit');
    futurebuttons[0].position(window.width/2+320, buttonPlacement.one);
    futurebuttons[0].mousePressed(teslasuit);

    futurebuttons[1] = createButton('The Complete Guide to VR');
    futurebuttons[1].position(window.width/2+320, buttonPlacement.two);
    futurebuttons[1].mousePressed(vr);

    futurebuttons[2] = createButton('More Information on Augmented Reality');
    futurebuttons[2].position(window.width/2+320, buttonPlacement.three);
    futurebuttons[2].mousePressed(augreality);

    futurebuttons[3] = createButton('Risks of Virtual Reality');
    futurebuttons[3].position(window.width/2+320, buttonPlacement.four);
    futurebuttons[3].mousePressed(vrrisks);
}

function teslasuit(){
  window.open("https://teslasuit.io/");
}

function vr(){
  window.open("https://www.theguardian.com/technology/2016/nov/10/virtual-reality-guide-headsets-apps-games-vr");
}

function augreality(){
  window.open("https://hbr.org/2017/11/a-managers-guide-to-augmented-reality");
}

function vrrisks(){
  window.open("https://www.cnn.com/2017/12/13/health/virtual-reality-vr-dangers-safety/index.html");
}

function beginning() { // create home page
    cover();
    image(theImages[9], 0, 175, window.width, window.width*0.625, 40, 200, 1200, 800);
    frontButtons[0] = createButton('Imagine Games Network (IGN)');
    frontButtons[0].position(50, window.height - 100);
    frontButtons[0].mousePressed(ign);

    frontButtons[1] = createButton('Video Game Timeline');
    frontButtons[1].position(window.width*1/4+100, window.height - 100);
    frontButtons[1].mousePressed(vidhistory);

    frontButtons[2] = createButton('News About eSports');
    frontButtons[2].position(window.width*1/2+100, window.height - 100);
    frontButtons[2].mousePressed(gamesr);

    frontButtons[3] = createButton('Polygon');
    frontButtons[3].position(window.width-200, window.height - 100);
    frontButtons[3].mousePressed(polygon);
}

function ign() {
    window.open("https://www.ign.com/");
}

function vidhistory() {
    window.open("https://www.museumofplay.org/about/icheg/video-game-history/timeline");
}

function gamesr() {
  window.open("https://www.esportsinsider.com/");
}

function polygon() {
  window.open("https://www.polygon.com/")
}

function home() {
    clear();
    beginning();
}

function draw() {

}
