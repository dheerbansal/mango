class Mango{
    constructor(x,y,radius){
        var options = {
            restitution:2.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = this.width;
        this.height = this.height;
       this.scale = 0.09
        World.add(world,this.body);
        this.image = loadImage("mango.png");

    }

    display(){
        //ImageMode(CENTER);
        rectMode(CENTER);
       // Mango.scale = 0.25
        image(this.image, 0, 0, this.width, this.height);
    }
}