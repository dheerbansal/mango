var  boy, ground,tree, mango1, mango2,mango3, slingshot
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	

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

	mango2 = new Mango(1025,750, this.width, this.height);
	mango1.scale = 0.25

	mango3 = new Mango(850,750, this.width, this.height);
	mango1.scale = 0.25
	
    
	boy = new Boy(400,600,this.width, this.height)
	boy.scale = 0.5;

	ground = new Ground(0,750,1200,25);
	ground.scale = 1;
	ground.shapeColor = "white";

	slingShot = new SlingShot(boy.body,{x:250,y:500})

	

	

	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background("black");
  
  tree.display();
  mango1.display();
  mango2.display();
  boy.display();
  ground.display();
  slingshot.display();
  
  
  
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}



