var milk,milk2,milkImage,milkImage2,milk3,milk4,milk5,milk6,milk7,milk8,milk9
var game,database,food,feed
var gameState=0
var dog,dogImg,dogImg2,dog2
var feed2=0
var milk10,milk11,milk12,milk13,milk14,milk15

function preload(){
    milkImage=loadImage("Milk.png")
    milkImage2=loadImage("milkImage.png")
    dogImg=loadImage("Dog.png")
    dogImg2=loadImage("happy dog.png")
}
function setup(){
    createCanvas(1000,800)

    
        milk=createSprite(30,300,50,50)
    milk.addAnimation("milk",milkImage)
    milk.scale=0.15
   milk.visible=false

        dog=createSprite(530,300,50,50)
    dog.addAnimation("dog",dogImg)
    dog.scale=0.2

    milk2=createSprite(80,300,50,50)
    milk2.addAnimation("milk",milkImage)
    milk2.scale=0.15
   milk2.visible=false

   milk3=createSprite(130,300,50,50)
    milk3.addAnimation("milk",milkImage)
    milk3.scale=0.15
   milk3.visible=false

   milk4=createSprite(180,300,50,50)
    milk4.addAnimation("milk",milkImage)
    milk4.scale=0.15
   milk4.visible=false

   milk5=createSprite(30,370,50,50)
   milk5.addAnimation("milk",milkImage)
   milk5.scale=0.15
  milk5.visible=false

  milk6=createSprite(80,370,50,50)
  milk6.addAnimation("milk",milkImage)
  milk6.scale=0.15
 milk6.visible=false

 milk7=createSprite(130,370,50,50)
 milk7.addAnimation("milk",milkImage)
 milk7.scale=0.15
milk7.visible=false

milk8=createSprite(180,370,50,50)
milk8.addAnimation("milk",milkImage)
milk8.scale=0.15
milk8.visible=false

milk9=createSprite(400,300,50,50)
milk9.addAnimation("milk",milkImage)
milk9.scale=0.15
milk9.visible=true

milk10=createSprite(30,300,50,50)
milk10.addAnimation("milk",milkImage)
milk10.scale=0.15
milk10.visible=false

milk11=createSprite(80,300,50,50)
milk11.addAnimation("milk",milkImage)
milk11.scale=0.15
milk11.visible=false

milk12=createSprite(130,300,50,50)
milk12.addAnimation("milk",milkImage)
milk12.scale=0.15
milk12.visible=false

milk13=createSprite(180,300,50,50)
milk13.addAnimation("milk",milkImage)
milk13.scale=0.15
milk13.visible=false

milk14=createSprite(30,370,50,50)
milk14.addAnimation("milk",milkImage)
milk14.scale=0.15
milk14.visible=false

milk15=createSprite(80,370,50,50)
milk15.addAnimation("milk",milkImage)
milk15.scale=0.15
milk15.visible=false

    

    
    game=new Game()
    game.start()
   
}

function draw(){
    background("green")

    drawSprites()
    if(milk8.lifetime===0 ||milk5.lifetime===0 ){
        text("last fed:3:00 a:m",300,70)
    }

    if(milk.lifetime===0){
        text("last fed:5:00 a:m",300,150) 
    }

    camera.position.x=400
}

