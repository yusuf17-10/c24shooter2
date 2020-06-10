// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;
var tanker,ground,canonBall;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world=engine.world;
    tanker = new Tanker(80, height- 85, 70, 30);
    ground = new Ground(200,390,400,20);
    canonBall= new CanonBall(300,200,20,20);

}

function draw() {
// Remember to update the Matter Engine and set the background.
 background(0);
    Matter.Engine.update(engine);
    tanker.display();
    ground.display();
    canonBall.display();   
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode === 32){
        canonBall.shoot();
    }
}