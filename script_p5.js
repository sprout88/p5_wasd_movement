//script.js

let bullets = [];
let enemies = [];
let score = 0;

//player
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let x = 200;
let y = 100;
let speed =1.5;

function preload(){    
    //playerImg = loadImage("sprite/tyler1-select.png");
    playerImg = loadImage("sprites/goblin-select.png");
    //playerImg = loadImage("sprites/duck.gif");
    bulletImg = loadImage("sprites/bullet.png");
    //enemyImg = loadImage("sprites/goblin-select.png");
}

function setup(){
    createCanvas(800,450);
    playerImg.resize(100,100);

}

setInterval(()=>{
    if(moveLeft){
        x+=speed;
    }else if(moveRight){
        x-=speed;
    }else if(moveUp){
        y-=speed;
    }else if(moveDown){
        y+=speed;
    }
        

        
},1);

document.onkeydown = function (event) {
    if (event.keyCode === 68){//D
        console.log('d');
        moveLeft=true;
    } 
    else if (event.keyCode === 83){//S
        console.log('s')
        moveDown=true;
    }  
        
    else if (event.keyCode === 65){ //A
        console.log('a');
        moveRight=true;
    }
    else if (event.keyCode === 87){ //W
        console.log('s');
        moveUp=true;
    }
}
document.onkeyup = function(event){
    if (event.keyCode === 68){//D
        console.log('d');
        moveLeft=false;
    } 
    else if (event.keyCode === 83){//S
        console.log('s')
        moveDown=false;
    }  
        
    else if (event.keyCode === 65){ //A
        console.log('a');
        moveRight=false;
    }
    else if (event.keyCode === 87){ //W
        console.log('s');
        moveUp=false;
    }
}

function draw(){
        background(220);
        image(playerImg,x,y);
    }