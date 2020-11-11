var bullet,wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random (400,900);
  thickness=random(23,83);

  bullet = createSprite(50, 200, 75, 30);
  bullet.shapeColor="lightpink";
  bullet.velocityX = speed;

  wall = createSprite (900,200,thickness,height/2);
  wall.shapeColor="powderblue"

  
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  }
  
  if(damage>10){
  wall.shapeColor="hotpink"
  }

  if(damage<10){
    wall.shapeColor="lightgreen"
  }
  

  drawSprites();
}

function hasCollided(bulletobj,wallobj){

  bulletrightedge = bulletobj.x + bulletobj.width;
  wallleftedge = wallobj.x;
  if(bulletrightedge>=wallleftedge)
  {
    return true;
  }
  return false;
}