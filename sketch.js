
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var block3;

function preload()
{
}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Crie os Corpos Aqui.
  var plane_options = {
    isStatic: true
  };

  plane = Bodies.rectangle(width / 2, height, width, 100, plane_options);
  World.add(world, plane);


  var block1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0
  };

  block1 = Bodies.circle(250, 10, 50, block1_options);
  World.add(world, block1);


  var block2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1
  };

  block2 = Bodies.rectangle(100, 50, 100, 100, block2_options);
  World.add(world, block2);

  
  var block3_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir: 0.3
  };

  block3 = Bodies.rectangle(450, 50, 200, 100, block3_options);
  World.add(world, block3);


  Engine.run(engine);
}


function draw() {
  Engine.update(engine);

  background(0);

  rectMode(CENTER);
  ellipseMode(CENTER);

  fill(127);
  rect(plane.position.x, plane.position.y, width, 100);

  fill(255, 0, 0);
  ellipse(block1.position.x, block1.position.y, 100);
  rect(block2.position.x, block2.position.y, 100, 100);
  rect(block3.position.x, block3.position.y, 200, 100);
  
  drawSprites();
 
}



