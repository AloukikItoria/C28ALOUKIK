class SlingShot{

constructor(bodyA , pointB){

var slingoptions={

bodyA:bodyA,
pointB:pointB,
stiffness:1,
length:50

}


this.SlingShot = Constraint.create(slingoptions)
World.add(world,this.SlingShot)
this.pointB= pointB;


}

display(){
    if(this.SlingShot.bodyA){
var posA = this.SlingShot.bodyA.position
var posB = this.pointB
//var posB = this.pointB
line(posA.x,posA.y,posB.x,posB.y)

    }





}

 fly(){


this.SlingShot.bodyA = null

 }

}