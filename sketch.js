
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new ground(600,300,1200,20);
	 stone = new stone(50,100,50,100);
	 mango = new mango(100,100,50,70);
	 mango1 = new mango1(200,100,50,70);
	 mango2 = new mango2(300,100,50,70);
	 tree = new tree(300,500,100,200);
	 boy = new boy(400,300,100,70);
     

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 stone.display();
 tree.display();
 ground.display();
 mango.display();
 mango1.display();
 mango2.display();
 boy.display();
}



