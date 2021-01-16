var ball,wall1,wall2,wall3,wall4;
var line1,line2,line3,line4;
var ballsound;
var area,areaimage;

function preload(){
  ballsound=loadSound("cheeky_monkey_fun_app_playful_cheeky.mp3");
  areaimage=loadImage("Imported piskel (2)-1.gif");
}

function setup() {
   createCanvas(400,400)
  area = createSprite(0,0,600,600);
  area.addImage(areaimage);
  area.scale =3
  
   wall1=createSprite(50,395,100,15);
  wall1.shapeColor="maroon";
  
  wall2=createSprite(150,395,100,15);
    wall2.shapeColor="orange ";
  
 wall3=createSprite(250,395,100,15);
  wall3.shapeColor="green";
  
  wall4=createSprite(350,395,100,15);
  wall4.shapeColor="blue ";
  
  ball=createSprite(240,50,20,20);
  ball.shapeColor="black";
  
  
  line2=createSprite(0,0,5,1000);
  line2.shapeColor="lavender";
  
  line3=createSprite(400,0,5,1000);
  line3.shapeColor="lavender";
  
  line4=createSprite(400,0,1000,5);
  line4.shapeColor="lavender";
  
  ball.velocityX=10;
  ball.velocityY=3.5;
  
 }
 function draw(){
   background("lavender");
   ball.bounceOff(line2);
   ball.bounceOff(line3);
   ball.bounceOff(line4);
   
if(ball.isTouching(wall1))  {
  ball.bounceOff(wall1)
  ball.shapeColor="maroon"
} 
   if(ball.isTouching(wall2))  {
  ball.bounceOff(wall2)
  ball.shapeColor="orange"
     ball.velocityX=0;
     ball.velocityY=0;
     ballsound.stop();
}  
   if(ball.isTouching(wall3))  {
  ball.bounceOff(wall3)
  ball.shapeColor="green"
} 
   if(ball.isTouching(wall4))  {
  ball.bounceOff(wall4)
  ball.shapeColor="blue"
     ballsound.loop();
     
} 
  drawSprites();
}
