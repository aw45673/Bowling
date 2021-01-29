const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload(){
    ball=loadImage("ball.png")
}

function setup(){
    var canvas = createCanvas(300,700);
    engine = Engine.create();
    world = engine.world;

    ballBody = Bodies.circle(150 , 50 , 25 , {restitution:0.5, isStatic:true, density:1.5,friction:0.8});
    World.add(world, ballBody);
    leftBody = Bodies.rectangle(0,350,10,700,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(300,350,10,700,{isStatic:true})
	World.add(world,rightBody);

    box1 = new Box(200,622,20,50);
    box2 = new Box(240,622,20,50);
    box3 = new Box(220,622,20,50);
    box4 = new Box(260,622,20,50);
    box5 = new Box(180,622,20,50);
    box6 = new Box(160,622,20,50);
    box12 = new Box(140,622,20,50);
    box7 = new Box(120,622,20,50);
    box8 = new Box(100,622,20,50);
    box9 = new Box(80,622,20,50);
    box10 = new Box(60,622,20,50);
    box11 = new Box(40,622,20,50);
    ground = new Ground(150,height-50,300,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ground.display();
    rectMode(CENTER)
    rect(leftBody.position.x,leftBody.position.y,10,700)
    rect(rightBody.position.x,rightBody.position.y,10,700)
    imageMode(CENTER)
    image(ball,ballBody.position.x,ballBody.position.y,50,50)
    ballBody.position.x=mouseX
}
function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       Matter.Body.setStatic(ballBody,false)  
    }
    else {
        if (keyCode === 32) {
            Matter.Body.setPosition(ballBody,{x:150,y:50})
            
         }
    }
   }
  
   