let lineBrushBool = false
let ellipseBrushBool = false


function setup(){
	createCanvas(windowWidth,windowHeight)
	background(255, 255, 255)
}

function draw () {
	
	if(lineBrushBool == true){
	lineBrush();
	}	

	if(ellipseBrushBool == true){
		ellipseBrush();
	}
	
}

	if (mouseIsPressed){
		fill(random(255),random(255),random(255))
		ellipse(mouseX,mouseY,20,20)
	}



function lineBrush(){
	stroke(random(255), random(255), random (255))
	strokeWeight(5)

		if (mouseIsPressed){
		line(pmouseX, pmouseY, mouseX, mouseY)
		}
}

function ellipseBrush (){

		if (mouseIsPressed){
		strokeWeight(0)
		fill(random(255),random(255),random(255))
		ellipse(mouseX,mouseY,20,20)
		}
}



function keyPressed(){

	if (key === 'l'){
		lineBrushBool = true
		ellipseBrush = false
	}

	if (key === 'e'){

		lineBrushBool = false
		ellipseBrushBool = true
	}

	if (key === 's'){
		lineBrushBool = false
		ellipseBrushBool = true
	}

	if (key === 'c'){
		 lineBrushBool = false
		 ellipseBrushBool = false
		 background(255,255,255)

	}

	if (key === 's')
		save('myDrawing.jpg')

}


