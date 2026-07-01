//variables
let xPos 
let yPos 

let xSpeed = 2
let ySpeed = 2

let ballDiameter = 100

let bee

function preload(){
 
  bee = loadImage('images/bee.png')
}

function setup (){
	createCanvas(windowWidth,windowHeight)

	xPos=windowWidth/2
	yPos=windowHeight/2

	imageMode(CENTER)
}

function draw (){
	background(161, 213, 255)

	fill(250,251,252)
	image(bee, xPos, yPos, ballDiameter, ballDiameter)
	// ellipse(xPos, yPos, ballDiameter, ballDiameter)

	//moving ball
	if(mouseIsPressed){
	xPos = xPos + xSpeed* 1
	yPos = yPos + ySpeed* 1
}
	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter){
		//reverse x speed
		xSpeed = xSpeed* -1
	}

	if(yPos >= windowHeight- ballDiameter/2 || yPos <= ballDiameter){
		ySpeed = ySpeed* -1


	}
}