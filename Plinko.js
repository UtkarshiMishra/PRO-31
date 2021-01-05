class Plinko{
    constructor(x,y,w,h) {
        var options = {
            density:1.0,
            frictionAir: 0.005
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        //this.color = color(random (0,255), random (0,255), random (0,255));
        World.add(world,this.body);  

        for (var j = 40; j <= w; j = j+50) {
            plinkos.push(new Plinko(j,75));
        }

        for (var j = 15; j <= w-10; j = j+50) {
            plinkos.push(new Plinko(j,175));
        }

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);        
        rect(0,0,this.w,this.h);
        rectMode(CENTER);
        pop();
    }
}