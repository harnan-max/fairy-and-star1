const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground
var fairy
var star
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
 ground=Bodies.rectangle(200,390,400,20,options);
 World.add(world,ground);
 var staroption={
   restitution:1
 }
 ball=Bodies.(200,100,20,staroption);
 World.add(world,star);
}

function draw() {
  background(0);  
 Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(star.random.x,star.position.y,random)
 fairy.display;
}