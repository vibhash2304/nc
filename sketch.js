
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofbar,bobdiameter,bob1,bob2,bob3,bob4,bob5,rope1;

function preload()
{
	
}

function setup() 
{
	//rectMode(CENTER);
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofbar = new roof(200,50,500,30);

	bobdiameter = 160;
	bob1 = new bob(130,200,bobdiameter);
	bob2 = new bob(165,200,bobdiameter);
	bob3 = new bob(200,200,bobdiameter);
	bob4 = new bob(235,200,bobdiameter);
	bob5 = new bob(270,200,bobdiameter);

		
	rope1 = new rope(bob1.body,roofbar.body,-160,0);
	rope2 = new rope(bob2.body,roofbar.body,-70,0);
	rope3 = new rope(bob3.body,roofbar.body,-70,0);
	rope4 = new rope(bob4.body,roofbar.body,-70,0);
	rope5 = new rope(bob5.body,roofbar.body,-70,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  roofbar.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



