
let saturn
let earth
let astronaut
let astroid
let spaceship
let moon


function preload(){
	saturn = loadImage('images/saturn.png')	
	earth = loadImage('images/earth.png')
	astronaut = loadImage('images/astronaut.png')
	astroid = loadImage('images/astroid.png')
	spaceship = loadImage('images/spaceship.png')
	moon = loadImage('images/moon.png')
	ufo = loadImage('images/ufo.png')

}


function setup (){
	createCanvas(windowWidth,windowHeight)

}

function draw (){
	background(52, 37, 89)

	image(saturn, 700, 0, 500, 500)

	image(earth, 300, 500, 300, 300)

	image(astronaut, 100, 300, 100, 100)

	image(astroid, 250, -120, 500, 500)

	image(spaceship, 750, 550, 400, 400)

	image(moon, 1200, 500, 200, 200)

	image(ufo, 1200, -10, 200, 200)


}

