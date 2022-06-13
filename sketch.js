var boyButton, girlButton;
var boy, girl,alpha,alphagroup
var bg, bgimg,boyrun,girlrun;
var gameState = "start"
var girlpc, boypc,pc;
var char = 0
var collected=[]
function preload() {
  bgimg = loadImage("assets/bg.png");
  girlpc = loadAnimation("assets/girl/idle.png");
  boypc = loadAnimation("assets/boy/run0.png");
  boyrun = loadAnimation("assets/boy/run0.png","assets/boy/run1.png","assets/boy/run2.png","assets/boy/run3.png",
  "assets/boy/run4.png","assets/boy/run5.png","assets/boy/run6.png","assets/boy/run7.png");
  girlrun = loadAnimation("assets/girl/g1.png","assets/girl/g2.png","assets/girl/g3.png","assets/girl/g4.png",
  "assets/girl/g5.png","assets/girl/g6.png","assets/girl/g7.png","assets/girl/g8.png","assets/girl/g9.png",
  "assets/girl/g10.png","assets/girl/g11.png","assets/girl/g12.png","assets/girl/g13.png");
 aimg = loadImage("assets/a.png");
 bimg = loadImage("assets/b.png");
 cimg = loadImage("assets/c.png");
 dimg = loadImage("assets/d.png");
  jimg = loadImage("assets/j.png");
  kimg = loadImage("assets/k.png");
  limg = loadImage("assets/l.png");
  mimg = loadImage("assets/m.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2);
  bg.addImage(bgimg);
  bg.scale = 3;
  bg.visible = false;
  boy = createSprite(width / 2 - width / 4, height / 2);
  boy.addAnimation("still", boypc);
  girl = createSprite(width / 2 + width / 3, height / 2);
  girl.addAnimation("still1", girlpc);
  pc = createSprite(width/8,height/2)
  pc.visible = false;
alphagroup = new Group()

}

function draw() {
  background(bgimg);
  if (gameState === "start") {
    textSize(50)
    fill("white");
    text("SELECT YOUR CHARACTER", width / 4, height / 8);
    if (mousePressedOver(boy)) {
      char = 1
      pc.addAnimation ("bRun",boyrun)
      pc.scale = 0.5;
     hide()
      gameState = "play"
    }
    if (mousePressedOver(girl)) {
      char = 2
      pc.addAnimation ("gRun",girlrun)
      pc.scale = 0.5
     hide()
      gameState = "play"
      
    }

  }
  else if(gameState==="play"){
    pc.y= mouseY;
    bg.velocityX = -4
    bg.visible = true;
    pc.visible=true;
   if(bg.x<width/4){
     bg.x = width/2+width/4;
   } 
   spawnAlphabets ()
  }



  drawSprites();

}
function hide() {
  boy.destroy()
  girl.destroy()
}

function spawnAlphabets(){
  if(frameCount % 60 ===0){
 alpha = createSprite(width,height/2)
 alpha.velocityX = -4
 alpha.y = random (height/4,height-height/4);
 var choice = Math.round(random(1,8));
 switch(choice){
   case 1:alpha.addImage(aimg)
   break
   case 2:alpha.addImage(bimg)
   break
   case 3:alpha.addImage(cimg)
   break
   case 4:alpha.addImage(dimg)
   break
   case 5:alpha.addImage(jimg)
   break
   case 6:alpha.addImage(kimg)
   break
   case 7:alpha.addImage(limg)
   break
   case 8:alpha.addImage(mimg)
   break
 }
 alpha.lifetime=1200
 alphagroup.add(alpha);
  }
}


