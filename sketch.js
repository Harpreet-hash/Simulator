
var car, wal,speed,weight,deformation;
function setup() {
  createCanvas(1600,800);

  speed=random(55,90)
  weight=random(400,1500)

  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,height/2)
  wall.shapeColor=rgb(80,80,80)

  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500

 
  

}

function draw() {
  background(0,0,0);  
  
  
  if((wall.x-car.x)<(car.width/2+wall.width/2)){

    car.velocityX=0
    car.x=wall.x-(wall.width/2);
    if(deformation<100){
      car.shapeColor=rgb(0,255,0)
      
    }else if(100<=deformation<=180){
      car.shapeColor=rgb(230,230,0)    
  
    }
    else if(deformation>180){
      car.shapeColor=rgb(255,0,0);
    }

  }

  
  
  drawSprites();
}
