const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var drops=[];
var maxDrops=100;
var rain;

function preload(){
    
}

function setup(){
   createCanvas(600,600);

   engine=Engine.create();
   world=engine.world;
   Engine.run(engine);

  /* if(drops.length<maxDrops){
      pos=[];
      drops.push(pos);
   */
  if(frameCount%60===0){
   for(var i=1;i<maxDrops;i++){
     drops.push(new Drop(random(0,600),random(0,550)));
     
   }
  }

   
}

function draw(){
    background("black");
    Engine.update(engine);
   for(var i=1;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
   }

}   

