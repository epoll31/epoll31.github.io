var canvas;
var graphics;

var snake;
var last;
var partsToAdd = 10;

var update;
window.onload = () => {
    canvas = document.getElementById("canvas");
    graphics = canvas.getContext("2d");

    snake = new Snake(canvas.width / 2, canvas.height / 2, 10, null, "#005f00");
    last = snake;

    canvas.addEventListener("mousemove", function(e) { 
        var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
        mouseX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
        mouseY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
    });

    update = setTimeout(Update, 100);
};

var mouseX = 0;
var mouseY = 0;
window.onmousemove = (e) => {
    //mouseX = e.offsetX;
   // mouseY = e.offsetY;
}

function Update() {
    if (partsToAdd != 0) {
        partsToAdd--;
        last.next = new Snake(last.x, last.y, last.radius, last, last.color);
        last = last.next;
    }

    snake.x = mouseX;
    snake.y = mouseY;
    snake.Update();

    graphics.clearRect(0, 0, canvas.width, canvas.height);
    snake.Draw(graphics);
    update = setTimeout(Update, 50);
};

