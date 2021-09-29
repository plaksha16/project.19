var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var door, doorImg
var ralling, rallingImg
var gameState="End"
function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(150, 150)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.5

  doorgroup = new Group()
  rallingsgroup = new Group()
}

function draw() {
  background(200);
  spawndoor()


  if (tower.y > 400) {
    tower.y = 300
  }

  if (keyDown("LEFT_ARROW")) {
    ghost.x = ghost.x - 5
  }

  if (keyDown("right_arrow")) {
    ghost.x = ghost.x + 5
  }

  if (keyDown("Space")) {
    ghost.velocityY = -2

  } 

  if(doorgroup.isTouching(ghost)){
    gameState="END"   
   text("gameover")
  }

  //adding the gravity
  ghost.velocityY = ghost.velocityY + 0.5
  drawSprites();
}

function spawndoor() {
  if(frameCount%200==0){
  door = createSprite(random(100,400), -18)
  door.addImage("spawndoor", doorImg)
  ralling = createSprite(random(100,400), -2)
  ralling.addImage("ralling", climberImg)
  door.velocityY = 2
  ralling.velocityY = 2

  door.x=ralling.x;
  }
}













