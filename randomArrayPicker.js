let canvas

let randomButton

let randImage = 0

let randoText = 0

let textArray = ['Dog', 'Cat', 'Bug', 'Snake', 'Horse', 'Pig']

let imgs = []

let myImages = ['0.png', '1.png', '2.png', 'tiger.png']


function preload(){
	for (i = 0; i < 3 ; i++){
		imgs[i] = loadImage('images/' + i + '.jpg')
	}


}

function setup (){
canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')

randomButton = createButton('Random Image and Text')
randomButton.mousePressed(randImageText)
randomButton.position(windowWidth/2, windowHeight/2)

text(textArray[1], 10 ,100)
}

function randImageText (){
	randoText = int(random(textArray.length))
	randImage= int(random(imgs.length))
}

function draw (){
	background(255)

	image (imgs[randImage], windowWidth/2, windowHeight/2)

	textSize(200)
	text(textArray[randoText], 400, 300)


}