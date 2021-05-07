var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var ball;
var count=0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(mouseX+ " , " + mouseY,200,20);
 text("100",424,555);
 text("100",345,555);
 text("100",513,555);
 text("500",276,555);
 text("200", 590,555);
 text("500",195,555);
 text("500", 117,555);
 text("200",675,555);
 text("200",755,555);
 text("500",30,555);
 text("Count : "+ count, 695,36);
 text("GOAL: 2500", 425,30)
  Engine.update(engine);
 
  if(gameState =="end"){

    fill("white");
    textSize(20);
   
    text("YOUR SCORE: "+ score, 400, 350);
   
  
  }
  if(score===2500){
    fill("white");
    textSize(20)
    fill("green");
    text("YOU WON!" , 250, 350);
    gameState= "end";
  }
  else if(score<2500 && gameState =="end"){
    fill("red");
    textSize(20);
    text("BETTER LUCK NEXT TIME" , 100,350);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(ball!=null){
     ball.display();
     if(ball.body.position.y>770){
     if(ball.body.position.x<320 && ball.body.position.x>0){
       score=score+500;
       ball=null;
       if(count>=5){
         gameState= "end";
          //count=0;
          }}
     else  if(ball.body.position.x>320 && ball.body.position.x<560){
        score=score+100;
        ball=null;
        if(count>=5){
          gameState= "end";
           //count=0;
        }
     
    }
    else if(ball.body.position.x>560 && ball.body.position.x<800){
      score=score+200;
      ball=null;
      if(count>=5){
        gameState= "end";
      // count=0;
      }
  }
   
     

    }}
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
    if(gameState!== "end"){
      count=count+1;
      ball= new Particle(mouseX,10,10,10);
    }
 
}