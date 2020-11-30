
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball, ground, dustbinL, dustbinR, dustbinB;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paperball(200,450,35);
	ground = new Ground(800,670,1600,20)
	dustbinB = new Dustbin(1200,650,160,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  paperball.display();
  ground.display();
  dustbinB.display();
  drawSprites();

}


function keyPressed() {
	 if (keyCode === UP_ARROW)
	 {
		 Matter.Body.applyForce(paperball.body,paperball.body.position,{ x:85,y:-85});
		 } 
		}
