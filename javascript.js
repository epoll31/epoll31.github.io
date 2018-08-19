"use strict";


var canvas;
var graphics;
var snakePart;
var scoreLabel;
var count = 1;
var speed = 400;

var KeyCodes = Object.freeze({"upArrow": 38, "rightArrow" : 39, "downArrow": 40, "leftArrow" : 37, "space" : 32});

function Draw() {
    snakePart.Draw(graphics);
}

function Update() {
    //alert("update");
    snakePart = snakePart.Update();

    graphics.fillStyle = "#d3d3d3";
    graphics.fillRect(0, 0, 800, 480);
    //graphics.fillStyle = "#000000";

    var current = snakePart;
    do
    {
        current.Draw(graphics);
        current = current.Previous;
    }while (current != null);

    setTimeout(Update, speed);
}

window.onload = () => {
    canvas = document.getElementById("Canvas1");
    graphics = canvas.getContext("2d");
    scoreLabel = document.getElementById("score");

    snakePart = new SnakePart(Directions.right, 20, 20, 20, 20);

    //alert("X: " + snakePart.Y + " | Y: " + snakePart.Y + " | Width: " + snakePart.Width + " | Height: " + snakePart.Height);

    //canvas.addEventListener("mousedown", mouseClickPosition, false);
    window.addEventListener("keydown", keyDown, false);

    Update();
    //setInterval(Draw, 1);
}


function mouseClickPosition(event) {

}

function keyDown(event) {
    switch (event.keyCode) {
        case KeyCodes.space:
            var temp = snakePart;
            while (temp.Previous!= null)
            {
                temp = temp.Previous;
            }
            temp.Previous = new SnakePart(temp.CurrentDirection, temp.X, temp.Y, temp.Width, temp.Height);
            temp.Previous.Next = temp;
            count++;
            if (count % 5 == 0 && speed > 50){
                speed -= 25;
            }
            scoreLabel.innerHTML = "Score: " + (count-1)*5 + "\nSpeed: " + speed;

            break;
        case KeyCodes.upArrow:
            if (snakePart.Previous == null || snakePart.CurrentDirection != Directions.down){
                snakePart.SetDirection(Directions.up)
            }
            break;
        case KeyCodes.rightArrow:
            if (snakePart.Previous == null || snakePart.CurrentDirection != Directions.left){
                snakePart.SetDirection(Directions.right)
            }
            break;
        case KeyCodes.downArrow:
            if (snakePart.Previous == null || snakePart.CurrentDirection != Directions.up){
                snakePart.SetDirection(Directions.down)
            }
            break;
        case KeyCodes.leftArrow:
            if (snakePart.Previous == null || snakePart.CurrentDirection != Directions.right){
                snakePart.SetDirection(Directions.left)
            }
            break;
    }
}
