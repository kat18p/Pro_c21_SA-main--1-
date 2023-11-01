const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


var ball
var ground;
var ground2;
var left;
var right;
var right2;
var top_wall;

function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;
  
  btn1 = createImg("right.png");
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(Hforce)

  btn2 = createImg("push.png");
  btn2.position(150,30);
  btn2.size(50,50);
  btn2.mouseClicked(Vforce)

  ground2 =new Ground(1,100,150,10);
  ground =new Ground(170,390,550,40);
  right = new Ground(390,30,20,400);
  right2 = new Ground(80,80,10,35);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);


  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground2.show();
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  right2.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,18)
}

function Hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function Vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}

function Eforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}