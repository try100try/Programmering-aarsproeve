var valg=1;
var xpos=350;
var ypos=375;
var speedx=1;
var speedy=1;
var sizex=50;
var sizey=50;
function preload() {

}
function setup() {
    createCanvas(400, 400);
    
    
    }
    
    function draw() {
        background(255-(25*valg));
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
    }
    //farver, fill(r,g,b) - rect/ellipse(x,y,width,height)
    function lvl1(){7
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
//objekter og funktioner
function lvl3(){
}