"use strict";

var canvas;
var graphics;
var snakePart;
var snakeHeadImage;

var scoreLabel;
var count = 1;
var speed = 150;
var partsToAdd = 0;

var KeyCodes = Object.freeze({ "upArrow": 38, "rightArrow": 39, "downArrow": 40, "leftArrow": 37, "space": 32, "r": 82 });

var food;
var update;

var waitingForReset = false;
var paused = true;

function AddPart() {
    if (partsToAdd > 0) {
        var temp = snakePart;
        while (temp.Previous != null) {
            temp = temp.Previous;
        }
        temp.Previous = new SnakePart(temp.CurrentDirection, temp.X, temp.Y, temp.Width, temp.Height);
        temp.Previous.Next = temp;
        count++;
        if (count % 10 == 0 && speed > 80) {
            speed -= 7;
        }

        partsToAdd--;
    }
}

function Draw() {
    snakePart.Draw(graphics);
}

function Update() {
    if (!paused) {
        snakePart = snakePart.Update();

        graphics.fillStyle = "cornflowerblue";
        graphics.fillRect(0, 0, canvas.width, canvas.height);

        graphics.font = "20px Arial";
        graphics.fillStyle = "#000000";
        graphics.textAlign = "left";
        graphics.fillText("Score: " + (count - 1) * 5, 25, 40);
        //graphics.fillText("Speed: " + speed, 25, 65);

        food.Draw(graphics);

        AddPart();

        if (snakePart.X == food.X && snakePart.Y == food.Y) {
            partsToAdd = 5;
            food.UpdatePosition();
        }

        var current = snakePart;
        var color = 0xff;
        var decrementValue = parseInt(0xff / count);

        graphics.drawImage(snakeHeadImage, current.X, current.Y);

        while (current.Previous != null) {
            current = current.Previous;
            var hexVal = "#00" + "" + parseInt(color).toString(16) + "00";
            if (decrementValue == 0){
                hexVal += "0"
            }
            color -= decrementValue;

            current.Draw(graphics, hexVal);
        } ;

        if (snakePart.X < 0 || snakePart.Y < 0 || snakePart.X + snakePart.Width - 1 > canvas.width || snakePart.Y + snakePart.Height - 1 > canvas.height) {
            graphics.font = "30px Arial";
            graphics.fillStyle = "#000000";
            graphics.textAlign = "center";
            graphics.fillText("You Lost. Press Any Key To Restart.", canvas.width / 2, canvas.height / 2);
            waitingForReset = true;
            return;
        }

        var temp = snakePart
        while (temp.Previous != null) {
            var temp2 = temp.Previous;
            while (temp2.Previous != null) {
                if (temp.X == temp2.X && temp.Y == temp2.Y) {
                    graphics.font = "30px Arial";
                    graphics.fillStyle = "#000000";
                    graphics.textAlign = "center";
                    graphics.fillText("You Lost. Press Any Key To Restart.", canvas.width / 2, canvas.height / 2);
                    waitingForReset = true;
                    return;
                }

                temp2 = temp2.Previous;
            }

            temp = temp.Previous;
        }
    }
    update = setTimeout(Update, speed);
}

window.onload = () => {
    canvas = document.getElementById("Canvas1");

    canvas.width = document.body.clientWidth - (document.body.clientWidth % 20) - 5;
    canvas.height = window.innerHeight - 25 - (window.innerHeight - 25) % 20;

    graphics = canvas.getContext("2d");

    snakeHeadImage = new Image(20, 20);
    snakeHeadImage.src = 'Assets/SnakeheadRight.png';
    document.body.appendChild(snakeHeadImage);
    snakeHeadImage.hidden = true;

    canvas.addEventListener("mousedown", mouseClickPosition, false);
    window.addEventListener("keydown", keyDown, false);

    graphics.font = "30px Arial";
    graphics.fillStyle = "#000000";
    graphics.textAlign = "center";
    graphics.fillText("Press space to start.", canvas.width / 2, canvas.height / 2);

    Restart();
}

function Restart() {
    waitingForReset = false;
    snakePart = new SnakePart(Directions.right, 20, 20, 20, 20);
    food = new Food(20, 20, canvas.width, canvas.height);
    count = 1;
    speed = 150;
    partsToAdd = 0;
    snakeHeadImage = new Image(20, 20);
    snakeHeadImage.src = 'Assets/SnakeheadRight.png';
    document.body.appendChild(snakeHeadImage);
    snakeHeadImage.hidden = true;
    paused = false;
    Update();
}

function mouseClickPosition(event) {

}

function keyDown(event) {
    if (waitingForReset) {
        Restart();
        return;
    }

    switch (event.keyCode) {
        case KeyCodes.space:
            paused = !paused;
            graphics.font = "30px Arial";
            graphics.fillStyle = "#000000";
            graphics.textAlign = "center";
            graphics.fillText("Paused. Press space to continue.", canvas.width / 2, canvas.height / 2);
            if (!paused) {
                clearInterval(update);
                Update();
            }
            break;
        case KeyCodes.r:
            Restart();
            break;
        case KeyCodes.upArrow:
            if (!paused && (snakePart.Previous == null || snakePart.CurrentDirection != Directions.down)) {
                snakePart.SetDirection(Directions.up);
                clearInterval(update);
                snakeHeadImage = new Image(20, 20);
                snakeHeadImage.src = 'Assets/SnakeheadUp.png';
                document.body.appendChild(snakeHeadImage);
                snakeHeadImage.hidden = true;
                Update();
            }
            break;
        case KeyCodes.rightArrow:
            if (!paused && (snakePart.Previous == null || snakePart.CurrentDirection != Directions.left)) {
                snakePart.SetDirection(Directions.right);
                clearInterval(update);
                snakeHeadImage = new Image(20, 20);
                snakeHeadImage.src = 'Assets/SnakeheadRight.png';
                document.body.appendChild(snakeHeadImage);
                snakeHeadImage.hidden = true;
                Update();
            }
            break;
        case KeyCodes.downArrow:
            if (!paused && (snakePart.Previous == null || snakePart.CurrentDirection != Directions.up)) {
                snakePart.SetDirection(Directions.down);
                clearInterval(update);
                snakeHeadImage = new Image(20, 20);
                snakeHeadImage.src = 'Assets/SnakeheadDown.png';
                document.body.appendChild(snakeHeadImage);
                snakeHeadImage.hidden = true;
                Update();
            }
            break;
        case KeyCodes.leftArrow:
            if (!paused && (snakePart.Previous == null || snakePart.CurrentDirection != Directions.right)) {
                snakePart.SetDirection(Directions.left);
                snakeHeadImage.style.transform = "rotate(180deg)";
                clearInterval(update);
                snakeHeadImage = new Image(20, 20);
                snakeHeadImage.src = 'Assets/SnakeheadLeft.png';
                document.body.appendChild(snakeHeadImage);
                snakeHeadImage.hidden = true;
                Update();
            }
            break;
    }
}
