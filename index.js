var canvas = document.getElementById("canvas");


var canvasWidth = canvas.width;
var canvasHeight = canvas.height;



const pie = 3.14;

var context = canvas.getContext('2d');

function eraseCanvas()
{
    context.beginPath();
    context.rect(0,0,canvasWidth,canvasHeight);
    context.fillStyle = "#EDD297";
    context.fill();
        
}

function Circle (xPos,yPos,radius,color,velX,velY)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    
    
    this.updatePosition = function()
    {
        this.xPos+=this.velX;
        this.yPos+=this.velY;
    }
    this.updateVel = function()
    {
        if(this.xPos+this.radius>canvasWidth||this.xPos-this.radius<0)
        {
           this.velX = -this.velX;    
        }
        if(this.yPos+this.radius>canvasHeight||this.yPos-this.radius<0)
        {
           this.velY = -this.velY;    
        }
        
    }
    this.drawCircle = function()
    {
        context.beginPath();
        context.arc(this.xPos,this.yPos,this.radius,0,2*pie);
        context.fillStyle = this.color;
        context.fill();
        
    }
   
    this.update = function()
    {
        
        this.updateVel();
        this.updatePosition();
        this.drawCircle(); 
    }
}

var colorSelection = 
[
    "#744627"
    
]

var ballArray = [];

for (var i= 0;i<200;i++)
{    
    var randomSize = Math.random()*5;
    var randomX = Math.random()*(canvasWidth-randomSize*2)+randomSize;
    var randomY = Math.random()*(canvasHeight-randomSize*2)+randomSize;
    var randomColor = colorSelection[Math.floor(Math.random()*colorSelection.length)];
    var randomXVel = Math.random()*2-1;
    var randomYVel = Math.random()*2-1;
    ballArray.push(new Circle(randomX,randomY,randomSize,randomColor,randomXVel,randomYVel));
}


function drawScreen()
{
    requestAnimationFrame(drawScreen);
    eraseCanvas();
    for (var i = 0; i<ballArray.length;i++)
    {
        ballArray[i].update();
    }
    console.log("hi")
    
}
drawScreen();