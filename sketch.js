var bg,rocket,asteroid;
var bgImg,rocketImg,asteroidImg


function preload(){
  bgImg = loadImage("Space background.jpg");
  rocketImg = loadImage("Rocket ship.png");
  asteroidImg = loadImage("Asteroid on fire.png");
  asteroid2Img = loadImage("Asteroid on fire 2.png");
  Exploding_rocketImg = loadImage("Exploding rocket.jpg");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
bg=createSprite(200,200);
bg.addImage(bgImg);
bg.velocityY = 4;
bg.scale=1;

//creating boy running
rocket = createSprite(180,340,30,30);
rocket.scale=0.8;
rocket.addImage("rocket",rocketImg);
rocket.velocityY=-4

rocket2 = createSprite(180,340,30,30);
rocket2.scale=0.8;

rocket2.velocityY=-4

invisibleGround=createSprite(180,400,200,10)
invisibleGround.visible=false

asteroid=createSprite(100,100,10,10);
asteroid.scale = 0.6;
asteroid.addImage("asteroid",asteroidImg);
asteroid.velocityY=3

asteroid2=createSprite(350,100,10,10);
asteroid2.scale = 0.6;
asteroid2.addImage("asteroid2",asteroid2Img);
asteroid2.velocityY=5

}

function draw() {
  background(0);
  bg.velocityY = 4;
rocket.velocityY=rocket.velocityY+0.5
  rocket.x=World.mouseX
  rocket.collide(invisibleGround);
  //boy.collide(leftBoundary);
  //boy.collide(rightBoundary);
  
  //code to reset the background
  if(bg.y > 400 ){
   
  bg.y = height/2;
  }
  if(keyDown("space")){
    rocket.velocityY=-4        
  }
  if (rocket.isTouching(asteroid)||rocket.isTouching(asteroid2)){
rocket2.addImage("explode",Exploding_rocketImg)
  }
  
  rocket.depth=asteroid.depth
  rocket.depth=rocket.depth+1

  rocket.depth=asteroid2.depth
  rocket.depth=rocket.depth+1
  drawSprites();
}
