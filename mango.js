class Mango{
    constructor(x,y,width, height){
        var options = {
            restitution:2.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 40;
        this.height = 20;
       this.scale = 0.09
        World.add(world,this.body);
        this.image = loadImage("mango.png");

    }

    display(){
        
       //ImageMode(CENTER);
        rectMode(CENTER);
       // Mango.scale = 0.25
        image(this.image, 700, 450, this.width, this.height);
    }
}