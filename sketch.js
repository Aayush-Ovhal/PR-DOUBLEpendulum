
let r1 = 200;
let r2 = 200;
let m1 = 40;
let m2 = 40;
let a1 = 0;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;

let g = 1;

let px2 = -1;
let py2 = -1;   

let buffer;

function setup(){
createCanvas(900,900);

a1 = PI/2;
a2 = PI/2;

buffer = createGraphics(width,height);
buffer.background(0);
buffer.translate(width/2,height/2);

}

function draw(){
background(0);
imageMode(CORNER);
image(buffer,0,0,width,height);

let num1 = -g * (2 * m1 + m2) * sin(a1);
let num2 = -m2 * g * sin (a1 - 2 * a2);
let num3 = -2 * sin(a1 - a2) * m2;
let num4 = a2_v * a2_v * r2 + a1_v * a1_v  * r1 * cos(a1 - a2);
let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 *a2));
let a1_a = (num1 + num2 + num3 * num4) / den;

num1 = 2*sin(a1 - a2);
num2 = a1_v * a1_v * r1 * (m1 + m2);
num3 = g * (m1 + m2) * cos(a1);
num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
let a2_a = (num1 * ( num2 + num3 + num4)) / den;

stroke(0,255,255);
strokeWeight(2);

translate(width/2,height/2);

let x1 = r1 * sin(a1);
let y1 = r1 * cos(a1);

let x2 = x1 + r2 * sin(a2);
let y2 = y1 + r2 * cos(a2);

line(0,0,x1,y1);

noStroke();
fill(0,0,255);
ellipse(x1,y1,m1,m1);

stroke(0,255,255);
strokeWeight(2);
line(x1,y1,x2,y2);

noStroke();
fill(0,0,255);
ellipse(x2,y2,m2,m2);

a1_v += a1_a;
a2_v += a2_a;
a1 += a1_v;
a2 += a2_v;



buffer.stroke(random(0,255),random(0,255),random(0,255));
buffer.strokeWeight(3.5);
if (frameCount > 1) {
  buffer.line(px2, py2, x2, y2);
}

px2 = x2;
py2 = y2;
}
