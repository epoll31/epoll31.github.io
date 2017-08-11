class Sprite{
    constructor(x = number, y = number, width = number, height = number, color)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    Draw()
    {   
        graphics.beginPath();
        graphics.fillStyle = this.color;
        graphics.fillRect(this.x, this.y, this.width, this.height);
        //graphics.stroke();
        graphics.closePath();
    }
}

class BouncySprite extends Sprite{
    constructor(x = number, y = number, width = number, height = number, speed = number, color){
        super (x, y, width, height, color);

        this.xSpeed = speed;
        this.ySpeed = speed;
    }

    Update()
    {
        if (this.x + this.width >= canvas.width)
        {
            this.xSpeed *= -1;
        }
        else if (this.x <= 0)
        {
            this.xSpeed *= -1;
        }
    
        if (this.y + this.height >= canvas.height)
        {
            this.ySpeed *= -1;
        }
        else if (this.y <= 0)
        {
            this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

class Paddle extends Sprite{
    constructor (x = number, y = number, width = number, height = number, color) {
        super (x, y, width, height, color);
    }
}
