"use strict";


var canvas;
var graphics;

var ball;
var leftPaddle;
var rightPaddle;

var pong;
var snakeButton;
var back;

var state;

var updateInterval;
var drawInterval;

var snake;

window.onload = () => {
    canvas = document.getElementsByTagName("canvas")[0];
    graphics = canvas.getContext("2d");

    ball = new BouncySprite((canvas.width / 2) - 12.5, (canvas.height / 2) - 12.5, 25, 25, 4, "Black");
    leftPaddle = new Paddle(15, canvas.height / 2 - 50, 25, 100, "Red");
    rightPaddle = new Paddle(canvas.width - 40, canvas.height / 2 - 50, 25, 100, "Red");

    pong = new Button(50, 50, 150, 50, "Pong", 32.5, 12.5, 40, "Red", "Black");
    snakeButton = new Button(225, 50, 150, 50, "Snake", 20, 10, 40, "Red", "Black");
    back = new Button(25, 25, 75, 25, "Back", 15, 5, 20, "Red", "Black");

    state = 0;

    snake = new Snake(canvas.width/2 - 7.5, canvas.height/2 - 7.5, 15, "Black");

    updateInterval = setInterval(Update, 30);
    drawInterval = setInterval(Draw, 30);

    canvas.addEventListener("mousedown", mouseClickPosition, false);
    window.addEventListener("keydown", keyDown, false);
}

function Update() {
    if (state == 1) {
        ball.Update();
        rightPaddle.y = ball.y - (rightPaddle.height / 2) + (ball.height / 2);

        if (rightPaddle.y <= 15) {
            rightPaddle.y = 15;
        }
        else if (rightPaddle.y + rightPaddle.height + 15 >= canvas.height) {
            rightPaddle.y = canvas.height - rightPaddle.height - 15;
        }

        //console.log(ball.x, leftPaddle.x + leftPaddle.width);
        if ((ball.y > leftPaddle.y && ball.y + ball.height < leftPaddle.y + leftPaddle.height) && ball.x <= leftPaddle.x + leftPaddle.width) {
            ball.x = leftPaddle.x + leftPaddle.width;
            ball.xSpeed *= -1;
        }
        else if (ball.x <= 0) {
            alert("Game Over!");
            ResetBall();
            leftPaddle.y = (canvas.height / 2) - leftPaddle.height / 2;
        }

        if (ball.x + ball.width >= rightPaddle.x) {
            ball.x = rightPaddle.x - ball.width;
            ball.xSpeed *= -1;
        }
    }
    else if (state == 2) {
        snake.Update();
    }
}

function Draw() {
    graphics.fillStyle = "CornflowerBlue";
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    if (state == 0) {
        pong.Draw();
        snakeButton.Draw();
    }
    else if (state == 1) {
        back.Draw();
        ball.Draw();
        leftPaddle.Draw(graphics);
        rightPaddle.Draw(graphics);
    }
    else if (state == 2) {
        back.Draw();
        snake.Draw();
    }
}

function ResetBall() {
    ball.x = canvas.width / 2 + ball.width / 2;
    ball.y = canvas.height / 2 + ball.height / 2;
    ball.SpeedX = (Math.floor((Math.random() * 2) + 0) - 1) * 2;
    ball.SpeedY = (Math.floor((Math.random() * 2) + 0) - 1) * 2;
}


function mouseClickPosition(event) {
    var x = event.x - canvas.offsetLeft;
    var y = event.y - canvas.offsetTop;

    if (state == 0) {
        if (pong.Clicked(x, y)) {
            clearInterval(updateInterval);
            updateInterval = setInterval(Update, 30);
            clearInterval(drawInterval);
            drawInterval = setInterval(Draw, 30);
            state = 1;
        }
        else if (snakeButton.Clicked(x, y)) {
            clearInterval(updateInterval);
            updateInterval = setInterval(Update, 150);
            clearInterval(drawInterval);
            drawInterval = setInterval(Draw, 150);
            state = 2;
        }
    }
    else if (state != 0 && back.Clicked(x, y)) {
        clearInterval(updateInterval);
        updateInterval = setInterval(Update, 30);
        clearInterval(drawInterval);
        drawInterval = setInterval(Draw, 30);
        state = 0;
    }
}

function keyDown(event) {
    switch (event.keyCode) {
        case 37:
            if (state == 2) {
                snake.ChangeDirection(2);
            }
            break;
        case 39:
            if (state == 2) {
                snake.ChangeDirection(0);
            }
            break;
        case 38:
            if (state == 1) {
                leftPaddle.MoveUp();
            }
            else if (state == 2) {
                snake.ChangeDirection(3);
            }
            break;
        case 40:
            if (state == 1) {
                leftPaddle.MoveDown();
            }
            else if (state == 2) {
                snake.ChangeDirection(1);
            }
            break;
        case 32:
            if (state == 2){
                snake.AddPiece();
            }
            break;
    }
}