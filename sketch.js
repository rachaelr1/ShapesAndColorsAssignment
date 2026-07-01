
//furby varibale
//let furby

//flower variable
let flower

//bee variable
let bee

//sun variable
let sun

let dragonfly

let mosquito

let dragonflybool = false

let mosquitobool = false


function preload(){
  //furby = loadImage('images/furby.png')
  bee = loadImage('images/bee.png')
  flower = loadImage('images/flower.png')
  sun = loadImage('images/sun.png')
  dragonfly = loadImage('images/dragonfly.png')
  mosquito = loadImage('images/mosquito.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  background(206, 190, 220)
}

function draw() {
background(206, 190, 220)
  //image(furby, windowWidth/2, windowHeight/2, 200,200)

//flowers
  image(flower, 100, 700, 200,200)
  image(flower, 200, 700, 200,200)
  image(flower, 300, 700, 200,200)
  image(flower, 400, 700, 200,200)
  image(flower, 500, 700, 200,200)
  image(flower, 600, 700, 200,200)
  image(flower, 700, 700, 200,200)
  image(flower, 800, 700, 200,200)
  image(flower, 900, 700, 200,200)
  image(flower, 1000 , 700, 200,200)
  image(flower, 1100 , 700, 200,200)
  image(flower, 1200 , 700, 200,200)
  image(flower, 1300 , 700, 200,200)
  image(flower, 1400 , 700, 200,200)
  image(flower, 1500 , 700, 200,200)

//bee
  image(bee,900, 500, 100,100)

//sun
  image(sun,1300, 110, 200,200)


  //print(mouseX)
  //background(206, 190, 220);
  //background(random(23), random(23), random(200))
  stroke(219, 68, 207)
  strokeWeight(5)
  //point(300,400)
//line(0, 0, 350, 400)

  
  //rect styles
   //fill(50, 76, 200, 200)
  //rect(400,400,150,300)

  //butterfly
  noStroke()
//elipse style
  fill(252, 252, 126)
ellipse(400,400,90,400)


//triangle styles
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(100,50,100,300,355,300)

  stroke(252, 252, 126)
   triangle(120,100,120,280,355,300)

  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(700,50,700,300,445,300)

   stroke(252, 252, 126)
   triangle(680,100,680,280,445,300)
  
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(445,305,700,600,445,600)

   stroke(252, 252, 126)
 triangle(445,305,660,580,465,580)
  
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(355,305,100,600,355,600)

  stroke(252, 252, 126)
  triangle(355,305,140,580,335,580)
  
  //lines
   stroke(140, 75, 214)
  line(300, 50, 400, 200)

  line(500, 50, 400, 200)

//   if (mouseIsPressed){
//     image(dragonfly,mouseX, mouseY, 100,100)

// if (mouseIsPressed){
//     image(mosquito,mouseX, mouseY, 100,100)
  // }
  if(dragonflybool == true){
    dragonflyobject()
}

  if (mosquitobool == true){
    mosquitoobject()

  }
  
  
}

function dragonflyobject(){

  if (mouseIsPressed){
    image(dragonfly,mouseX, mouseY, 100,100)

  }

}

function mosquitoobject(){

  if (mouseIsPressed){
    image(mosquito,mouseX, mouseY, 100,100)

  }

}

function keyPressed(){
  if(key === 'd'){

    dragonflybool = true
    mosquitobool = false

  }

   if(key === 'm'){

    dragonflybool = false
    mosquitobool = true
  }
}


