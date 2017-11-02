"use strict";

var canvas;
var graphics;

var updateInterval;
var drawInterval;

var sprite;

window.onload = () => {
    canvas = document.getElementsByTagName("canvas")[0];
    graphics = canvas.getContext("2d");

    updateInterval = setInterval(Update, 30);
    drawInterval = setInterval(Draw, 30);

    canvas.addEventListener("mousedown", mouseClickPosition, false);
    window.addEventListener("keydown", keyDown, false);

    sprite = new Sprite(10, 10, 10, 10, "red");
}

function Update() {
    
}

function Draw() {
    graphics.fillStyle = "CornflowerBlue";
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    
    sprite.Draw();
}
function mouseClickPosition(event) {
    var x = event.x - canvas.offsetLeft;
    var y = event.y - canvas.offsetTop;


}

function keyDown(event) {
    switch (event.keyCode) {
        case 37:
            if (state == 2) {
                //snake.ChangeDirection(2);
            }
            break;
        case 39:
            if (state == 2) {
                //snake.ChangeDirection(0);
            }
            break;
        case 38:
            if (state == 1) {
                //leftPaddle.MoveUp();
            }
            else if (state == 2) {
                //snake.ChangeDirection(3);
            }
            break;
        case 40:
            if (state == 1) {
                //leftPaddle.MoveDown();
            }
            else if (state == 2) {
                //snake.ChangeDirection(1);
            }
            break;
        case 32:
            if (state == 2) {
            }
            break;
    }
}