var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var canvasHeight = window.innerHeight;
var canvasWidth = window.innerWidth;
var pie = 3.14159

canvas.height = canvasHeight;
canvas.width = canvasWidth;

var xMiddle = canvasWidth/2;
var yMiddle = canvasHeight/3;

//current coordinates of the mouse, updated using the event listener
var mouseX = 10;
var mouseY = 10;

function Circle(xPos,yPos,vel,size)
{
    this.xPos = xPos;
    this.yPos = yPos;
    this.vel = vel;
    this.size = size;
    
    this.drawCircle = function()
    {
        context.beginPath();
        //context.arc(this.xPos, this.yPos, this.size, 0, 2*pie);
        context.arc(this.xPos, this.yPos, this.size, 0, 2*pie);
        context.fillStyle = "cyan";
        context.fill();
    }
    
    this.eraseCanvas = function()
    {
        context.beginPath();
        context.rect(0,0,canvasWidth,canvasHeight);
        context.fillStyle = "white";
        context.fill();
    }
    
    this.calculatePos = function()
    {
        if (mouseX>this.xPos)
        {
            this.xPos+=this.vel;
        }
        else
        {
            this.xPos-=this.vel;
        }
        if (mouseY>this.yPos)
        {
            this.yPos+=this.vel;
        }
        else
        {
            this.yPos-=this.vel;
        }
    }
    this.update = function()
    {
        this.eraseCanvas();
        this.calculatePos();
        this.drawCircle();  
    }
    
}

function movingMouse(mouse)
{
    mouseX = mouse.clientX;
    mouseY = mouse.clientY;
}

var ball = new Circle(xMiddle,yMiddle,2,40);

canvas.addEventListener("mousemove",movingMouse);

function animate()
{
    requestAnimationFrame(animate);
    ball.update();
}

animate();
