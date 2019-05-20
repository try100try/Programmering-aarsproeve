var valg=1;
var freebird=0;
var xpos=350;
var ypos=375;
var speedx=1;
var speedy=1;
var sizex=50;
var sizey=50;
var s=0;
function setup() {
    createCanvas(400, 400);
objekter();
}

    function draw() {
        background(255-(50*valg));
    selector();
    spawner();

}

    function spawner(){
        //Jeg vil gerne optimere det her.
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
    ellipse(150,150,50,50);
    text("ellipse(150,150,50,50)",90,120);
    fill(200,100,0);
    text("rect(width-200,height-150,100,75)",155,240);
    stroke(0);
    rectMode(CORNER);
    rect(width-200,height-150,100,75);
    fill(0);
    ellipse(width-200,height-150,15,15);
    ellipse(150,150,15,15);
    text(mouseX,mouseX+15,mouseY+15);
    text(mouseY,mouseX+15,mouseY+30);
    }
    //variabler, betingelser samt logistiske udsagn! UwU
    function lvl2(){
    if (keyIsDown(32) && freebird<=0){
    if (s==50){
    s=0;
    freebird=1;
    } else {
    s=50;
    freebird=1;
    }
    }
    fill(255-s*5);
    xpos=xpos+speedx;
    ypos=ypos+speedy;
    ellipse(xpos,ypos,sizex,sizey);
    if (xpos>=400-s/2 || xpos<=0+s/2){
    speedx=speedx*-1;
    if (xpos>=400-s/2){
    speedx=random(-.75,-5);
    }
    if (xpos<=0+s/2){
    speedx=random(.75,5);
    }
    sizex=random(25,75);
    sizey=random(25,75);
    }
    if (ypos>=400-s/2 || ypos<=0+s/2){
        speedy=speedy*-1;
        if (ypos>=400-s/2){
        speedy=random(-.75,-5);
        }
        if (ypos<=0+s/2){
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
            col: color(255),
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
            game = {
                x: width/2,
                y:height/2,
                size: 100,
                col: 255,
                speed: 1,
                timer: 15,

                show: function(){
                rectMode(CENTER);
                fill(this.col);
                rect(this.x,this.y,this.size,this.size);
                },
                play: function(){
                this.x=this.x+this.speed;
                this.timer--;
                if (mouseIsPressed && mouseX<game.x+game.size/2 && mouseX>game.x-game.size/2 && mouseY<game.y+game.size/2 && mouseY>game.y-game.size/2 && this.timer<=0){
this.speed=this.speed*1.35;
this.size=this.size/1.1;
                }
                if (mouseIsPressed && this.timer<=0){
                    this.timer=15;
                    }
                if (this.x>width+this.size/2){
                this.x=0-this.size/2+-random(5,100);
                this.y=random(0+this.size/2,height-this.size/2);
                }
                }
                }
        }
//objekter
function lvl3(){
ni.show();
if (mouseIsPressed){
ni.move();
}
}



function lvl4(){
    game.show();
    game.play();
}
