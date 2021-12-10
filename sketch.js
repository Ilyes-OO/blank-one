var target1, target2, target3;
var crosshair, crosshairImg;
var view,viewImg;
var effect, effectImg;
var mousePressd = false;

function preload(){
  crosshairImg = loadImage("images/cross.png")
  viewImg = loadImage("images/gun.png")
  effectImg = loadImage("images/effect.png");
  gunshot = loadSound("images/shot.mp3");
  bg = loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(600, 450);

  target1 = createSprite(50,50,20,20);
  target1.setCollider("rectangle",0,0,75,75);

 
  target2 = createSprite(50,300,20,20)
  target2.setCollider("rectangle",0,0,300,300);
  
  target3 = createSprite(350,150,20,20)
  target3.setCollider("rectangle",0,0,300,300);
  
  crosshair = createSprite(200,200, 20,20)
  crosshair.addImage(crosshairImg)
  crosshair.setCollider("rectangle",0,0,300,300);
  crosshair.scale = .3;
  
  effect = createSprite(370,300,20,20);
  effect.addImage(effectImg);
  effect.visible = false;
  
  view = createSprite(340,280,20,20);
  view.addImage(viewImg);
  view.scale = 2
  
}

function draw() {
  background(bg);
  crosshair.x = mouseX;
  crosshair.y = mouseY;
  
  effect.x = view.x + 30;
  effect.y = view.y +20;

  //camera.x = crosshair.x;
  //camera.y = crosshair.y;

  if(keyWentDown("z")){
    camera.zoom = camera.zoom + .1;
  }
  
  if(keyDown("D")){
    view.x = view.x +10
  }
  
  if(keyDown("A")){
    view.x = view.x -10
  }
  
  if(mousePressedOver(target1)){
    target1.visible = false
    effect.visible = true;
    gunshot.play();
  }
  if(mousePressedOver(target2)){
   target2.visible = false
    effect.visible = true;
    gunshot.play();
  }
  if(mousePressedOver(target3)){
    target3.visible = false
    effect.visible = true;
    gunshot.play();
  }
  drawSprites();
}