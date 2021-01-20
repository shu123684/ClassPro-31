const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var division = [];
var plinkos = [];
var p;
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  Ground = new ground(480/2, 780, width, 20);

  p = new Particle(300, 50, 10);
  particles.push(p);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  p.display();
  Ground.display()

  for(var i = 0; i <= width; i = i+80){
    division.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j = 0; j < division.length; j++){
    division[j].display();
  }
 

  // plinkos
  for(var k = 40; k<=width; k=k+50){
    plinkos.push(new Plinko(k, 75));
  }
  for(var l = 15; l <= width-10; l=l+50){
    plinkos.push(new Plinko(l, 175));
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }



  drawSprites();
}