
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(400,350,20);
	ground = new Ground (400, 650, 800, 30 );
	box1 = new Dustbin (400,645,200,20);
	box2 = new Dustbin (325,605,20,100);
	box2 = new Dustbin (475,605,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  ground.display();
  ball.display();
  drawSprites ();
}



