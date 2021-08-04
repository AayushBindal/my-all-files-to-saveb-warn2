// loading images 
var pacman;
var pacmanImg;
var disabledGhostImg;
var foodImg;

// loading sounds
var starting;

// have new variables
var wallGroup;
var wall1, wall2, wall3, wall4, wall5, wall6;
var wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42;
var wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;
var wall61, wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70, wall71, wall72, wall73, wall74, wall75, wall76, wall77, wall78;
var wall79, wall80, wall81, wall82, wall83, wall84, wall85, wall86, wall87, wall88, wall89, wall90;
var wallMonster1, wallMonster2, wallMonster3, wallmonsl;
var demon1, demon2, demon3, demon4;
var demon1Img, demon2Img, demon3Img;
var loopfood;
var wallSprite;

function preload(){
    pacmanImg = loadImage("../images/pacman.png");
    disabledGhostImg = loadImage("../images/disabledGhost.png");
    foodImg = loadImage("../images/cherryFood.png");
    demon1Img = loadImage("images/red ghost left.png");
    demon2Img = loadImage("images/yellow ghost left.png");
}

function setup(){
    createCanvas(displayWidth-140, displayHeight-180);
    loopfood = new loopFood();
    loopfood.foodMaker();
    wallSprite = new Wall();
    wallSprite.wallCreate();
    makesprites();
    pacman = createSprite(displayWidth/60+10, displayHeight/1.334, 100, 100);
    pacman.addAnimation("pacman", pacmanImg);
    pacman.scale = 0.052;
    if(keyCode === 39){pacman.velocityX = 3;}

    pacman.setCollider("circle", 0, 0);
    demon1 = createSprite(displayWidth/3+120, displayHeight/2.5+70, 20, 20);
    demon1.addImage("animation", demon1Img);
    demon1.scale = 0.19;
    demon2 = createSprite(displayWidth/3+150, displayHeight/2.5+70, 20, 20);
    demon2.addImage("animation", demon2Img);
    demon2.scale = 0.1;

    demon3 = createSprite(displayWidth/3+180, displayHeight/2.5+70, 20, 20);
    demon4 = createSprite(displayWidth/3+210, displayHeight/2.5+70, 20, 20);
    var rand = random(3, 20);
    demon1.velocityX = rand;
    demon2.velocityY = rand
    demon3.velocityX = -1*rand;
    demon4.velocityY = -1*rand;
}

function draw(){
    background(0);
    demonMovement();
    setPath();    
    console.log(pacman.depth);
    demon1.bounceOff(wallGroup);
    demon2.bounceOff(wallGroup);
    demon3.bounceOff(wallGroup);
    demon4.bounceOff(wallGroup);
    demon1.bounce(demon2);
    demon1.bounce(demon3);
    demon1.bounce(demon4);
    demon2.bounce(demon3);
    demon2.bounce(demon4);
    demon3.bounce(demon4);

     if(demon1.velocityX === 0&&demon1.velocityY === 0){
        demon1.setVelocity(2, 3);
     }
     if(demon2.velocityX === 0&&demon2.velocityY === 0){
         demon2.setVelocity(2, 3);
     }
     if(demon3.velocityX === 0&&demon3.velocityY === 0){
         demon3.setVelocity(2, 3);
     }
     if(demon4.velocityX === 0&&demon4.velocityY === 0){
         demon4.setVelocity(2, 3);
     }
    drawSprites();
}

function setPath(){
     if(wallGroup.isTouching(pacman)){
        pacman.setVelocity(pacman.velocityX*-1, pacman.velocityY*-1);
    }
     if(keyDown("DOWN_ARROW")){
        pacman.mirrorX(1);
        pacman.setVelocity(0, 3);
    }
    else if(keyDown("UP_ARROW")){
        pacman.mirrorY(1);
        pacman.setVelocity(0, -3);
    }
    else if(keyDown("LEFT_ARROW")){
        pacman.mirrorX(-1);
        pacman.setVelocity(-3, 0);
    }
    else if(keyDown("RIGHT_ARROW")){
        pacman.mirrorX(1);
        pacman.setVelocity(3, 0);
    }
}

function demonMovement(){
    if(wallGroup.isTouching(demon1)){
       // demon1.velocityX = demon1.velocityX *(-1);
    }
    if(wallGroup.isTouching(demon2)){
       // demon2.velocityY *= -1;
    }
}

function makesprites(){

    wallMonster1 = createSprite(displayWidth/3+80, displayHeight/2.2, 20, 100);
    wallMonster2 = createSprite(displayWidth/3+170, displayHeight/2.5+100, 200, 20);
    wallMonster3 = createSprite(displayWidth/3+260, displayHeight/2.18, 20, 110);
    wallmonsl = createSprite(displayWidth/2-90, displayHeight/2.5, 190, 2);
    wallmonsl.shapeColor = "blue";
    
    // group of walls
    wallGroup = createGroup();
    wallGroup.add(wall1); wallGroup.add(wall2); wallGroup.add(wall3); wallGroup.add(wall4); wallGroup.add(wall5); wallGroup.add(wall6);
    wallGroup.add(wall7); wallGroup.add(wall8); wallGroup.add(wall9); wallGroup.add(wall10); wallGroup.add(wall11); wallGroup.add(wall12);
    wallGroup.add(wall13); wallGroup.add(wall14); wallGroup.add(wall15); wallGroup.add(wall16); wallGroup.add(wall17); wallGroup.add(wall18);
    wallGroup.add(wall19); wallGroup.add(wall20); wallGroup.add(wall21); wallGroup.add(wall22); wallGroup.add(wall23); wallGroup.add(wall24);
    wallGroup.add(wall25); wallGroup.add(wall26); wallGroup.add(wallMonster1); wallGroup.add(wallMonster2); wallGroup.add(wallMonster3);
    wallGroup.add(wall27); wallGroup.add(wall28); wallGroup.add(wall29); wallGroup.add(wall30); wallGroup.add(wall31); wallGroup.add(wall32);
    wallGroup.add(wall33); wallGroup.add(wall34); wallGroup.add(wall35); wallGroup.add(wall36); wallGroup.add(wall37); wallGroup.add(wall38);
    wallGroup.add(wall39); wallGroup.add(wall40); wallGroup.add(wall41); wallGroup.add(wall42); wallGroup.add(wall43); wallGroup.add(wall44);
    wallGroup.add(wall45); wallGroup.add(wall46); wallGroup.add(wall47); wallGroup.add(wall49); wallGroup.add(wall50); wallGroup.add(wall51);
    wallGroup.add(wall53); wallGroup.add(wall55); wallGroup.add(wall56); wallGroup.add(wall57); wallGroup.add(wall58); wallGroup.add(wall60);
    wallGroup.add(wall62); wallGroup.add(wall63); wallGroup.add(wall64); wallGroup.add(wall65); wallGroup.add(wall66); wallGroup.add(wall67);
    wallGroup.add(wall68); wallGroup.add(wall69); wallGroup.add(wall70); wallGroup.add(wall71); wallGroup.add(wall72); wallGroup.add(wall74);
    wallGroup.add(wall75); wallGroup.add(wall77);
    wallGroup.setColorEach("blue");
}
