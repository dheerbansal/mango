var  boyIMG, ground,tree, mango1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	boyIMG = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;

	
	//Mango.scale = 0.09

	tree = new Tree(980,470,this.width, this.height)
	tree.scale = 1;

	mango1 = new Mango(950,750, this.width, this.height);
	mango1.scale = 0.25
	

	

	boy = createSprite(200,700,50,50);
	boy.addImage(boyIMG);
	boy.scale = 0.15;

	
	ground=createSprite(0,790,1200,25);
	ground.shapeColor = "blue";
	ground.scale = 2;

	

	

	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background("black");
  mango1.display();
  tree.display();
  mango1.depth = tree.depth;
	tree.depth = tree.depth+1;
  
  
  
  drawSprites();
 
}



