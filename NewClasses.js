"use strict";

class Sprite {
    constructor(x = number, y = number, width = number, height = number, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    Draw() {
        graphics.beginPath();
        graphics.fillStyle = this.color;
        graphics.fillRect(this.x, this.y, this.width, this.height);
        //graphics.stroke();
        graphics.closePath();
    }
}