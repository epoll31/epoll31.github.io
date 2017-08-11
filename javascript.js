"use strict";

var canvas;
var graphics;

var sprite;

window.onload = () => 
{
    canvas = document.getElementsByTagName("canvas")[0];
    graphics = canvas.getContext("2d");

    sprite = new BouncySprite(50, 50, 100, 100, 2, "Red");

    setInterval(Update, 30);
    setInterval(Draw, 30);
}


function Update()
{  
    sprite.Update();
}

function Draw()
{
    graphics.fillStyle = "CornflowerBlue";
    graphics.fillRect(0, 0, canvas.width, canvas.height);

    sprite.Draw(graphics);
}