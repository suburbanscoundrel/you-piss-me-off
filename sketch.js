let mad;
let sorry;
let sorryW = 150;
let sorryH = sorryW * 0.408;
let madTiles = [];
let tileOptions = [200, 225, 250, 275, 300]
let test;


function preload() {
  mad = loadImage('assets/qisiwole1.png');
  sorry = loadImage('assets/sorry.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#152b5b');
  // test = new MadTiles(100, 100, 300, 300*0.40678);
  let totalTiles = random(tileOptions);
  for (let i = 0; i < totalTiles; i++) {
    madW = random(300, 500);
    madH = madW*0.40678
    let m = new MadTiles(random(250, width-250), random(150, height-150), madW, madH,);
    madTiles.push(m);
  }
}

function draw() {
  background('#152b5b');
  imageMode(CENTER);
  image(sorry, width/2, height/2, sorryW, sorryH);
  // test.show();
  for (let i = 0; i < madTiles.length-1; i++) {
    madTiles[i].move();
    madTiles[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let i = 0; i < madTiles.length-1; i++) {
    if(mouseX > madTiles[i].leftSide && mouseX < madTiles[i].rightSide && mouseY > madTiles[i].bottomSide && mouseY < madTiles[i].topSide) {
      madTiles.splice(i,1);
    }
  }
}

class MadTiles {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.leftSide = this.x - (this.x/2);
    this.rightSide = this.x + (this.x/2);
    this.topSide = this.y + (this.y/2);
    this.bottomSide = this.y - (this.y/2);
  }

  display() {
    imageMode(CENTER);
    image(mad, this.x, this.y, this.w, this.h);
  }

  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

}