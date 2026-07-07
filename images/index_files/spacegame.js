//images
let saturnX = 700;
let saturnY = 0;

let earthX = 300;
let earthY = 500;

let astronaut


let astroidX = 250;
let astroidY = -120;

let spaceshipX = 750;
let spaceshipY = 550;

let moonX = 1200;
let moonY = 500;

let ufoX = 1200;
let ufoY = -10

//controls
let button
let gameScreen = "start"
let xPos
let yPos


//fonts
let airstrike

//sound
let calmMusic
let playButton

let mouseDist
let loseBool = false

function preload(){

	//images
	saturn = loadImage('images/saturn.png')	
	earth = loadImage('images/earth.png')
	astronaut = loadImage('images/astronaut.png')
	astroid = loadImage('images/astroid.png')
	spaceship = loadImage('images/spaceship.png')
	moon = loadImage('images/moon.png')
	ufo = loadImage('images/ufo.png')

	//font
	airstrike = loadFont('airstrike.ttf')

	//sound
	calmMusic = loadSound('audio/calmMusic.mp3')

}



function setup (){
canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')


	button = createButton('Start')
	button.mousePressed(gameLoad)
	button.position(665,350)
	imageMode(CENTER)


}

function gameLoad(){
	gameScreen = 'game';
	button.hide();

	calmMusic.loop();

}

function drawStartScreen(){
background(0)

  	textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Press Play to start!", 700, 300 );
}

function drawGame(){
background(52, 37, 89)

//mouseDist = dist(mouseX, mouseY, xPos, yPos)

if(dist(mouseX, mouseY, saturnX, saturnY) < 250){
			//score ++
			print("hit saturn")
			gameScreen = 'lose'
			// xPos = random(16, windowWidth-150)
			// yPos =random(16,windowHeight-150)
		}

	image(saturn, saturnX, saturnY, 500, 500)

	image(earth, earthX, earthY, 300, 300)

	image(astroid, astroidX, astroidY, 500, 500)

	image(spaceship, spaceshipX, spaceshipY, 400, 400)

	image(moon, moonX, moonY, 200, 200)

	image(ufo, ufoX, ufoY, 200, 200)

//astronaut
	image(astronaut, mouseX, mouseY, 150, 150)
}

function draw (){
   if (gameScreen == "start") {
        drawStartScreen();
    }

    if (gameScreen == "game") {
        drawGame();
    }

    if(gameScreen == "lose"){
		drawLoseScreen()
    }




function drawLoseScreen(){
background(255, 0, 0)

}

}

function windowResized(){

	resizeCanvas (windowWidth, windowHeight);

}

