var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(600, 200, 50, 50);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;

  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
    ){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  }
  drawSprites();
}