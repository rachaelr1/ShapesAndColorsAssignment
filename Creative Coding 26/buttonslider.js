
let button

let canvas 

let rSlider
let gSlider
let bSlider

let moveSlider

function setup(){
	canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')

	rSlider = createSlider(0,255,0)
	rSlider.position(325,400)

	gSlider = createSlider(0,255,0)
	gSlider.position(windowWidth/2,windowHeight/2)

	bSlider = createSlider(0,255,0)
	bSlider.position(325,435)

	rSlider.hide()
	gSlider.hide()
	bSlider.hide()

	button = createButton("Mix the background color")
	button.mousePressed(colorMixer)
	button.position(windowWidth/2,windowHeight/2)
	
	moveSlider = createSlider(0,windowWidth,0)

	background(0)


}

function colorMixer (){
	print("Color Mixer!!")
	rSlider.show()
	gSlider.show()
	bSlider.show()
	button.hide()
}

function draw(){

	background(rSlider.value(), gSlider.value(), bSlider.value())




	ellipse(moveSlider.value(),windowHeight/2, moveSlider.value(),moveSlider.value())
}