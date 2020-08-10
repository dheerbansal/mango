class Tree{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = 150;
        this.height = 100
        this.image = loadImage("tree.png")
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
      //  rect(900,470,100,90)
        image(this.image, 750,275,200, 500)
       
    }
}