//script.js

let bullets = [];
let enemies = [];
let score = 0;

//player
let direction = 'down';
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let x = 200;
let y = 100;
let speed =1.5;

//이미지를 자르는 데에 쓰이는 변수(스프라이트 방식)
let imgFrameIndex = 100;
let imgWidth = 100;


function preload(){    
    //playerImg = loadImage("sprite/tyler1-select.png");
    playerImg = loadImage("sprites/knight-guide.png");
    //playerImg = loadImage("sprites/duck.gif");
    bulletImg = loadImage("sprites/bullet.png");
    //enemyImg = loadImage("sprites/goblin-select.png");
}

function setup(){
    createCanvas(800,450);
    //playerImg.resize(100,100);

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
        direction='right';
    } 
    else if (event.keyCode === 83){//S
        console.log('s')
        moveDown=true;
        direction='down';
    }  
        
    else if (event.keyCode === 65){ //A
        console.log('a');
        moveRight=true;
        direction='left';
    }
    else if (event.keyCode === 87){ //W
        console.log('s');
        moveUp=true;
        direction='up';
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
        //image(playerImg,x,y); //방향이 없는 이미지 렌더링
        if(direction==='down'){
            image(playerImg,x,y,imgWidth,imgWidth,0,0,imgWidth,imgWidth); //1번째 앞쪽;
        }else if(direction==='up'){
            image(playerImg,x,y,imgWidth,imgWidth,imgWidth*1,0,imgWidth,imgWidth); //2번째 뒷쪽
        }else if(direction==='left'){
            image(playerImg,x,y,imgWidth,imgWidth,imgWidth*2,0,imgWidth,imgWidth); //3번째 왼쪽
        }else if(direction==='right'){
            image(playerImg,x,y,imgWidth,imgWidth,imgWidth*3,0,imgWidth,imgWidth); //4번째 오른쪽
        }
    }