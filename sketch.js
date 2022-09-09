
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var particle_options = {
		restitution:0.4,
		friction:0.02
	}

	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	

	
	world = engine.world;

	//Crie os Corpos aqui.
	var particle_options = {
		restitution: 0.4,
		friction: 0.02
	}

	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  	
  
  		Engine.update(engine);

		var plane_options={
			isStatic: true
		}




  drawSprites();
 
}



