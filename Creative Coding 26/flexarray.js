let sun

let sunX = []
let sunY = []

function preload(){

	sun = loadImage('images/sun.png')
}


function setup(){
	createCanvas(windowWidth,windowHeight);
	imageMode(CENTER)

	for (let i=0; i<10; i++){
		sunX.push(random(30,windowWidth - 30))
		sunY.push(random(30,windowHeight - 30))
	}

}

function draw(){
	background(168, 131, 177)

	for(let i = 0; i < sunX.length; i++){
		image(sun, sunX[i], sunY[i], 80, 80)

	if(dist(mouseX, mouseY, sunX[i], sunY[i]< 30 && mouseIsPressed)){
		sunX.splice(i,1)
		sunY.splice(i,1)
		}
	}
	
}

function mouseClicked(){
	sunX.push(mouseX)
	sunY.push(mouseY)
}

function keyPressed(){

	if(key === 'x'){
		sunX.splice(sunX.length -1,1)
		sunY.splice(sunY.length -1,1)

		
	}
	if (key === 'a'){
		sunX.push(mouseX)
	 	sunY.push(mouseY)
}

}