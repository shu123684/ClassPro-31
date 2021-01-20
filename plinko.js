// class Plinko{
//     constructor(x, y, r) {
//         var options = {
//             isStatic: true,
//         }
//         this.body = Bodies.circle(x, y,r,options);
//         this.r = r
//         // this.image = loadImage("sprites/polygon.png");
//         World.add(world, this.body);
//       }
//       display(){
//         var pos = this.body.position;
//         push();
//         ellipseMode(RADIUS);
//         ellipse(pos.x, pos.y, this.r, this.r);
//         pop();
//       }
//   }

class Plinko{
    constructor(x, y, r){
        var option={
            restitution: 0.4,
            isStatic: true,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, option);

        // this.color = color(random(0 ,255), random(0 ,255), random(0 ,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        // noStroke();
        // fill(this.color);
        ellipseMode(RADIUS);
        // ellipseMode(CENTER);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}