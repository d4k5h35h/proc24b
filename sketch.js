const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world;
var canonball,shootball;
var tank;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    tank = new Tanker(200,200,100,100);
    canonball = new CanonBall(200,200);
    ground = new Ground(600,height,1200,20);
}

function draw() {
    Engine.update(engine);
    background(255);
    ground.display();
    canonball.display();
    tank.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}