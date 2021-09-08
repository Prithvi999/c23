
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground, wall, wall1;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	wall = new Ground(800,410,5,70);
	wall1 = new Ground(970,410,5,70);
	ground =new Ground(550,450,1100,5);

	var ball_options = {
		isStatic:false,
		friction: 0.5,
		restitution:0,
		density:1.2,
	}


	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
   

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background(0);

  Engine.update(engine);
  
  fill("white")
  ellipse(ball.position.x,ball.position.y, 10);

  wall.show();
  wall1.show();
  ground.show();
 

  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x: 76, y: -76})  
	  }
}


	