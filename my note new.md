# my daily notes



## Pong Game 

#### day 0 

I learnt how to built rectangles using p5 editor 

    rect(xPosition,yPosition,width,height);     // to create a rectangle



#### day1

I learnt how to write a code using oops (object oriented programming) in p5.editor

    class class_name
    {
        constructor(){
         this.xPosition=?;
         this.yPosition=?;
         this.width=?;
         this.height=?;
        }
        
        display(){
         rect(this.xPosition,this.yPosition,this.width,this.height);
        }
    }
    
    var variable_name;
    function setup(){
        createCanvas(width,height);
        variable_name=new class_name();
    }
    function draw(){
        background("color");
        variable_name.xPosition=?;
        variable_name.yPosition=?;
        variable_name.display();
    }



#### day2

I learnt using cord.org the code 

    //comments to make readable the code
    
        var variable_name(X_Axis,Y_Axis,Width,height);
        object.velocityX=?;
        object.velocityY=?;
        
        sprite.bounceOff(target);  	 // to let sprite only move
        sprite.bounce(target); 		 // to let sprite and target both move 
     function draw(){
        background("color"); 		 // to add background 
        createEdgeSprite(); 	     // to create edges 
        sprite.shapeColor= "white";  // to have any sprite colored  
        sprite.positionY=?;   		 // to change the Y position of a sprite
        drawSprites();
     }



#### day3

I learnt to put conditions to the program by using if in function draw and also I learnt many small functions in code.org

    function draw(){
        textSize(?); 										// to have a text size 						
    	textFont(?);										// to have a text font 
        text("text",X_Axis,Y_Axis);							// to have a text 
        noFill();											// to fill no color in any shape 
        fill("color");										// to fill color in text
        stroke("color");									// to fill color in outline in any text
        
      if(situation){                                      
          the result
        }
        if(keyDown/keyWentDown/KeyWentUp("key")){
          the result 
        }
    }





#### day4

I learnt small functions like RGB and have a practice of previous concepts in code.org

    function draw(){
       rgb("theRedColor","theGreenColor","theBlueColor")    		//to add color of different types
        //the color shouldn't extend 225
    }



#### day5

I learnt about functions and loops  in code.org

    //to call function
    
    function function_name(){       			
      //body of the function for ex-
       sprite.bounceoff(target);
    }
    
    function draw(){
        function_name();
    }
    
    for(var variable_name relation value?,variable_name _relation_value,variable_name = variable_name+ value?){   //order to computerto execute a line no of times;
     }
        ( note--value can be different and relation means +,=,>,< etc.) for ex-
          
    for(var i=10,i>400,i=i+20){
        text("text",X_Axis,Y_Axis);
    } 
    function draw(){
        //other code
    }



#### day6

I learnt to store different game states in a variable and to make 2 player games in code.org

    var gameState = name_of_gameState;           
    // for ex-
    var gameState = serve;
    function draw(){
        //other code 
        gameState===serve                        // to compare a thing we use 3 equal to 
    }



#### day7

I learnt to have different animations and sounds in code.org

    var variable_name(X_Axis,Y_Axis,width,height)   					// to create a sprite
        variable_name.setAnimation("url_of_animation");                 // to label any sprite    
    
    function draw(){
        //other code
    }
    
    function draw(){
        if(situation){
           playSound("url", false/true);
           }
    }
    (note-true will repeat the sound forever and for that you need not to write that in if condition)



#### day8

I learnt to create the world hardest game in code.org and setting scale in code.org

    //create the game such that it is impossible to win for the player  
    
    var variable_name(X_Axis,Y_Axis,width,height)					   // to create a sprite
    																   // more obstacles 
    function draw(){
        background("color");										   // to have a background 
        variable_name.velocityX/Y=?;								   // try to put a lesser value for player 
        sprite.scale=?;												   // to have a scale 
        drawSprites();                                                 // to draw sprites 
    }



## T-rex dinosaur game 

#### day9

I learnt to create infinite screen game , T-rex ,to have an animation,images etc. with p5.editor

    var variable_name1,variable_name2                                   // to have 2 variable for same 
    var variable_name3,variable_name4									// to have 2 variable for same 
    
    function preload(){
        //load animations here                                          
        variable_name1 = loadAnimation("file_name");
        //load images here
        variable_name3 = loadImage("file_name");
    }
    function setup(){
        createCanvas(width,height);
        //add animations here 
        variable_Name2 = createSprite(X_Axis,Y_Axis,width,height);
        variable_Name2.addAnimation("description",variable_name1);
        //add images here
        variable_name4 = createSprite(X_Axis,Y_Axis,width,height);
        variable_name4.addImage("description",variable_name3);
    }
    function draw(){
        //add background 
        background("color");
        //draw sprites
        drawSprites();
    }
    
    //to add gravity to trex
    trex.y = trex.y+value?;

````javascript
// to create edge sprites 
var variable_name   									// for assigning 
var variable_name2										// for edge sprites
function preload(){
    createCanvas(width,height)	
}
function draw(){
    variable_name = createEdgeSprites();				// to create edge sprites 
    variable_name2 _relation_ edge[1], edge[2]          // so on
}
````







#### day10

I learnt to intend the code and to fix 2 minor bugs in Trex game. Also to use console command in a different way  in p5.editor

     to add comments put 2 forward slashes so that computer doesn't read the statement
    // comment
    
       var variable_name(X_Axis,Y_Axis,width,height)
    function function_name(){
    tab//code1               
            //code1
            //code1
    
            //code2
            //code2
            //code2
    
            //code3
            //code3
            //code3
    }
    
    //to move trex on ground 
    var invisibleGround 
    function setup(){
        invisibleGround = createSprite(X_Axis,Y_Axis,width,height);
        invisibleGround.visible = false;
    }
    
    function draw(){
        trex.collide(invisibeGround)
    }
    
    //to have spacebar only once 
    function draw (keyDown(space) && trex.y<value){
        trex.y = -10;
    }
    
    //to use console 
    function draw(){
        console.time();
        //code
        console.timeEnd();
    }



#### day11

I learnt to add loops in different variable and to create random numbers and through them to create different values .

Also to have frame gap between clouds and to have them at different Y_Axis and the depth concept.

    //to create loops 
    var variable_name1
    var variable_name2
    
    function preload(){
        variable_name1.loadImage("file_name")   
    }
    function setup(){
       for(var i relation value?,i _relation_value,i = i+ value?) {
        variable_name2 = createSprite(X_Axis,Y_Axis,width,height);
        variable_name2.addImage("description",variable_name1);
        variable_name2.scale = value?;
        }
    }
    function draw(){
       background("color");
       drawSprite();
    }
    
    //for generating a random number and assigning to a variable 
    var variable_name	//for random
    var variable_name2	//for assigning 
    var variable_name3  
    
    function preload(){
      variable_name2 = loadImage("file_name")
    }
    function setup(){
      var variable_name = maths.round(random(least value, highest value))
      console.log(variable_name) //for checking
    }
    function draw(){
        background("color");
        if(divisor % dividend === remainder){
           assign(); 
         }
        drawSprite();
    }
    function assign(){
       variable_name3 = createSprite(X_Axis,Y_Axis,width,height);
       variable_name3.addImage("description",variable_name2);
       variable_name3.y = math.round(variable_name(least value, highest value));
       variable_name3.velocityX = value?;  
    }
    
    //for depth
    var variable_name
    var variable_name2
    
    function setup(){
      variable_name = createSprite(X_Axis,Y_Axis,width,height);
      variable_name2 = createSprite(X_Axis,Y_Axis,width,height);
    }
    function draw(){
      drawSprite();
      variable_name.depth = variable_name2.depth +1;
    }



#### day 12 

I learnt to give lifetime of any object , the string concatenation and switch statement.

````javascript
function draw(){
    object.lifetime = value?_time;    		// time is in milisecond
}
````

````javascript
// to add more statement for only text
function draw(){
	text("text" +variable_name,X_Axis,Y_axis)
}
````



#### day 13 

I learnt to create different states and group to assign them different behavior  and, if and else if condition.

````javascript
// to create different states 
var variable_name = value;                            // value like 0,1,2,3 etc.
var variable_name2 = value;                           // value like 0,1,2,3 etc.
var gameState = variable_name						  // the state which is at initial position 
````

````javascript
//to declare a group 
var group_name1										  // create the variable name for group name 
var group_name2 									  // create the variable name for group name 2 
function setup (){
    group_name1 = new Group();
    group_name2 = new Group();
}

function draw (){
    // to add a sprites to a group
       group_name1.add(spriteName);
    // to remove a sprite from a group 
       group_name1.remove(spriteName);
    // to clear a group but not it's sprite
       group_name1.clear();
    
    // to assign a single behavior and gameState to a group 
    if(group1._relation_group_name2){
       result 
       }												// for ex-
    if(group1.isTouching(group2)){
       gameState = end;
       }
}
````

````javascript
// to use if,else if statement 
var variable_name = value;                            // value like 0,1,2,3 etc.
var variable_name2 = value;                           // value like 0,1,2,3 etc.
var gameState = variable_name	        			  // the state which is at initial position 

function setup() {
    // other code 
}

function draw() {
    if( condition){
       result 
       }
    else if (another condition) {
        another result    
            }
    // the situation which will happen all thw time will be written outside this condition
}

````

````javascript
// to have single behavior to a group 		
function draw() {
    group_name1._behavior_each();
    // for ex- 
    group_name1.setVelocityEach(value);
    group_name2.destroyEach();
}
````



#### day 14 

I learnt to fix some bugs in our game by setting collider at different parameters 

````javascript
// to set collider 
var variable_name
var variable_name2
function setup(){
    variable_name2.setCollider(rectangle,xOffset,yoffset,width,height)	// for rectangle		
    variable_name2.debug = true;										// to display collider 
    variable_name.setCollider(circle,xOffset,yOffset,radius) 		    // for circle 
    variable_name.debug = true;										   	// to display collider  
}
function draw (){
    // other code 
}
````



#### day 15

I learnt to add sounds, to let the T-rex jump when it touches the cactus 

````javascript
// to add sounds 
var sound_name1;
var sound_name2;

function preload(){
    sound_name1 = loadSound("url of the sound");
    sound_name2 = loadSound("url of the sound");
}
function setup(){
    // other code 
}
function draw(){
    if(condition){
       sound_name1.play();
       sound_name2.play();
       }
}
````

````javascript
// to assign AI T-rex jump 
function setup(){
   variable_name1.setCollider("shape",xOffset,yoffset,width,height);      
   variable_name1.debug = true;
}
function draw(){
    if(variable_name1.isTouching(variable_name2)){
        variable_name1.velocityY = value?;
    }
}
````



#### day 16

I learnt the scope of local and global variable , and a function mousePressedOver 

local scope variable is a type of variable in which the variable is accessed by a particular function in which it is declared 

while in the global scope variable all functions are able to access it as it is declared on the top

````javascript
// to make restart button functional 
if(mousePressedOver(variable)) {
   // the result which you want 
   }
````



#### day 17 

I leant to work our code on local machine and to host our game online

````javascript
// to work oue code on local machine from p5.editor
1). Open p5 editor and in it open your project. From the file option download the file in a new folder with 	a name so there is no confution.
2). Extract all the files in that folder and delete the file from you extracted it 
3). Go to chrome and there( https://chrome.google.com/webstore/detail/web-server-for-			                 chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en ) open the chrome web store and add 200 ok web server and 	 launch it.
4). Go to choose folder option and in dialog box select the file you want.
5). There will be a link provided under web server's url(s) click on that and enjoy your game in your 	         browser.
````

````javascript
// to host our game online via Github 
Now we have downloaded our game on our system so,
1). Go to github search in chrome and create an account and fill all the details in it with a safe account 
2). If already account is created then login to it (https://github.com/).
3). Click on start a project.
4). See weather owner name is correct and then type resporatory name (project name) and click on private 	     option or on public option. Then add a readme file and then click on create resporatory. 
5). Inside code add that file then go to make changes after that your all the files will be saved in code       option and then go to settings and then in settings option go to Githhub pages select main as branch and 
    then root one and click on save.
6). A link will appear there. Click on that and your game will be hosted online.

````



#### day 18 

I learnt to fit my game to all sizes, to use Thunkable and arrays

````javascript
// to fit your game all sizes 
// to fit the game according to the width of device use windowWidth
// to fit the game according to the height of device use windowHeight
for ex -
createCanvas(windowWidth,windowHeight);
variable_name.lifetime = Width-value?
etc.
````

````javascript
Array is a group of many things 
The number of elements present in a array is it's length and the position of the 1st element is 0 wheras the position of the last element is length-1.
to empty the array for once we use a predefined function array = []
````

````javascript
// to use thunkable 
Open thunkable and login/signup there 
(https://x.thunkable.com/projects)
 create a new project and then start
````

#### day 19

I made a ghost runner game through p5.editor 

````javascript
It is as same as t-rex game (for hints see from day 9)
````

#### visual code studio

#### day 20

I leant to design Alogrithms (designing our own command)

````javascript
// to design isTouching command

var variable_name1;
var variable_name2;
function setup(){
    createCanavs(width,height);
    variable_name1 = createSprite(X_Axis,Y_Axis,width,height);
    variable_name1.shapeColor = "color";
    variable_name1.debug = true;
    
    variable_name2 = createSprite(X_Axis,Y_Axis,width,height);
    variable_name2.shapeColor = "color";
    variable_name2.debug = true;
    
}
function draw(){
    background("color") or background(r(redColor),g(greenColor),b(blueColor))
    
    variable_name1.x = mouseX;
    variable_name1.y = mouseY;  
    isTouching();
    drawSprites();
}
    function isTouching(){
    if(variable_name1.x - variable_name2.x <( variable_name1.width + variable_name2.width)/2
     &&  variable_name2.x - variable_name1.x <( variable_name1.width + variable_name2.width)/2
      && variable_name1.y - variable_name2.y <( variable_name1.height + variable_name2.height)/2
      && variable_name2.y - variable_name1.y <( variable_name1.height + variable_name2.height)/2) {
           variable_name1.shapeColor = "color";
           variable_name2.shapeColor = "color";
    }
        else {
           variable_name1.shapeColor = "color";
           variable_name2.shapeColor = "color";    
                }
refer this link for more:- https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/be22d03b-c7a2-4362-a4df-8c4fea3804df.pdf
````



#### day 21

I learnt to make is Touching and Bounce Off function  and to create and call our own library in visual studio. Also about boolean values 

````javascript
"true" and "false" as the two boolean values which are mostly used for yes and no in java script 
````

````javascript
// to make alogrithms 

var variable_name1;
var variable_name2;
function setup(){
    createCanavs(width,height);
    variable_name1 = createSprite(X_Axis,Y_Axis,width,height);
    variable_name1.shapeColor = "color";
    variable_name1.velocityX = value;
    variable_name1.debug = true;
    
    variable_name2 = createSprite(X_Axis,Y_Axis,width,height);
    variable_name2.shapeColor = "color";
    variable_name1.velocityX = -value;
    variable_name2.debug = true;
    
}
function draw(){
    background("color") or background(r(redColor),g(greenColor),b(blueColor))
    
    variable_name1.x = mouseX;
    variable_name1.y = mouseY;
    
    if(isTouching(variable_name1,variable_name3)){
        movingRect.shapeColor = "color";
        rect.shapeColor = "color";
    }
    else{
        movingRect.shapeColor = "color";
        rect.shapeColor = "color";
    }
    drawSprites();
}
    function isTouching(varible_name3, variable_name4){
    if(variable_name1.x - variable_name2.x <( variable_name1.width + variable_name2.width)/2
     &&  variable_name2.x - variable_name1.x <( variable_name1.width + variable_name2.width)/2
      && variable_name1.y - variable_name2.y <( variable_name1.height + variable_name2.height)/2
      && variable_name2.y - variable_name1.y <( variable_name1.height + variable_name2.height)/2) {
            return true;
    }
        else {
            return false;
                }
        
        function bounceOff(variable_name1, variable_name2){
        if(variable_name1.x - variable_name2.x <( variable_name1.width + variable_name2.width)/2
  		   &&  variable_name2.x - variable_name1.x <( variable_name1.width + variable_name2.width)/2){
            variable_name1.velocityX = variable_name1.velocityX * (-1);
            variable_name2.velocityX = variable_name2.velocityX * (-1);
        }            
        if(variable_name1.y - variable_name2.y <( variable_name1.height + variable_name2.height)/2
    	   && variable_name2.y - variable_name1.y <( variable_name1.height + variable_name2.height)/2){
            variable_name1.velocityY = variable_name1.velocityY * (-1);
            variable_name2.velocityY = variable_name2.velocityY * (-1);
        }
        }
````

````javascript
// to make our own library and call it and also add code to it 
make 1 more folder and name it 
in index.html file in 5th line write
<script src="./nameOfTheLibrary"></script>
refer this link for more:- https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/cbf539f5-283f-4dad-902c-79cd65587b56.pdf
````

#### day 22

I learnt about physics engine and matter.js which is a library that helps us to use physics engine. 

// log in to console to print anything 

````javascript
const Engine = Matter.Engine;							// to lessen the words 
const world  = Matter.World;								//(note in const you can't change it's value)
const bodies = Matter.bodies;			

var engine, world; 
var object;

function setup(){
    createCanvas(width,height);							// to createCanvas
    
    engine = Engine.create();							// to createEngine
    world = engine.world();								// to create an world
    
    object = Bodies.rectangle(X_Axis,Y_Axis,width,height);   // to create an object 
    world.add(world,object);
}
function draw(){
    background("color");								// to add a background color
    Engine.update(engine);								// to update engine 
    rectMode(center);									// to display rectangle at centre
    rect(X_Axis,Y_Axis,width,height);					// create a rectangle
}
````

````javascript
// to have bounceOff and let it be static 
var variableName_Engine{
    isStatic: true;
}
var variableName_option = {
     restitution: value?
}
````

````javascript
var variable_name;

function setup(){
    variable_name = circle(X_Axis,Y_Axis,radius);
}
function draw(){
    ellipseMode(radius);
    ellipse(variable_name.position.x,variable_name.position.y);
}
refer this link for more:- https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/6a07452f-91d5-4575-8477-280e6293b56e.pdf
````



#### day 23

I learnt to create blueprints , new box 

````javascript
1). Create a new file in the same folder called Box.js.      // remember to call all the files in index.html 
In it:-
 class class_name{
     constructor(x,y,width,height){
        var options = {
		   'restitution': value;
              'friction': value;
               'density': value;
         }
         this.body = bodies.rectangle(x,y,width,height,options);
         world.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("color");
        rect = (pos.x,pos.y,this.width,this.height);
        pop();
    }
	}
2). In sketch.js file:-                                         // (note:- do all the code from above also)
 
    var variable_name
    var variable_name2
    
    function setup(){
    createCanvas(width,height);
    variable_name = new Box(x,y,width,height);
    variable_name2 = new Box(x,y,width,height);
    variable_name3 = new Ground(x,y,width,height);
   }
    
   function draw(){
    background("color");
    Engine.update(engine);
       
    variable_name.display();
    variable_name2.display();
   }
    
3). create a new file called ground
 in it:-
     class ground(){
         constructor(){
             var options = {
               isStatic: true;
             }
         this.body = bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height = height;
         world.add(world,this.body);
         }
         display(){
             var pos = this.body.position;
             rectMode(CENTER);
             fill("color");
             rect(pos.x,pos.y,width,height);
         }
     }
refer this link for more:- https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/1b57d2d8-6393-4f47-a09d-5184812cc024.pdf
````



#### day 24

I learnt to make different objects in angry bird game , to keep carrying the bird with mouse , create logs , pigs , box in a definate angle and with parameters.

// in it don't forget to add all the files to index .html.

````javascript
// to cover the class of pig
create a new file for pig called pig.js 
In it:-
    class ClassName{
        constructor(x,y){				//x and y are the parameters only because width and heght are fixeed
            var options = {
                'restitution' = value? ,
                'friction' = value?,
                'density' = value?
            }
            this.body = Bodies.rectangle(x,y,width,height);
            this.width = value?;
            this.height = value?;
            World.add(world,this.Body);
        }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("color");
            rect(x,y,this.width,this.height);
            pop();
        }
    }
````

// see it's last page to do for sketch.js

````javascript
// to create log class 
Create a new log.js file.
In it:-
     class className2{
         constructor(x,y,height,angle){								// here width is fixed 
             var options = {
                 'restitution' = value?; ,
                 'friction' = value?,
                 'density' = value?
             }
            this.body = Bodies.rectangle(x,y,height,angle);
            this.width = value?;
            this.height = value?;
            matter.body.setAngle = this.body.angle
            World.add(world,this.Body);
         }
         display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
            rect(x,y,this.width,this.height);
            pop();
         }
     }
````

// note box.js we created already

````javascript
// to create a bird class
create a new file called bird.js
In it:-
    class className3{
        constructor(x,y){
             var options = {
                 'restitution' = value?; ,
                 'friction' = value?,
                 'density' = value?
             }
            this.body = Bodies.rectangle(x,y,height,angle);
            this.width = value?;
            this.height = value?;
            matter.body.setAngle = this.body.angle
            World.add(world,this.Body);
        }
         display(){
            var pos = this.body.position;
            pos.x = mouseX;	
            pos.y = mouseY;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("color");
            rect(x,y,this.width,this.height);
            pop();
         }
    }
````

````javascript
in sketch.js:-
    
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
    
var engine , world
var box1 ,box2 ,box3 ,box4 ,box5;
var log1 ,log2 ,log3 ,log4;
var pig1 ,pig2;
var bird1;

function setup(){
    createCanvas(width,height);
    engine = Engine.create();
    world = engine.world();
    
    box1 = new ClassName(pm);				// pm is for the paprameters you gave in constructor.
    box2 = new ClassName(pm);
    box3 = new ClassName(pm);
    box4 = new ClassName(pm);
    box5 = new ClassName(pm);
    
    log1 = new className(pm);				// pm is for the paprameters you gave in constructor.
    log2 = new className(pm):
    log3 = new className(pm);
    log4 = new className(pm):
    
    pig1 = new className(pm);				// pm is for the paprameters you gave in constructor.
    pig2 = new className(pm);
    
    bird1 = new className(pm);				// pm is for the paprameters you gave in constructor.
}
function draw(){
    background('color');
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    pig1.display();
    pig2.display();
    
    bird1.display();
}
````

````javascript
// to use radians 
most computer programmers use radians foer degrees
in the unit of radian:-
    PI = 180 degrees;
	PI/2 = 90 degrees;
	PI/4 = 45 degrees;
````

see the output and enjoy.

#### day 25

I learnt to add images and animations to a object and also to create a parent class.

````javascript
// to add images when files are in the folder 
    class ClassName{
        constructor(x,y){				//x and y are the parameters only because width and heght are fixeed
            var options = {
                'restitution' = value? ,
                'friction' = value?,
                'density' = value?
            }
            this.body = Bodies.rectangle(x,y,width,height);
            this.width = value?;
            this.height = value?;
--->            this.image = loadImage("sprites/link");		// sprites is the name of folder in which all 																	the images are stored.
            World.add(world,this.Body);
        }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
--->            imageMode(CENTER);
            fill("color");
--->            image(this.image,x,y,this.width,this.height);
            pop();
        }
    }
````

````javascript
// to make a parent class and to make moifications in other class
class BaseClass {
  constructor(x,y,width,height,angle){
            var options = {
                'restitution' = value? ,
                'friction' = value?,
                'density' = value?
            }
            this.body = Bodies.rectangle(x,y,width,height);
            this.width = value?;
            this.height = value?;
            this.image = loadImage("folder/link");
            World.add(world,this.Body);
        }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill("color");
            image(this.image,x,y,this.width,this.height);
            pop();
        }
}
// to inherit parent class 
class ClassName extends BaseClass{
    constructer(x,y,width,height,angle){
        super(x.y.width,height);
        this.image = loadImage("folder/link");
    }
}
````

````javascript
// to make a change in display 
class ClassName extends BaseClass{
    constructer(x,y,width,height,angle){
        super(x.y.width,height);
        this.image = loadImage("folder/link");
        matter.body.setAngle(this.body,angle);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}
````

#### day 26

I learnt to use git commands

````javascript
download git bash (https://gitforwindows.org/) and in it:- 
  1. To enter your user name and email id use following syntax :-
     git config --global user.name"name of the user";
     git config --global user.email"email of the user";
  2. To go 1 directory or 1 folder back use the following command:-
     pwd 
  3. To directly change the directory use the following command:-
     cd name of the folder
  4. To list all the folder / files in the folder use the following command:-
     ls 
  5. To create a folder through git use the following command:-
     mkdir name of the project 
  6. To clone a resporatory use the following command:-
     git clone url of the github link
  7. To add a file use the following command :-
     git add fileName
  8. To display a name or to change something us ethe following command :-
     git commit -m"message"
  9. To add remote file use the following command :-
     git remote add test link of the file to add
 10. To push a file use the following command :-
     git push -u "link of the file to push"
````

#### day 27 

I learnt to create 2 constraint bodies (tied together) and to use the live server in vs.

note:- do the command from day 25 also .

````javascript
const constraint = Matter.constraint;						// to short the length of the command 
var constrainedVariableName1;
var variablename2;

function setup(){
    constrainedVariableName1 = new ClassName(parameters);    // write corresponding class name 
    variableName2 = new ClassName(parameters);				 // write corresponding class name 
    var options = {
        BodyA: name of the 1st body to be constrained (variablename2),
    	BodyB: name of the 2nd body to be constrained (constrainedVariableName1),
    	length: length of the space,
        stiffness: value?
    }
}
function draw(){
    var chain = constraint.create(options);
    World.add(world,chain);
    constrainedVariableName1.display();
}
    // to display the space line between two bodies and don't repeat function draw
function draw(){
    var chain = constraint.create(options);
    World.add(world,chain);
    constrainedVariableName1.display();
    strokeWeight(3);
    line(variableName2.body.position.x,variableName2.body.position.y,
         constrainedVariableName1.body.position.x,constrainedVariableName1.body.position.y);
}
````

#### day 28 

I learnt two mouse events which were used to drag and release the mouse and create an effect to any body

````javascript
// note:- create constraint in the sketch.js file also

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var variableName1;
var variableName3;									// it is the name of body you want to work on 

function setup(){
    createCanvas(width,height);
    engine = Engine.create();
    world = engine.world;
    
    variableName = new ClassName(variableName3.body{x: value, y: value});
}
function draw(){
    background("color");
    Engine.update(engine);
    variableName1.display();
    variableName3.display();
}
function mouseDragged(){												
    Matter.Body.setPosition(variableName3.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
(note:- 1). mouseDragged and mouseReleased are two functions which are already defined so no need to call in 		      function draw
		2). fly is not defined so it is defined in it's class)
````

````javascript
class ClassName {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: value,
            length: value
        }
        this.pointB = pointB;
        this.variableName2 = Constraint.create(options);
        World.add(world,this.variablename2);
    }
    fly(){
        this.variableNmae2.bodyA = null;			// null is empting the body command so the body is 															   detached from the constraint 
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.varibale.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
(note:-	now in fly command it is detached but all the command related to bird are also deleted so we had putten the many command inside if condition).
````

#### day 29 

I learnt to create images without any  body and to see the color of any images through color zilla.

````javascript
// to create image without any body.
class ClassName{
    constructor(){
        this.VariableName = loadImage("url");
    }
    display(){
        image = (this.variableName, x, y);
    }
}
````

````javascript
// introduction with color zilla 
Color Zilla is a chrome extention which is used to find out the color of a particular object.
In the right top side a color dropper sign will appear. Click on it an point out on any thing to see it's color at the top.
````

#### day 30

I learnt to remove a body from world and create a vanishing effect and to make a body attach when a key is pressed

(note:- this is a class which extends base class )

````javascript

this.visibility = 255                                    // note in binary 255 is 1 means full

if(condition){
   super.display();
   }
else{					       	// push and pop are used to apply the condition only in a particular body
    push();
    this.visibility = this.visibility -5
    World.remove(world, this.body);
    tint(255, this.visibility);
    image(this.image, parameters);
    pop();
}
````

````javascript
if(keyCode === value){
    variableName.attach();							// attach is used as a function declared in a class 
}
attach(body){
    this.VariableName.bodyA = body;
}
````

#### day 31 

I learnt to store different values in a array and use it in different way.

````javascript
some definations --->
.    null means empty.
.    undefined means no value is assigned to it.
.    width of the array is the total number of elements present in it.
.    the value of 1st element is always 0 and the last one has it's value as width-1.
.	 we use array to store many values and prevent disadvantages of the variables that can store only 1 
	 value.
.    the !== stands for not equal to.
````

````javascript
// to study array
(note:- you can put any value this is just for example)
var string = "this is a string";
console.log(string);

var num = 100;
console.log(num);

var bool = true;
console.log(bool);

var object = object;
console.log(object);						// here object is undefined because no value is assigned to it.

// if you want to reassign undefined object to null then 
object = null;
console.log(object);

var array1;
var array2;
var array3;

function setup(){
    array1 = [1,2,3,4,5];
    console.log(array1);
    
    array2 = ["name", 12 , true];
    console.log(array2);
    
    // to write arrays inside array
    array3 = [[1,2],[2,3],[3,4]];	// here 1 and 2 are the first element as compared to 3 as width.
    								// If we take array of 1 and 2 then 1 is the first element.
    console.log(array3);
    console.log(array3[0]);			// to display 0 element of the array 3 i.e 1 and 2 
    console.log(array3[0][0]);		// to display 1 as the 1st element of array which contains 1 and 2
}
function draw(){
    // write other code here.
}
````

````javascript
// to practice array
in any class you made for example:-
    class ClassName1 extends baseClass{
        constructor(x,y,width,height){
            super(x,y,width,height);
            this.trajectory = [];							// to empty the array 
            this.variableName = loadImage("url");
        }
        display(){
            super.display();
            this.position = [this.body.position.x,this.body.position.y];	//here we made an array
            this.trajectory.push(position);		// this. used to push an array inside another one 
            
            if(this.body.velocity.x>10 && this.body.position.x>200){
            for(var i = value; i<this.trajectory.length; i++){
                image(this.variableName, this.trajectory.x[i][0], this.trajectory.y[i][1]);
			}
            }
            // here [i][0] is the x axis and [i][1] is the y axis and we used if co dition to prevent smoke 			appear even if the bird stopped.
        }
    }
````

````javascript
// to fix a bud that bird dosen't drag even if it had raleased declare gameStates.
var ONSLING = 0;
var LAUNCHED = 1;
var gameState = ONSLING;
function setup(){
    
}
function draw(){
    if(gameState !== 'launched'){
        result
    }
}
function mouseReleased(){
  		variableName.fly();
    	gameState = 'launched';
}
````

#### day 32

I learnt to use JSON (JAVASCRIPT object notation ) data structures and API(application programming interface) calls.

````javascript
we used JSON to store data and API calls to see the time date place etc in a specific state use the following link:-
"http://worldtimeapi.org/api/timezone/continent/state"
````

````javascript
async is used to declare a function such that javascript interpretes line by line and wait for each line to be run.
await is used to to declare a line such that javascript interpretes line by line and wait for each line to be run.
slice is used to display a alphabet/number/sign/or any thing like that between two things.
````

````javascript
async function functionName(){
    	var variableName = await fetch("http://worldtimeapi.org/api/timezone/continent/state");
    	var variableName2 = await response.json();
    	console.log(variableName2.datetime);		 // datetime is just for reference you can put anything. 
}
````

#### day 33

I learnt to minimize some bugs and errors.

````javascript
If you missed some spellings or function name then computer is confused, that type of errors are called typos. Go to this link for more:- https://jonskeet.uk/csharp/debugging.html.
````

#### day 34

I had a overview of all the last concepts 

````javascript
I made a wrecking ball with the concepts of angry birds.
````

#### day 35

I made a real time database to store data and work with firebase.

````javascript
// to make firebase work 
Step 1: Go to https://console.firebase.google.com. Login with your gmail id.
Step 2: Click on Create a New Project.
Step 3: Enter the name of your project. Accept terms and continue.
Step 4: Deny Google Analytics use.
Step 5: Visit the Database section of the dashboard and click on Create Database.
Step 6: Create the database in test mode for now.
Step 7: Add a child to create nodes which can hold ball’s x and y positions.
when you will create a nickname a code will appear, copy it and paste it to index.html under the line when you add p5.play.js .
copy the first line and paste it to second line. instead of app write database, save it and index.html is ready.
````

````javascript
// to make sketch.js
var variableName1;
var database, position;			// these variables are just for reference you can put any.
	
function setup(){
    createCanvas(widthValue, heightValue);
    database = firebase.database();		// to initialise the database 
    console.log(database);
    
    variableName1 = createSprite(X_Axis, Y_Axis, width, height );
    
    var variableName1Position = database.ref("variableName1/position");
    variableName1Position.on("value", readPosition, showError);	// readPosition and showError are functions.
}
function draw(){
    background(color);
    if(keyCode === value?){
       writePosition(-1, 0);
       }
}

function readPosition(data){
    position = data.val();
    consiole.log(position.x);
    variableNam1.x = position.x;
    variableName.y = position.y;
}

function writePosition(x, y){
    database.ref('variableName1/position').set({
        'x': position.x +x;
        'y': position.y +y;
    })
}
````

#### day 36

I learnt to allow player to log in there names  using p5 dom.

````javascript
We needed to have at least 3 objects:
1. Form: Form should contain the input box, a button to log in. When the button is
pressed, the player's name should be registered in the database and a new player
should be created.

2. Player: A new player object should be created every time a new user logs in. It should
contain all the information about the player - name, position in the game etc. For
now, it can just have the name property. It should also be able to read and write
player information to the database - for example player count or player name.

3. Game Object: Game object should be able to hold the state of the game. It should be
able to display the form when the game state is 0(WAIT) or the game when the
game state is 1 (PLAY) or leaderboard when the game state is 2 (END). For now, we
will only consider the case when the game state is 0.
````

````javascript
// to set up firebase for this project.
multiplayer-Car-Racing-Game
------gameState: 0
|
|-----player1
		|----name: ""
|
|-----player2
		|----name: ""
|
|-----player3
		|----name: ""
|
|-----player4
		|----name: ""
|
|-----playerCount: 0;

We created a new folder in our directory called js which contained the blueprint of all the 3
objects in our game - Game, Form and Player.
Add them to index.html.
````

````javascript
var database, position;
var gameState = 0;
var playerCount;
var database;
var form, player, game;

function setup(){
    createCanvas(widthValue, heightValue);
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
	background(color);
}


Game object was able to read the gameState and update the gameState. It also started
itself and displayed the game on the screen depending on the gameState.
Constructor of a class was used to give properties to an object when it was created. We
kept the constructor empty.
Then we wrote functions inside the Game Class to getState and updated the state.
- getState() simply read the game state from the database.
````

````javascript
class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
		if(gameState === 0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
           }
    }
}
````

````javascript
class form {
	constructor(){
        // empty for now 
    }
    display(){
        var title = createElement();			// In html we use createElement
        title.html("car Racing Game");			// you can enter the name of your project
        title.position(X_Axis, Y_Axis);
        
        // instead of these variables you can take any
        var input = createInput("name");
        var button = createButton("play");
        var greeting = createGreeting("h3");
        
        input.position(X_Axis, Y_Axis);
        button.position(X_Axis, Y_Axis);
        
        button.mousePressed(function(){
            input.hide;
            button.hide;
            
            var name = input.value;
            
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello"+name);
            greeting.position(X_Axis, Y_Axis);
            
        })
    }
}
````

````javascript
class Player{
    constructor(){
        // empty
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    update(name){
        var playerIndex = "player" +playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}
````

#### day 37

we learnt more about oop language,  firebase and gameStates.

also we made some changes in classes.

````javascript
class player{	// class player will have many functions which will be required to call in another classes.
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){												// get count function is to take value from                                                                 database of no. of player entered in game
         var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {	// we used => to create a funciton which have link to class 
            playerCount = data.val();
        })
    }
    updateCount(count){								// it is written to update value of no. of player                                                              when a new player enters entered in game
        database.ref("/").update({
            playerCount: count
        })
    }
    update(){										// It is just written to have a player node
		var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
            name: this.name;					// here you will write the sub-node you wants to set in 
            distance: this.distance;			// in player node.
    })
}
    
    static getPlayerInfo(){					// It will take the data of all the players
        var variableName = database.ref('players');
        variabbleName.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
````

````javascript
class Form{				// form class is used to let the user enter his/her name and other information.
    constructor(){
        this.variableName1 = createInput("info"); 	// info here means what the input is about.
        this.variableName2 = createButton("info");
        this.variableName3 = createElement("h2"); 	//Here h2 refers to the size of the text.
        											// you can use from h1 to h6.
    }
    hide(){											// hide function is to hide all the variables made
        this.variableName1.hide();
        this.variableName2.hide();
        this.variableName3.hide();
    }
    display(){
        // position all the variables
		this.variableName1.position(X_Axis, Y_Axis);
        this.variableName2.position(X_Axis, Y_Axis);
        this.variableName3.position(X_Axis, Y_Axis);
        // write the condition to happen when the button is pressed
        this.variableName2.mousePressed(() => {
        this.variableName1.hide();
        this.variableName2.hide();
        var variableName4 = this.variableName1.value(); // store the information when user inputs his info
        playerCount += 1; // It will increase your player count by 1 in database.
        player.index = playerCount; // player is a variable made inside sketch.js file
        player.update();  // calling the update function from player class.
        player.updateCount(playerCount);
        })
    }
}
````

````javascript
class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
		if(gameState === 0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
           }
    }
    play(){
		form.hide();
		text("gameStart",X_Axis, Y_Axis);
        player.getInfo();
        if(allPlayer !== undefined){
             var variableName5 = value?;
             variableName5 += newValue?;
             text(allPlayers[plr]+": "+allPlayers.distance, value?, variableName5);
            if(plr === "player" +this.index){
               fill("red");
               }
            else{
                fill("black");
            }
           }
         if(keyDown(UP_ARROW)){
                player.distance += 50;
                 player.update();
        }
    }
}
````

````javascript
var database, position;
var gameState = 0;
var playerCount;
var database;
var form, player, game;

function setup(){
    createCanvas(widthValue, heightValue);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    if(playerCount === 4){
       game.update(1);			// here gameSate would be updated to 1 in database when playerCount is 4.
       }
    if(gameState === 1){
      	clear();				// to clear the background.
        game.play();			// to start the game.
       }
}
````

#### day 38

In this class I learnt to adjust the size of the game according to the screen dimentions.

We learnt about windowWidth and windowHeight command. We can replace then with displayWidth and displayHeight respectively.

We were now also aware of camera position. It is just concentrating the object at center. If we choose camera.position.x then the object will be concentrated at center from x-axis. If we choose camera.position.y then the object will be concentrated at center from y-axis.

```
Inside game.js --->
    class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
		if(gameState === 0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
           }
    }
    play(){
		form.hide();
		text("gameStart",X_Axis, Y_Axis);
        player.getInfo();
        if(allPlayer !== undefined){
             var variableName5 = value?;
             variableName5 += newValue?;
             text(allPlayers[plr]+": "+allPlayers.distance, value?, variableName5);
            if(plr === "player" +this.index){
               fill("red");
               }
            else{
                fill("black");
            }
           }
         if(keyDown(UP_ARROW)){
                player.distance += 50;
                 player.update();
        }
        for(plr in allPlayers){
            index += 1;
            x = x+200;
            y = displayHeight - allPlayers[plr].distance.
            cars[index-1].x = x;
            cars[index-1].y = y;
			if(index = player.index){
                cars[index-1].shapeColor = red;
=======>        camera.position.x = displayWidth/2;			<===============================================
=======>        camera.position.y = cars[index-1].y;		<===============================================
            }
        }
    }
}
(note:- all the rest files will remain same)
```

#### day 39

We added images to sprites and background to our game.

inside sketch.js file =>
    Create new variables and in function preload upload the images to them.
    You have added some sprites in game.js. Modify it such like that ->

````javascript
  class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
   async start(){
       
		if(gameState === 0){
           player = new Player();
           player.getCount();
           var playerCountRef = await database.ref('playerCount').once("value");
           }
       if(playerCount.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          }
       	   form = new Form();
           form.display();
       car1 = createSprite(values);
       car1.addImage("imageName", car1_img);
       car2 = createSprite(values);
       car2.addImage("imageName2", car2_img);
       car3 = createSprite(values);
       car3.addImage("imageName3", car3_img);
       car4 = createSprite(values);
       car4.addImage("imageName4", car4_img);
       cars= [car1, car2, car3, car4];
    }
    play(){
		form.hide();
		text("gameStart",X_Axis, Y_Axis);
        player.getInfo();
        if(allPlayer !== undefined){
             var variableName5 = value?;
             variableName5 += newValue?;
             text(allPlayers[plr]+": "+allPlayers.distance, value?, variableName5);
            if(plr === "player" +this.index){
               fill("red");
               }
            else{
                fill("black");
            }
           }
         if(keyDown(UP_ARROW)){
                player.distance += 50;
                 player.update();
        }
        for(plr in allPlayers){
            index += 1;
            x = x+200;
            y = displayHeight - allPlayers[plr].distance.
            cars[index-1].x = x;
            cars[index-1].y = y;
			if(index = player.index){
                cars[index-1].shapeColor = red;
		        camera.position.x = displayWidth/2;
		        camera.position.y = cars[index-1].y;
            }
        }
    }
}
(note:- try to add background yourself);
(note:- all the rest files will remain same)
````

#### day 40

In this class I have learnt to 

● Create a reset button at the top of the game which will reset the playerCount and gameState in our game. 

● Add some identification to help the player identify which is their car by creating a ellipse.

````javascript
// code to create a reset button in form.js.
class form{
    constructor(){
        this.reset = createButton('reset');
    }
    display(){
        this.reset.position(value?);
        this.reset.mousePressed(() => {
           playerCount.updateCount(0);
           gameState.update(0);
         })
    }
}
````

````javascript
// code in game.js
  class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
   async start(){
       
		if(gameState === 0){
           player = new Player();
           player.getCount();
           var playerCountRef = await database.ref('playerCount').once("value");
           }
       if(playerCount.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          }
       	   form = new Form();
           form.display();
       car1 = createSprite(values);
       car1.addImage("imageName", car1_img);
       car2 = createSprite(values);
       car2.addImage("imageName2", car2_img);
       car3 = createSprite(values);
       car3.addImage("imageName3", car3_img);
       car4 = createSprite(values);
       car4.addImage("imageName4", car4_img);
       cars= [car1, car2, car3, car4];
    }
    play(){
		form.hide();
		text("gameStart",X_Axis, Y_Axis);
        player.getInfo();
        if(allPlayer !== undefined){
             var variableName5 = value?;
             variableName5 += newValue?;
             text(allPlayers[plr]+": "+allPlayers.distance, value?, variableName5);
            if(plr === "player" +this.index){
               fill("red");
               }
            else{
                fill("black");
            }
           }
         if(keyDown(UP_ARROW)){
                player.distance += 50;
                 player.update();
        }
        for(plr in allPlayers){
            index += 1;
            x = x+200;
            y = displayHeight - allPlayers[plr].distance.
            cars[index-1].x = x;
            cars[index-1].y = y;
			if(index = player.index){
                cars[index-1].shapeColor = red;
		        camera.position.x = displayWidth/2;
		        camera.position.y = cars[index-1].y;
============>   stroke(10);									<===============================================
============>   fill("red");								<===============================================
============>   ellipse(x,y,60,60);							<===============================================
            }
        }
    }
}
(note:- try to add background yourself);
(note:- all the rest files will remain same)
````

#### day 41

In this class I leant to create player rank and leaderboard.

We created a new node in database i.e carsAtEnd whose value was 0.

````javascript
inside player.js file ->
    class player{	
    constructor(){
        this.rank = null;					// we created this.rank as a new property
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){												
         var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {	 
            playerCount = data.val();
        })
    }
    updateCount(count){	
        database.ref("/").update({
            playerCount: count
        })
    }
    update(){
		var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
            name: this.name; 
            distance: this.distance;
    })
}
        
     getCarsAtEnd(){			   	// We made this function to take the value of this.rank from database.
            database.ref('carsAtEnd').on("value", (data) => {
                this.rank = data.val();
            })
        }
        
    static updateCarsAtEnd(rank){				// we made this function to update the rank of player
            database.ref('/').update({
                carsAtEnd: rank;
            })
        }
    
    static getPlayerInfo(){	
        var variableName = database.ref('players');
        variabbleName.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
````

````javascript
inside game.js file ->
    // code in game.js
  class Game(){
    constructor(){
        // empty for now 
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value".function(data))({
            gameState = data.val();
        })
    }
	updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }
   async start(){
       
		if(gameState === 0){
           player = new Player();
           player.getCount();
           var playerCountRef = await database.ref('playerCount').once("value");
           }
       if(playerCount.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          }
       	   form = new Form();
           form.display();
       car1 = createSprite(values);
       car1.addImage("imageName", car1_img);
       car2 = createSprite(values);
       car2.addImage("imageName2", car2_img);
       car3 = createSprite(values);
       car3.addImage("imageName3", car3_img);
       car4 = createSprite(values);
       car4.addImage("imageName4", car4_img);
       cars= [car1, car2, car3, car4];
    }
    play(){
		form.hide();
		text("gameStart",X_Axis, Y_Axis);
        player.getInfo();
        player.getCarsAtEnd();
        if(allPlayer !== undefined){
             var variableName5 = value?;
             variableName5 += newValue?;
             text(allPlayers[plr]+": "+allPlayers.distance, value?, variableName5);
            if(plr === "player" +this.index){
               fill("red");
               }
            else{
                fill("black");
            }
           }
         if(keyDown(UP_ARROW)){
                player.distance += 50;
                 player.update();
        }
        if(player.distance > value){
           gameState = 2;
           player.rank += 1;
           player.updateCarsAtEnd(player.rank);
           }
        for(plr in allPlayers){
            index += 1;
            x = x+200;
            y = displayHeight - allPlayers[plr].distance.
            cars[index-1].x = x;
            cars[index-1].y = y;
			if(index = player.index){
                cars[index-1].shapeColor = red;
		        camera.position.x = displayWidth/2;
		        camera.position.y = cars[index-1].y;
			    stroke(10);
			    fill("red");
                ellipse(x,y,60,60);
            }
        }
    }
        end(){
			console.log(player.rank);
        }
}
(note:- all the rest files will remain same)
try to  add leaderBoard yourself.
````

#### day 42

I reviewed all the concepts of javascript and leant to create a new loop called for loop.

````javascript
creating while loop.
format is :-
// the argument in the bracket is for having a condition to work until the work happens means until the condition is true the while loop result will work and when it becomes false the coondition will stop working.
    while(var variableName = value?){
        result
    }
````

#### day 43

I just made the car racing game finished and tried to start the Pacman game.

#### day 44 , 45 and 46.

continued to make pacman game.