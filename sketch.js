

var fighter,fighterImg;

var image1


function preload()
{
//  fighterImg =createImg("fighter.gif");
fighterImg = loadAnimation("Capture7.PNG","Capture8.PNG","Capture9.PNG","Capture10.PNG")
 image1 = loadAnimation("Capture24.PNG","Capture25.PNG","Capture26.PNG","Capture27.PNG")
fighterImg2 = loadAnimation("Capture4.PNG","Capture5.PNG","Capture6.PNG")
  image3 = loadImage("bg.png");
   image4 = loadAnimation("Capture15.PNG");
   image5 = loadAnimation("Capture30.PNG","Capture24.PNG","Capture25.PNG");
   image6 = loadAnimation("Capture32.PNG");
   image7 = loadAnimation("fitmg.png");
   image8 = loadAnimation("Capture11.PNG","Capture12.PNG","Capture13.PNG","Capture14.PNG");
}

function setup() {
  createCanvas(1600,800);
  fighter = createSprite(1200,200)
   fighter.addAnimation("xfty",fighterImg);
   fighter.addAnimation("kick",fighterImg2);
   fighter.addAnimation("d",image4);
   fighter.addAnimation("t",image7);
    
  //  fighter.debug = true;
   fighter.setCollider("rectangle",0,0,300,100)
   fighter.scale = 0.9;
   
  
  boss1 = createSprite(300,200);
  boss1.addAnimation("z",image1)
  boss1.addAnimation("e",image5);
  boss1.addAnimation("d",image6);
  boss1.scale = 1.5
  // boss1.velocityX = -2
  // boss1.velocityY = 2
}

function draw() {
  background(image3); 
//  fighterImg.position(900,40);
 edges = createEdgeSprites();
  fighter.bounceOff(edges);
  boss1.bounceOff(edges);
  if (keyWentDown("k")) 
  { 
    fighter.changeAnimation("kick",fighterImg2);
    // fighter.scale = 0.7
  } 
    if(keyWentUp("k") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }
   
   if(keyDown("left"))
   {
     fighter.velocityX = -3
   }else{
     fighter.velocityX = 0
   }
  if(keyWentDown("down"))
   {
     fighter.changeAnimation("d",image4);
     
   } 
   if(keyWentUp("down") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }

   if(keyDown("right"))
   {
     fighter.velocityX = 3
   }

   if(keyWentDown("down"))
   {
     fighter.changeAnimation("d",image4);
     
   } 
   if(keyWentUp("down") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }

  if(boss1.isTouching(fighter))
  {
    // var pic = Math.round(random(1,2))
    
    // switch(pic)
    // {
    //   case 1 : boss1.changeAnimation("e",image5);
    //   break;
    //   case 2 : boss1.changeAnimation("d",image6);
    //   break;
    //   default : break;
      boss1.changeAnimation("e",image5);
      boss1.scale = 1.3;
      fighter.changeAnimation("kick",fighterImg2);
    }
  
  else{
       boss1.changeAnimation("z",image1);
      //  fighter.changeAnimation("xfty",fighterImg);
      boss1.scale = 1.5;
    }

    if(!fighter.isTouching(boss1))
    {
      fighter.changeAnimation("xfty",fighterImg);
    }

     if(keyDown("s"))
   {
     fighter.changeAnimation("t",image7);
     fighter.scale = 1.5
     
   } else{
      fighter.scale = 0.9;
   }
   
  
  drawSprites();
}

