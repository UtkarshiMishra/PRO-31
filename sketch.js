const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var i;

function setup() {
  createCanvas(400,650);
  createSprite(200, 200, 50, 50);
  p1 = new Particle(5,25,10)

}

function draw() {
  background(0);  
  p1.display();
  drawSprites();
}