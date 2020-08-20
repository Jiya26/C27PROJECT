
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ball1 = new Ball(100,600);
	ball2 =new Ball(130,600);
	ball3 = new Ball(160,600);
	ball4 = new Ball(190,600);
	ball5 =new Ball(220,600);
	chain = new Chain(ball1,roof);
	roof = createSprite(160,400,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain.display();
  drawSprites();
 
}



