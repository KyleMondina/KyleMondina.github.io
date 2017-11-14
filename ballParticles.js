var canvas = document.getElementById("canvas");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const pie = 3.14;

var context = canvas.getContext('2d');

function eraseCanvas()
{
    context.beginPath();
    context.rect(0,0,canvasWidth,canvasHeight);
    context.fillStyle = "white";
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
        context.strokeStyle = "black";
        context.stroke();
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
    "#D6BBC0",
    "#D0A3BF",
    "#C585B3",
    "#BC69AA",
    "#AF42AE",
    "#35524A",
    "#627C85",
    "#779CAB",
    "#A2E8DD",
    "#32DE8A"
]

var ballArray = [];

for (var i= 0;i<700;i++)
{    
    var randomSize = Math.random()*15;
    var randomX = Math.floor(Math.random()*(canvasWidth-randomSize)+randomSize);
    var randomY = Math.floor(Math.random()*(canvasHeight-randomSize)+randomSize);
    var randomColor = colorSelection[Math.floor(Math.random()*colorSelection.length)];
    var randomXVel = Math.random()*6-3;
    var randomYVel = Math.random()*6-3;
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


