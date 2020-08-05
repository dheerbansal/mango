var mango1, boyIMG, treeIMG, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeIMG = loadImage("tree.png");
	boyIMG = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(950,750, this.widht, this.height);
	mango1.scale = 0.25
	//Mango.scale = 0.09

	tree = createSprite(900,470,50,50);
	tree.addImage(treeIMG);
	tree.scale = 0.5;

	

	boy = createSprite(200,700,50,50);
	boy.addImage(boyIMG);
	boy.scale = 0.15;

	
	ground=createSprite(0,700,1200,50);
	ground.shapeColor = "white";
	ground.scale = 2;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  //ellipse();
  mango1.display();
  //ground.display();
  drawSprites();
 
}



