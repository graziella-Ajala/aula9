var quadradinho
function setup() {
  createCanvas(400,400);
  quadradinho =createSprite(200,200,20,20)
}

function draw() {
  background(220);
  drawSprites()
  if ( keyDown("up")) {
    quadradinho.y =quadradinho.y -5
  }
}