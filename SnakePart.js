var Directions = Object.freeze({"up": 1, "right" : 2, "down": 3, "left" : 4});
class SnakePart{
    constructor (startDirection, x, y, width, height){
        this.CurrentDirection = startDirection;
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.Next = null;
        this.Previous = null;
        this.Count = 1;
    }

    SetDirection(newDirection){
        this.CurrentDirection = newDirection;
    }

    Update(){
        if (this.Previous == null)
        {
            //var before = "X: " + this.Y + " | Y: " + this.Y + " | Width: " + this.Width + " | Height: " + this.Height;
            //alert("test");
            switch (this.CurrentDirection)
            {
                case Directions.up:
                    this.Y -= this.Height + 1;
                    break;
                case Directions.right:
                    this.X += this.Width + 1;
                    break;
                case Directions.down:
                    this.Y += this.Height - 1;
                    break;
                case Directions.left:
                    this.X -= this.Width - 1;
                    break;
                default:
                    break;
            }
            //alert(before + "\nX: " + this.Y + " | Y: " + this.Y + " | Width: " + this.Width + " | Height: " + this.Height)
            return this;
        }
        var prev = this.Previous;
        while (prev.Previous != null)
        {
            prev = prev.Previous;
        }
        switch (this.CurrentDirection)
        {
            case Directions.up:
                prev.X = this.X;
                prev.Y = this.Y - this.Height - 1;
                break;
            case Directions.right:
                prev.X = this.X + this.Width + 1;
                prev.Y = this.Y;
                break;
            case Directions.down:
                prev.X = this.X;
                prev.Y = this.Y + this.Height + 1;
                break;
            case Directions.left:
                prev.X = this.X - this.Width - 1;
                prev.Y = this.Y;
                break;
            default:
                console.log("error");
                break;
        }
        this.Next = new SnakePart(this.CurrentDirection, prev.X, prev.Y, prev.Width, prev.Height);
        this.Next.Previous = this;
        prev.Next.Previous = null;
        return this.Next;
    }

    Draw(graphics){
        graphics.fillStyle = "#000000";
        graphics.fillRect(this.X, this.Y, this.Width, this.Height);
    }
}
