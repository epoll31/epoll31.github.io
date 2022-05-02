class Snake{
    constructor (x, y, radius, parent, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.parent = parent;
        this.color = color;
        this.next = null;
    }

    Update() {
        if(this.parent != null) {
            if (Dist(this.x, this.y, this.parent.x, this.parent.y) > this.radius + this.parent.radius) {
                let [x, y] = Lerp(this.x, this.y, this.parent.x, this.parent.y, 0.5);
                this.x = x;
                this.y = y;
            }
        }

        if (this.next != null) {
            this.next.Update();
        }
    }

    Draw(graphics) {
        graphics.fillStyle = this.color;
        
        graphics.beginPath();
        graphics.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        graphics.fill();

        if (this.next != null) {
            this.next.Draw(graphics);
        }
    }
}
function Dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function Lerp(x1, y1, x2, y2, d) {
    return [x1 + (x2 - x1) * d, y1 + (y2 - y1) * d];
};