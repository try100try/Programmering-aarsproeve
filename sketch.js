var valg=1;
var xpos=350;
var ypos=375;
var speedx=1;
var speedy=1;
var sizex=50;
var sizey=50;
var freebird=0;
var timeleft = 10;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);
/*
Min kode er sådan at den starter virkelig dårligt 
og jo mere vi går hen jo mere avanceret/godt bliver det
*/

function setup() {
    createCanvas(400, 400);
objekter();
}

    function draw() {
        
        background(255-(50*valg));
        text(ni.distx,25,25);
    selector();
    spawner();

}

    function spawner(){
if (valg==1){
    lvl1();
}
if (valg==2){
    lvl2();
}
if (valg==3){
    lvl3();
}
if (valg==4){
    lvl4();
}
if (valg>4){
    alert("End of the ride baby");
    valg=4;
}
if (valg<=0){
    valg=1;
}
    }

    function selector(){
        if (freebird>0){
        freebird=freebird-.05;}
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
    if (freebird<=0){
        valg--;
        freebird=1;
    }
} else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
if (freebird<=0){
    valg++;
    freebird=1;
}

}
    }
    //farver, fill(r,g,b) - rect/ellipse(x,y,width,height)
    function lvl1(){
    fill(0,100,200); 
    stroke(200,200,200);
    ellipse(135,255,15,100);
    ellipse(160,255,15,100);
    ellipse(123,200,15,75);
    ellipse(200,180,75,15)
    ellipse(150,200,50,125);
    ellipse(150,125,50,50);
    noStroke(); 
    rect(215,155,25,65);
    rect(215,155,85,25)
    fill(random(200,255),random(50,75),random(50,75))
    rect(300,155,10,25);
    fill(255,255,255);
    ellipse(165,125,10,10);
    ellipse(145,125,10,10);
    fill(0,0,0);
    ellipse(165,125,5,5);
    ellipse(145,125,5,5);
    }
    //variabler, betingelser samt logistiske udsagn! UwU
    function lvl2(){
    fill(255);
    xpos=xpos+speedx;
    ypos=ypos+speedy;
    //ypos=ypos+speedy;
    ellipse(xpos,ypos,sizex,sizey);
    if (xpos>=400 || xpos<=0){
    speedx=speedx*-1;
    if (xpos>=400){
    speedx=random(-.75,-5);
    }
    if (xpos<=0){
    speedx=random(.75,5);
    }
    sizex=random(25,75);
    sizey=random(25,75);
    }
    if (ypos>=400 || ypos<=0){
        speedy=speedy*-1;
        if (ypos>=400){
        speedy=random(-.75,-5);
        }
        if (ypos<=0){
        speedy=random(.75,5);
        }
        sizex=random(25,75);
        sizey=random(25,75);
        }
    }
    function objekter(){
        ni = {
            x: width / 2,
            y: height / 2,
            distx: mouseX,
            disty: mouseY,
            size: 100,
            col: color(255, 255, 255),
            show: function () {
                
                fill(this.col)
                ellipseMode(CENTER)
                ellipse(this.x, this.y, this.size, this.size)
            },
            move: function() {
                this.distx = mouseX-this.x;
                this.disty = mouseY-this.y;
            if (this.distx!=0){
            this.x=this.x+this.distx/3.5;
            }
            if (this.disty!=0){
                this.y=this.y+this.disty/3.5;
                }
        }
                
            }
    }
//objekter
function lvl3(){
ni.show();
if (mouseIsPressed && mouseX<ni.x+ni.size/2 && mouseX>ni.x-ni.size/2 && mouseY<ni.y+ni.size/2 && mouseY>ni.y-ni.size/2){
ni.move();
}
}

function lvl4(){

}