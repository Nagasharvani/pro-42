var bgImage,spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image,issImage

function preload(){
  issImage=loadImage("Docking-undocking/iss.png");
  spacecraft1Image=loadAnimation("Docking-undocking/spacecraft1.png");
  spacecraft2Image=loadAnimation("Docking-undocking/spacecraft2.png");
  spacecraft3Image=loadAnimation("Docking-undocking/spacecraft3.png");
  spacecraft4Image=loadAnimation("Docking-undocking/spacecraft4.png");
  bgImage=loadImage("Docking-undocking/spacebg.jpg");

}


function setup() {
  createCanvas(800,400);
  var spaceCraft=createSprite(400, 200, 50, 50);
  spaceCraft.addAnimation("spacecraft1Image")
  spaceCraft.scale=0.2
}

function draw() {
  background(bgImage)
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    spaceCraft.changeAnimation("spacecraft4Image")
    spaceCraft.x+=5;
}
if (keyIsDown(LEFT_ARROW)) {
  spaceCraft.changeAnimation("spacecraft3Image")
  spaceCraft.x-=5;
}
if (keyIsDown(UP_ARROW)) {
  spaceCraft.changeAnimation("spacecraft2Image")
  spaceCraft.y-=5;
}
if (keyIsDown(RIGHT_ARROW)) {
  spaceCraft.changeAnimation("spacecraft2Image")
  spaceCraft.y+=5;
}



}