var canvas = document.getElementById("canvas");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

const pie = 3.14;

var context = canvas.getContext('2d');

function clearCanvas()
{
    context.rect(0,0,windowWidth,windowHeight);
    context.fillStyle = "red";
    context.fill();
}

function drawCircles()
{
    for (var i = 0; i<500;i++)
    {
        var x = Math.random()*windowWidth;
        var y = Math.random()*windowHeight;

        context.beginPath();
        context.arc(x,y,25,0,2*pie);
        //context.strokeStyle = "blue";
        //context.stroke();
        context.fillStyle = "black";
        context.fill();
    }
}

function updateFrame()
{
   requestAnimationFrame(updateFrame);
    clearCanvas();
    drawCircles();
    
}

updateFrame();



