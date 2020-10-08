var dog, happyDog, database, foodS, foodStock,dogname;

function preload()
{
  dogImage=loadImage("Dog.png")
  HAPPYdog=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
 dogname= prompt("Name your dog","name")
 dog=createSprite(240,220,50,50);
 dog.addImage("d1",dogImage);
 dog.scale=0.25;
// database=firebase.database;
 // foodStock=database.ref('food');
  //foodStock.on("value",readStock);
   } 
   function draw() {
  
  background("green") 
   textSize(20);
   fill("white")
   text("Here's your pet, "+dogname,120,70)
  drawSprites();
  //add styles here }
  
}






