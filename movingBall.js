var canvas = document.getElementById("canvas");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const pie = 3.14;

var context = canvas.getContext('2d');

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
    this.eraseCanvas = function()
    {
        context.beginPath();
        context.rect(0,0,canvasWidth,canvasHeight);
        context.fillStyle = "black";
        context.fill();
        
    }
   
    this.update = function()
    {
        
        this.eraseCanvas();
        this.updateVel();
        this.updatePosition();
        this.drawCircle(); 
    }
}

var colorSelection = 
[
    "#957186",
    "#D9B8C4",
    "#703D57",
    "#402A2C",
    "#241715"
]

var randomX = Math.random()*canvasWidth;
var randomY = Math.random()*canvasHeight;
var randomColor =Math.floor(Math.random()*5);
var randomSize = Math.random()*20+10;
var randomXVel = Math.random()*40-20;
var randomYVel = Math.random()*40-20;


var ball = new Circle(randomX,randomY ,randomSize,colorSelection[randomColor],randomXVel,randomYVel);
function drawScreen()
{
    requestAnimationFrame(drawScreen);
    ball.update();
    
}
drawScreen();
