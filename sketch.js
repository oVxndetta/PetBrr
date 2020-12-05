//Create variables here
var database;
var dog,dogImg,foodStock,dogImg1
var foodS;
function preload()
{
dogImg = loadImage("images/dogImg.png")
dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database()
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImg)
 dog.scale = 0.3
 foodStock = database.ref("Food")
 foodStock.on("value",Food12)
}


function draw() {  

  background("Cyan")
  if(keyWentDown(UP_ARROW)){
dog.addImage(dogImg1)
eat(foodS)

  }
  drawSprites();
  textSize(30)
  text("Food Remaining:"+foodS,100,100)

  text("Press up Arrow to feed",160,160)
  //add styles here
}

function Food12(data){
foodS = data.val()


}

function eat(eat3){
if(eat3<0){
eat3 = 0
}
else
eat3=eat3-1
database.ref("/").update({Food:eat3})




}