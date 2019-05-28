var radius = 30;

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.dx = random(3);
  this.dy = random(3);
  this.r = radius;

  var r = random(255);
  var g = random(255);
  var b = random(255);

  this.show = function () {
    // fill(r, g, b);
    fill(24, 23, 125);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.grow = function () {
    this.r++;
  }

  this.line = function () {
    circles.forEach(element => {
      if (dist(this.x, this.y, element.x, element.y) < 100 &&
        element != this) {
        stroke(35)
        line(this.x, this.y, element.x, element.y)
      }
    });
  }

  this.move = function () {
    if (this.x - this.r < 0 || this.x + this.r > window.innerWidth) {
      this.dx *= -1;
    }
    if (this.y - this.r < 0 || this.y + this.r > window.innerHeight) {
      this.dy *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;

    // this.show();
  }
}

var circles = [];

var img;

function preload() {
  // console.log(img);
}

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 50; i++) {
    var c = new Circle(random(radius, window.innerWidth - radius), random(radius, window.innerHeight - radius));
    circles.push(c);
  }
  
  
  img = loadImage("salam.jpg");
  
}
function draw() {
  var px,py;
  background(235);
  
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var dp = (x + width * y)*4;
      pixels[dp]=255;
      pixels[dp+1]=0;
      pixels[dp+2]=255;
      pixels[dp+3]=255;
    }
  }
  updatePixels();
  

  image(img, 0, 0)

  circles.forEach(element => {
    element.show();
    element.move();
    element.line();
  });

  // circles.forEach(element => {
  //   if (dist(mouseX, mouseY, element.x, element.y) < 150) {
  //     if (element.r < radius * 5) {
  //       element.r += 3;
  //     }
  //   } else {
  //     if (element.r > radius)
  //       element.r -= 3;
  //   }
  // });
}