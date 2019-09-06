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

var urlParams;

var CurrentSnakeParts;

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

        CurrentSnakeParts.push(temp.Previous);
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

        var currentY = canvas.height - 35;
        for (var i = 10; i > 0; i--) {
            if (localStorage.getItem("" + i) == "undefined") {
                localStorage.removeItem("" + i);
            }
            if (localStorage.getItem("" + i) == null) {
                continue;
            }
            graphics.fillText(i + ": " + localStorage.getItem("" + i), 25, currentY);
            currentY -= 30;
        }
        if (localStorage.getItem("1") != null)
        {
            graphics.fillText("High Scores:", 25, currentY);
        }

        food.Draw(graphics);

        AddPart();

        if (snakePart.X == food.X && snakePart.Y == food.Y) {
            partsToAdd += 5;
            food.UpdatePosition(CurrentSnakeParts);
        }

        var current = snakePart;
        var colorR;
        var colorG;
        var colorB;
        var targetR;
        var targetG;
        var targetB;

        if (window.location.search == "?green")
        {
          colorR = 0x00;
          colorG = 0xff;
          colorB = 0x00;
          targetR = 0xff;
          targetG = 0xff;
          targetB = 0xff;
        }
        else if (window.location.search == "?pink")
        {
          colorR = 0xff;
          colorG = 0x00;
          colorB = 0x8f;
          targetR = 0xff;
          targetG = 0xff;
          targetB = 0xff;
        }
        else if (window.location.search == "?red")
        {
          colorR = 0xff;
          colorG = 0x00;
          colorB = 0x00;
          targetR = 0x00;
          targetG = 0x00;
          targetB = 0x00;
        }
        else if (window.location.search == "?blue")
        {
          colorR = 0x00;
          colorG = 0x00;
          colorB = 0xff;
          targetR = 0x00;
          targetG = 0x00;
          targetB = 0x00;
        }
        else{
            var color1 = parseInt(urlParams.get('Color1'));
            colorB = color1 % 0x100;
            color1 /= 0x100;
            colorG = color1 % 0x100;
            color1 /= 0x100;
            colorR = color1 % 0x100;
            color1 /= 0x100;
            var color2 = parseInt(urlParams.get('Color2'));
            targetB = color2 % 0x100;
            color2 /= 0x100;
            targetG = color2 % 0x100;
            color2 /= 0x100;
            targetR = color2 % 0x100;
            color2 /= 0x100;
            //colorR = parseInt(urlParams.get('R1'));
            //colorG = parseInt(urlParams.get('G1'));
            //colorB = parseInt(urlParams.get('B1'));
            //targetR = parseInt(urlParams.get('R2'));
            //targetG = parseInt(urlParams.get('G2'));
            //targetB = parseInt(urlParams.get('B2'));
        }
        
        var decrementValueR = parseInt((targetR - colorR) / count);
        var decrementValueG = parseInt((targetG - colorG) / count);
        var decrementValueB = parseInt((targetB - colorB) / count);

        do {
            var hexVal = "";
            if (window.location.search == "?random")
            {
              hexVal = "#" + (parseInt(Math.random() * 255) + 0).toString(16) + (parseInt(Math.random() * 255) + 0).toString(16) + (parseInt(Math.random() * 255) + 0).toString(16);
            }
            else 
            {
                hexVal = "#";
                hexVal += parseInt(colorR).toString(16);
                if (colorR == 0) 
                {
                    hexVal += "0";
                }
                hexVal += parseInt(colorG).toString(16);
                if (colorG == 0) 
                {
                    hexVal += "0";
                }
                hexVal += parseInt(colorB).toString(16);
                if (colorB == 0) 
                {
                    hexVal += "0";
                }
                colorR += decrementValueR;
                colorG += decrementValueG;
                colorB += decrementValueB;
            }

            current.Draw(graphics, hexVal);
            current = current.Previous;
        } while (current != null && current.Previous != null);

        if (snakePart.X < 0 || snakePart.Y < 0 || snakePart.X + snakePart.Width - 1 > canvas.width || snakePart.Y + snakePart.Height - 1 > canvas.height) {
            GameOver();
            return;
        }

        var temp = snakePart
        while (temp.Previous != null) {
            var temp2 = temp.Previous;
            while (temp2.Previous != null) {
                if (temp.X == temp2.X && temp.Y == temp2.Y) {
                    GameOver();
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

    canvas.width = document.body.clientWidth - 5;
    canvas.width -= (canvas.width % 20) - 1;
    canvas.height = window.innerHeight - 25 - (window.innerHeight - 25) % 20;

    graphics = canvas.getContext("2d");

    snakeHeadImage = new Image(20, 20);
    snakeHeadImage.src = 'Assets/SnakeheadRight.png';
    //snakeHeadImage = document.body.getElementById("snakeHeadImage");
    document.body.appendChild(snakeHeadImage);
    snakeHeadImage.hidden = true;

    canvas.addEventListener("mousedown", mouseClickPosition, false);
    window.addEventListener("keydown", keyDown, false);

    graphics.font = "30px Arial";
    graphics.fillStyle = "#000000";
    graphics.textAlign = "center";
    graphics.fillText("Press space to start.", canvas.width / 2, canvas.height / 2);

    urlParams = new URLSearchParams(window.location.search);

    Restart();
}

function GameOver() {
    graphics.font = "30px Arial";
    graphics.fillStyle = "#000000";
    graphics.textAlign = "center";
    graphics.fillText("You Lost. Press Any Key To Restart.", canvas.width / 2, canvas.height / 2);
    var valueToAdd = (count - 1) * 5;

    for (var i = 1; i <= 10; i++) {
        if (localStorage.getItem("" + i) != null) {
            if (parseInt(localStorage.getItem("" + i)) < valueToAdd) {
                var temp = valueToAdd;
                valueToAdd = parseInt(localStorage.getItem("" + i));
                localStorage.setItem("" + i, "" + temp);
            }
            else {
                continue;
            }
        }
        else {
            localStorage.setItem("" + i, "" + valueToAdd);
            break;
        }
    }

    waitingForReset = true;
}

function Restart() {
    waitingForReset = false;
    snakePart = new SnakePart(Directions.right, 20, 20, 20, 20);
    CurrentSnakeParts = [snakePart];
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
