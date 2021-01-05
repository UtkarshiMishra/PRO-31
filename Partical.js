class Particle{
    constructor(x,y,r) {
        var options = {
            density:1.0,
            friction: 0.005
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        //this.h = h;
        this.color = color(random (0,255), random (0,255), random (0,255));
        World.add(world,this.body);  

        for (var j = 0; j < Particle.radius; j++) {
            Particle[j].display();
        }

        for (var k = 0; k < Division.h; k++) {
            Division[k].display();
        }

    }

    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);        
        circle(0,0,this.r);
        pop();
    }
}