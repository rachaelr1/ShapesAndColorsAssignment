//images
let saturnX = 750;
let saturnY = 100;

let earthX = 300;
let earthY = 600;

let astronautX;
let astronautY;


let astroidX = 300;
let astroidY = 20;

let spaceshipX = 750;
let spaceshipY = 650;

let moonX = 1200;
let moonY = 600;

let ufoX = 1200;
let ufoY = 90

//controls
let button
let gameScreen = "start"



let vx = 0;
let vy = 0;


const thrust = 0.05;   // how strongly arrow keys push
const drag = 0.995;    // closer to 1 = more "floaty" (less friction)
const maxSpeed = 4;




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

astronautX = width/2
astronautY = height/2
}

function gameLoad(){

	spawnAstronaut();

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
			
//movement
if (keyIsDown(LEFT_ARROW)) vx -= thrust;
if (keyIsDown(RIGHT_ARROW)) vx += thrust;
if (keyIsDown(UP_ARROW)) vy -= thrust;
if (keyIsDown(DOWN_ARROW)) vy += thrust;

vx *= drag;
vy *= drag;

vx = constrain(vx, -maxSpeed, maxSpeed);
vy = constrain(vy, -maxSpeed, maxSpeed);

astronautX += vx;
astronautY += vy;

	image(saturn, saturnX, saturnY, 500, 500)
	if(dist(astronautX, astronautY, saturnX, saturnY) < 250){
		
			gameScreen = 'lose'
			
		}

	image(earth, earthX, earthY, 300, 300)
	if(dist(astronautX, astronautY, earthX, earthY) < 150){
		
			gameScreen = 'lose'
		}

	image(astroid, astroidX, astroidY, 500, 500)
	if(dist(astronautX, astronautY, astroidX, astroidY) < 250){
		
			gameScreen = 'lose'
		}

	image(spaceship, spaceshipX, spaceshipY, 400, 400)
	if(dist(astronautX, astronautY, spaceshipX, spaceshipY) < 150){
		
			gameScreen = 'lose'
		}

	image(moon, moonX, moonY, 200, 200)
	if(dist(astronautX, astronautY, moonX, moonY) < 100){
		
			gameScreen = 'lose'
		}


	image(ufo, ufoX, ufoY, 200, 200)
	if(dist(astronautX, astronautY, ufoX, ufoY) < 100){
		
			gameScreen = 'lose'
		}

//astronaut
	image(astronaut, astronautX, astronautY, 150, 150)

	textAlign(CENTER);
  	textFont(airstrike);
    textSize(50);
    fill(255);
    text('LEVEL 1', 200, 100 );

    if (astronautX > width - 75) {
    gameScreen = "level2";
    spawnAstronaut();
}
}

function drawLevel2Screen(){
	background(10, 20, 30);


	//movement
if (keyIsDown(LEFT_ARROW)) vx -= thrust;
if (keyIsDown(RIGHT_ARROW)) vx += thrust;
if (keyIsDown(UP_ARROW)) vy -= thrust;
if (keyIsDown(DOWN_ARROW)) vy += thrust;

vx *= drag;
vy *= drag;

vx = constrain(vx, -maxSpeed, maxSpeed);
vy = constrain(vy, -maxSpeed, maxSpeed);

astronautX += vx;
astronautY += vy;

	image(astronaut, astronautX, astronautY, 150, 150)


	textAlign(CENTER);
  	textFont(airstrike);
    textSize(50);
    fill(255);
    text('LEVEL 2', 200, 100 );





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

    if (gameScreen =="level2"){
    	drawLevel2Screen();

    }


}

function drawLoseScreen(){
background(0)
	textAlign(CENTER);
  	textFont(airstrike);
    textSize(100);
    fill(255);
    text("YOU LOSE!", 700, 400 );
}

function spawnAstronaut(){
	astronautX = 100;
	astronautY = height/2;

	vx = 0;
    vy = 0;
}



function windowResized(){

	resizeCanvas (windowWidth, windowHeight);

}

