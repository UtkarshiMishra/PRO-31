class Division{
    constructor(x,y,w,h) {
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        //this.x = x;
        //this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    
    for (var i = 0; i <= w; i = i + 80) {
        divisions.push(new Division(i, h-divisionHeight/2, 10, divisionHeight));
    }
    for (var k = 0; k < Division.h; k++) {
        Division[k].display();
    }

}

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h)
        rectMode(CENTER)
    }
}