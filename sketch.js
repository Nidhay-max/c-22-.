var canvas;
var music;
var block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    block1=createSprite(0,560,360,30);
    block1.shapeColor="blue";

    block2=createSprite(295,560,360,30);
    block2.shapeColor="orange";

    block3=createSprite(515,560,360,30);
    block3.shapeColor="red";

    block4=createSprite(740,560,360,30);
    block4.shapeColor="green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 6;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor="blue"
        music.play();
    }



    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor="red"
        music.play();
    }


    
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor= "green"
        music.play();
    }
 

    
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
         
    }
    

    //add condition to check if box touching surface and make it box
        drawSprites();
}
