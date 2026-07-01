let bee

function preload(){

  bee = loadImage('images/bee.png')
}
function setup (){
	createCanvas(windowWidth,windowHeight)

for(let i = 0; i<100; i++)
	 image(bee, random(windowWidth),random(windowHeight), 20, 20)
}

function draw (){
	//background(255,50,45)

	fill(50,60,70)
	//for(let i = 0; i<100; i++)
		//ellipse(random(windowWidth),random(windowHeight), 80, 80)
		// for(let i = 0; i<100; i++)
		// image(bee, random(windowWidth),random(windowHeight), 20, 20)
	// for (let i = 0;i < windowWidth; i = i+100){
	// 	line(i,0,i, windowHeight)

	// }

	// for(let i = 0; i < windowWidth; i = i+100){
	// 	line(0,i,windowWidth,i)
	// }


	ellipse(mouseX, mouseY, 200, 200)

}