var player,enemy,enemy2,enemy3,crate,crate_img;

function preload(){
  crate_img = loadImage("boxAlt.png");
  enemy_img = loadImage("alienBlue.png");
}
function setup() {
  createCanvas(400, 400);
  
  player = createSprite(200,200,20,20);
  player.shapeColor = "white";
  crate = createSprite(380,20,20,20);
  crate.shapeColor = "orange";
  crate.addImage(crate_img);
  crate.scale = 0.5;
  enemy = createSprite(300,100,20,20);
  enemy.shapeColor = "blue";
  enemy.addImage(enemy_img);
  enemy.scale = 0.5;
  
  enemy2 = createSprite(300,300,20,20);
  enemy2.shapeColor = "blue";
  enemy2.addImage(enemy_img);
  enemy2.scale = 0.5;
  
  enemy3 = createSprite(100,300,20,20);
  enemy3.shapeColor = "blue";
  enemy3.addImage(enemy_img);
  enemy3.scale = 0.5;
  
}

function draw() {
  background("grey");
  if(keyDown("LEFT_ARROW")){
    
    player.velocityX = -7;
  }
  if(keyWentUp("LEFT_ARROW")){
    
    player.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    
    player.velocityX = 7;
  }
  if(keyWentUp("RIGHT_ARROW")){
    
    player.velocityX = 0;
  }
  if(keyDown("UP_ARROW")){
    
    player.velocityY = -7;
  }
  if(keyWentUp("UP_ARROW")){
    
    player.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    
    player.velocityY = 7;
  }
  if(keyWentUp("DOWN_ARROW")){
    
    player.velocityY = 0;
  }
  if(player.isTouching(enemy)){
    player.y = 200;
    player.x = 200;
    
  }
  if(player.isTouching(enemy2)){
    player.y = 200;
    player.x = 200;
    
  }
  if(player.isTouching(enemy3)){
    player.y = 200;
    player.x = 200;
    
  }
  if(player.isTouching(crate)){
    player.velocityY = 0;
    player.velocityX = 0;
    
    fill("lightgreen");
    text("You Win!",200,200);
    
  }
  drawSprites();
}