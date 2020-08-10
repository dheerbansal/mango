class Boy{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width, height)
        this.width  = 75
        this.height = 90;
        this.image = loadImage("boy.png")
        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        image(this.image,250,550,200,300);
    }
}