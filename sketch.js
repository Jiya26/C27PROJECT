
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	ball1 = new Ball(200,600);
	ball2 =new Ball(240,600);
    ball3 = new Ball(280,600);
    ball4 = new Ball(320,600);
	ball5 =new Ball(360,600);
    roof = new Roof(240,400,200,20);
	chain1 = new Chain(ball1.body,roof.body,-80,0);
	chain2 = new Chain(ball2.body,roof.body,-40,0);
	chain3 = new Chain(ball3.body,roof.body,0,0); 
	chain4 = new Chain(ball4.body,roof.body,40,0);
	chain5 = new Chain(ball5.body,roof.body,80,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(ball1,false)
   }
 }


