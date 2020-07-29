//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var dust1,dust2,dust3;
var paper,slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,670,1200,20);

  dust2=Bodies.rectangle(550,600,20,120,{isStatic:true});
  World.add(world,dust2);
  dust3=Bodies.rectangle(650,600,20,120,{isStatic:true});
  World.add(world,dust3);
  dust1=new Dustbin(600,580,200,150);
	paper=new Paper(250,630,20,20);
	slingshot = new SlingShot(paper.body,{x:150, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  
rect(dust2.position.x,dust2.position.y,20,120);
rect(dust3.position.x,dust3.position.y,20,120);
dust1.display(); 
  slingshot.display();    
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
