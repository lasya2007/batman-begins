class Drop{
    constructor(x,y){
        var options={
            friction:0.3,
            restitution:0.2
        }
        this.body=Bodies.circle(x,y,5,options);
        this.x=this.body.position.x;
        this.y=this.body.position.y;
        this.radius=5;
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>560){
            Matter.Body.setPosition(this.body,{x:Math.random(0,600),y:Math.random(0,550)});
        }
    }
    display(){
        fill("blue");
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}