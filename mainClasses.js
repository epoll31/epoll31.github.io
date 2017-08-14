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

class BouncySprite extends Sprite {
    constructor(x = number, y = number, width = number, height = number, speed = number, color) {
        super(x, y, width, height, color);

        this.xSpeed = speed;
        this.ySpeed = speed;
    }

    Update() {
        if (this.x + this.width >= canvas.width) {
            this.xSpeed *= -1;
        }
        else if (this.x <= 0) {
            this.xSpeed *= -1;
        }

        if (this.y + this.height >= canvas.height) {
            this.ySpeed *= -1;
        }
        else if (this.y <= 0) {
            this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

class Paddle extends Sprite {
    constructor(x = number, y = number, width = number, height = number, color) {
        super(x, y, width, height, color);
    }

    MoveUp() {
        if (this.y > 15) {
            this.y -= 5;
        }
    }
    MoveDown() {
        if (this.y + this.height + 15 < canvas.height) {
            this.y += 5;
        }
    }
}

class TextSprite {
    constructor(x = number, y = number, text = string, size, color) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.size = size;
        this.color = color;
    }

    Draw() {
        graphics.beginPath();
        graphics.fillStyle = this.color;
        graphics.font = this.size + "px arial";
        graphics.fillText(this.text, this.x, this.y)
        graphics.closePath();
    }
}

class Button {
    constructor(x = number, y = number, width = number, height = number, text = string, xOffset = number, yOffest = number, textSize, backgroundColor, textColor) {
        this.sprite = new Sprite(x, y, width, height, backgroundColor);
        this.text = new TextSprite(x + xOffset, y + height - yOffest, text, textSize, textColor);
    }

    Clicked(x = number, y = number) {
        return ((x > this.sprite.x && x < this.sprite.x + this.sprite.width) && (y > this.sprite.y && y < this.sprite.y + this.sprite.height));
    }

    Draw() {
        this.sprite.Draw();
        this.text.Draw();
    }
}

class Snake {
    constructor(x = number, y = number, size = number, color) {
        this.direction = 0;
        this.body = [new SnakePiece(x, y, size, 0, color, 0)];
    }

    Update() {
        console.log(this.body.length);
        this.body[0].Move();
        for (var i = 1; i < this.body.length; i++) {
            var piece = this.body[i];

            piece.direction = this.body[i - 1].direction;

            piece.Move();
        }
    }

    Draw() {
        for (var i = 0; i < this.body.length; i++) {
            var piece = this.body[i];

            piece.Draw();
        }
    }

    AddPiece() {
        var newPiece;
        if (this.body.length > 0) {
            newPiece = this.body[this.body.length - 1];
            newPiece = new SnakePiece(newPiece.x, newPiece.y, newPiece.width, newPiece.height, newPiece.color, newPiece.direction);
        }
        this.body[this.body.length] = newPiece;
    }

    ChangeDirection(directionChange = number) {
        if (((directionChange == 0 && this.body[0].direction == 2) ||
            (directionChange == 1 && this.body[0].direction == 3) ||
            (directionChange == 2 && this.body[0].direction == 0) ||
            (directionChange == 3 && this.body[0].direction == 1))) { return; }

        this.body[0].direction = directionChange;
    }
}

class SnakePiece extends Sprite {
    constructor(x = number, y = number, size = number, direction = number, color) {
        super(x, y, size, size, color);
        this.direction = direction;
    }

    Move() {
        switch (this.direction) {
            case 0:
                this.x += this.width + this.width / 7.5;
                break;
            case 1:
                this.y += this.height + this.height / 7.5;
                break;
            case 2:
                this.x -= this.width + this.width / 7.5;
                break;
            case 3:
                this.y -= this.height + this.height / 7.5;
                break;
        }
    }
}