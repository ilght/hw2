function setup() {
  createCanvas(1400, 400);
}

//GRASSSSSSS....IS GREEN
function draw() {
  background(200);
  printG(50, 70);
  printR(100, 70);
  printA(150, 70);
  printS(220, 70);
  printS(270, 70);
  printS(320, 70);
  printS(370, 70);
  printI(50, 200);
  printS(70, 200);
  printG(150, 200);
  printR(200, 200);
  printE(250, 200);
  printE(300, 200);
  printN(350, 200);
  

}


function printG(x, y) {
  line(x, y, x - 25, y + 60);
  line(x + 10, y, x + 30, y);
  line(x, y + 30, x + 15, y + 30);
  line(x - 15, y + 60, x + 5, y + 60);
  line(x + 15, y + 30, x - 15, y + 60);
}

function printR(x, y) {
  line(x, y, x - 25, y + 60);
  line(x + 10, y, x + 30, y);
  line(x - 5, y + 30, x + 15, y + 30);
  line(x + 30, y, x + 15, y + 30)
  line(x, y + 35, x + 15, y + 60)
}


function printA(x, y) {
  line(x+35, y, x - 25, y + 60);
  line(x + 35, y + 4, x + 30, y + 60);
  line(x + 7, y + 30, x + 20, y + 30);
}

function printS(x, y) {
  line(x, y, x - 15, y + 30);
  line(x - 8, y + 30, x + 15, y + 30)
  line(x + 20, y + 30, x + 5, y + 60)


}

function printI(x, y) {
  line(x, y, x - 25, y + 60);

}

function printE(x, y) {
  line(x, y, x - 25, y + 60);
  line(x + 10, y, x + 30, y);
  line(x - 5, y + 30, x + 10, y + 30);
  line(x - 15, y + 60, x + 10, y + 60);
}

function printN(x, y) {
  line(x, y, x - 25, y + 60);
  line(x + 40, y, x + 15, y + 60);
  line(x + 2, y + 5, x + 13, y + 55);
}
