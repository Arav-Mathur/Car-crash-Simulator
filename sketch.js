var car, wall, speed, weight, deformation
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,70,30);
  wall=createSprite(1500,200,60,30);
}

function draw() {
  background(0);  

  car.velocityX = speed;

  if (wall.x-car.x<=(car.width+wall.width)/2) {
      deformation= 0.5*weight*speed*speed/22500;
      car.velocityX = 0;
      if (deformation > 180){
        car.shapeColor=color(255,0,0);
      }
      if (deformation < 100){
        car.shapeColor=color(0,255,0);
      }
      if (deformation < 180 && deformation>100){
        car.shapeColor=color(230,230,0);
      }
 }
 drawSprites();
}