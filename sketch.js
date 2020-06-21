const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16,box17;
var box18;
var polyimage;

function preload(){
  polyimage = loadImage("hexa.png");
}

function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stand = new Ground(550,350,400,50);
  //bottom layer1
  box1 = new Box(500,310,30,40);
  box2 = new Box(530,310,30,40);
  box3 = new Box(560,310,30,40);
  box4 = new Box(590,310,30,40);
  box5 = new Box(620,310,30,40);
  box6 = new Box(650,310,30,40);
  box7 = new Box(680,310,30,40);
  

//layer2

box8 = new Box(530,270,30,40);
box9 = new Box(560,270,30,40);
box10 = new Box(590,270,30,40);
box11 = new Box(620,270,30,40);
box12 = new Box(650,270,30,40);

//layer3

box13 = new Box(560,230,30,40);
box14 = new Box(590,230,30,40);
box15 = new Box(620,230,30,40);


//layer4

box16 = new Box(575,190,30,40);
box17 = new Box(605,190,30,40);

//layer5

box18 = new Box(590,150,30,40);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
  imageMode(CENTER)
  image(polyimage,polygon.position.x,polygon.position.y,40,40);

}

function draw() {
  background("black");
  Engine.update(engine);  
  stand.display();
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
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  slingShot.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}