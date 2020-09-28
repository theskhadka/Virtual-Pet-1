//Create variables here
var dog, dogImg, dogHappy, database, foodStock, FoodS;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  dogHappy = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.scale = (0.3)
  dog.addImage(dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  //add styles here
  if(keyWentDown(UP_ARROW)) {
    writeStock(FoodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  fill("white");
  stroke(3);
  textSize(16);
  text("Note: Press the Up Arrow Key to Feed the Doggo Milk!", 65, 400);
  text("Food Remaining: " + FoodS, 200, 100);
  }


function readStock(data) {
  FoodS=data.val();
}

function writeStock(x) {
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  });
}



