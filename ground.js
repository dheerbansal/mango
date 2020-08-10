class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = 1200;
        this.height = 25;
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        
        rect(600,790,1200, this.height);
        
    }
}