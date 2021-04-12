class paper
{
	constructor(x,y,r){
var options={
    isStatic:false,
    resititution:0.3,
    friction:0,
    density:1.2
}
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(this.x,this.y,(this.r-100)/2,options);
    World.add(world,this.body);
    
    }
    display(){
       
        ellipseMode(RADIUS)
        ellipse(this.image.x,this.image.y,this.r)
        
        imageMode(CENTER);
        image(this.image, this.x,this.y, this.width, this.height);
    
        
    
    }
    
}
