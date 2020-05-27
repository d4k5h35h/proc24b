class Ball {
  constructor(x,y,radius,angle) {
    var options ={
        frictionAir: 0,
        friction: 1,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("assets/canonBall.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius,this.radius + 5);
    pop();
  }
}
