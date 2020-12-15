
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	paper = new Paper(100, 600, 70);
	
	log1 = new Dustbin(550, 620, 20, 100);
	log2 = new Dustbin(635, 660, 150, 20);
	log3 = new Dustbin(720, 620, 20, 100);

	dustbin = createSprite(635 ,540, 150, 20)
	dustbin.addImage("dustbin",bin)
	dustbin.scale = 0.8
	ground = new Ground(400, 680, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();

  log1.display();
  log2.display();
  log3.display();
	
  ground.display();

  dustbin.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:150, y: -150})
	}

  }


