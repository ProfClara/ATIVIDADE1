var ball;

function setup() {
  createCanvas(1200,600);
  ball = createSprite(600,300,50,50)
}

function draw() 
{
  background("red");

  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x +5;
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.x -=5
  }
  drawSprites();

}




