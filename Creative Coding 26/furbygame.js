let xPos 
let yPos

let xSpeed = 2
let ySpeed = 2


let furby

let score = 0

let mouseDist

let startBool=true
let winBool=false


function preload(){
	furby = loadImage('images/furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	imageMode(CENTER)
}

function draw(){
	 
	if(startBool == true){
	startGame()
}
	if(winBool == true){
	winGame()
}
}

function startGame (){

	background(27, 194, 227)
	fill(0)
		textSize(30)
		text('Tag the Furby!    Your Score is: ' + score + ' points', 20, 100)
		
		//move the furby
		xPos = xPos + xSpeed
		yPos = yPos + ySpeed

		image(furby, xPos, yPos, 30,30)

		//calculating the distace
		mouseDist = dist(mouseX, mouseY, xPos, yPos)

		print(mouseDist)

		//furby animation
		if(xPos >= windowWidth - 15 || xPos <= 15){
			xSpeed = xSpeed * -1
		}

		if(yPos >= windowHeight - 15 || yPos <= 15){
			ySpeed = ySpeed * -1
		}

		if(mouseDist<16){
			score ++
			xPos = random(16, windowWidth-16)
			yPos =random(16,windowHeight-16)

			xSpeed = xSpeed * 1.1
			ySpeed = ySpeed * 1.1
		}

		//checking score

		if(score == 10){
			winBool = true
			startBool = false


		}

}

function winGame (){
	background(0,255,0)
	fill(255)
	textSize(40)
	text('WINNER!', 600,windowHeight/2)
}
