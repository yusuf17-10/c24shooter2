class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("assets/canonBall.png");
        this.cannonBall = Constraint.create(options);
        World.add(world, this.CanonBall);
        this.pointB=pointB;

    }

    attach(body){
        this.CanonBall.bodyA = body;
    }

    shoot(){
    this.canonBall.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
    }

}

