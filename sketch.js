var bg,bgImg;
var playerImg,player,playerShooting;
var zombieImg;


function preload () {
bgImg = loadImage ("assets/bg.jpeg")
playerImg = loadImage ("assets/shooter_2.png")
playerShooting = loadImage ("assets/shooter_3.png")
zombieImg = loadImage ("assets/zombie.png")


}

function setup (){
createCanvas (windowWidth,windowHeight)
 bg = createSprite (width/2-50,height/2,width,height)
 bg .addImage (bgImg)
 bg.scale = 1.3

player = createSprite(150,height-200,50,50)
player . addImage(playerImg)
player.scale = 0.5

player.debug=true;
player.setCollider("rectangle",0,0,150,300)




}

function draw (){
background (0)

if (keyDown(UP_ARROW )){
  player.y=player.y-30

}

if (keyDown(DOWN_ARROW )){
  player.y=player.y+30

}

if (keyWentDown ("space")){
  player.addImage(playerShooting)
}
else if (keyWentUp("space")){
  player.addImage(playerImg)

}
spawnZombie()
drawSprites ()

 
}

function spawnZombie(){
  if (frameCount%60===0){
    var zombie = createSprite(random(500,1200),random(100,600))
    zombie.addImage(zombieImg)
    zombie.lifetime=500
    zombie.velocityX=-3
    zombie.scale=0.2
  }
}