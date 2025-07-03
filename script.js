//this makes circle move accross the screen 
let X=0;
function setup(){
 creatsheet(400,400)
}
draw =function(){
background(212, 173, 106);
ellipse(x,200,50,50);
X+=2;
if(x>width)
x=0;
}
 };