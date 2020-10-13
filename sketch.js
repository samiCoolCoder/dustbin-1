var red1,red2,red3;
var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	red1=createSprite(600,655,150,10,{isStatic:true} );
	paper=Bodies.circle(200, 650, 20,20);
	red2=createSprite(520,610,10,100);
	red3=createSprite(670,610,10,100);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 640, width, 5,{isStatic:true} );
 	World.add(world, ground);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(paper.position.x,paper.position.y,20,20);
  keyPressed()
  drawSprites();

}

function keyPressed() {
	if (keyCode ===RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	 }
   }
   

