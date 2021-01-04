var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle,o1,o2,o3,o4,o5,o6,obstacleGroup
var Clouds,cloud1

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  o1 = loadImage("obstacle1.png")
  o2 = loadImage("obstacle2.png")
  o3 = loadImage("obstacle3.png")
  o4 = loadImage("obstacle4.png")
  o5 = loadImage("obstacle5.png")
  o6 = loadImage("obstacle6.png")
  cloud1=loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstacleGroup= new Group()
}

function draw() {
  background(180);
  
  if(keyDown("space")&&trex.y>=161.5) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnObstacle()
  spawnClouds()
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnObstacle()
{
  if(frameCount% 50===0)
    {
      obstacle= createSprite(600,165,10,40)
      obstacle.velocityX= -6
      var r= Math.round(random(1,6))
      switch(r)
        {
            case 1: obstacle.addImage(o1)
            break
            case 2: obstacle.addImage(o2)
            break
            case 3: obstacle.addImage(o3)
            break
            case 4: obstacle.addImage(o4)
            break
            case 5: obstacle.addImage(o5)
            break
            case 6: obstacle.addImage(o6)
            break
            default: break
            
        }
            obstacle.scale= 0.5
            obstacle.lifetime= 100
            obstacleGroup.add(obstacle)
    }
}
  function spawnClouds(){
    if(frameCount%50===0){
      Clouds=createSprite(600,100,10,10) 
      Clouds.velocityX=-3
      Clouds.addImage(cloud1)
      Clouds.scale=0.5
      Clouds.y=Math.round(random(50,100))
    }
    
  }