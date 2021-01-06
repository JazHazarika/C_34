const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28;
var box31,box32,box33,box34,box35,box36,box37,box38;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


   ground = new Ground(width/2,height,width,40);

   ball = new Ball(400,460,90,90);
   rope = new Rope(ball.body,{x:400,y:10});
    
    box1 = new Box(900,740,70,70);
    box2 = new Box(900,670,70,70);
    box3 = new Box(900,600,70,70);
    box4 = new Box(900,530,70,70);
    box5 = new Box(900,460,70,70);
    box6 = new Box(900,390,70,70);
    box7 = new Box(900,320,70,70);
    box8 = new Box(900,250,70,70);
    box9 = new Box(900,180,70,70);
    box10 = new Box(900,110,70,70);
   

    box11 = new Box(830,740,70,70);
    box12 = new Box(830,670,70,70);
    box13 = new Box(830,600,70,70);
    box14 = new Box(830,530,70,70);
    box15 = new Box(830,460,70,70);
    box16 = new Box(830,390,70,70);
    box17 = new Box(830,320,70,70);
    box18 = new Box(830,250,70,70);
    box19 = new Box(830,180,70,70);
    box20 = new Box(830,110,70,70);


    box21 = new Box(760,740,70,70);
    box22 = new Box(760,670,70,70);
    box23 = new Box(760,600,70,70);
    box24 = new Box(760,530,70,70);
    box25 = new Box(760,460,70,70);
    box26 = new Box(760,390,70,70);
    box27 = new Box(760,320,70,70);
    box28 = new Box(760,250,70,70);

    box31 = new Box(690,740,70,70);
    box32 = new Box(690,670,70,70);
    box33 = new Box(690,600,70,70);
    box34 = new Box(690,530,70,70);
    box35 = new Box(690,460,70,70);
    box36 = new Box(690,390,70,70);
    box37 = new Box(690,320,70,70);
    box38 = new Box(690,250,70,70);
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display();

    ball.display();
    rope.display();

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
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

