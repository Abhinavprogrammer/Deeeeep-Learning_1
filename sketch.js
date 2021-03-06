//Naming variable for sprites
var ques1, ques1_Image;
var ans1_1, ans1_1Image, ans1_1_c, ans1_1_cImage;
var ans2_1, ans2_1Image, ans2_1_in, ans2_1_inImage;
var click;

function preload()
{
  //Loading images 
  ques1_Image = loadImage("QUES- 1.png");
  ans1_1Image = loadImage("Ans1_1.png");
  ans1_1_cImage = loadImage("Ans1_1_C.png");
  ans2_1Image = loadImage("Ans2_1.png");
  ans2_1_inImage = loadImage("Ans2_1_In.png");

  //Loading sound
  click = loadSound("Click.mp3");
}


function setup() 
{
 createCanvas(windowWidth, windowHeight);

 //Creating sprite for question1
 ques1 = createSprite(680, 200);
 ques1.addImage(ques1_Image);
 ques1.scale = 1;

 //Creating sprite for ans1
 ans1_1 = createSprite(400, 400);
 ans1_1.addImage(ans1_1Image);
 ans1_1.scale = 1;

 //Creating sprite for ans1 correct version
 ans1_1_c = createSprite(400, 400);
 ans1_1_c.addImage(ans1_1_cImage);
 ans1_1_c.scale = 1;
 ans1_1_c.visible = false; 
 

 //Creating sprite for ans2
 ans2_1 = createSprite(1000, 400);
 ans2_1.addImage(ans2_1Image);
 ans2_1.scale = 0.7;

 //Creating sprite for ans2 incorrect version
  ans2_1_in = createSprite(1000, 400);
  ans2_1_in.addImage(ans2_1_inImage);
  ans2_1_in.scale = 0.7;
  ans2_1_in.visible = false;
  
  
}


function draw() 
{
    background("seagreen");

    if(mousePressedOver(ans1_1))
    {
     ans1_1_c.visible = true;
     ans1_1.destroy();
     click.play();
    }

    if(mousePressedOver(ans2_1))
    {
     ans2_1_in.visible = true;
     ans2_1.destroy();
     click.play();
    }
 
  drawSprites();
}