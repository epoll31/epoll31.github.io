class Food{
    constructor (foodWidth, foodHeight, maxWidth, maxHeight)
    {
        this.X = Math.floor(Math.random() * (maxWidth/(foodWidth))) * (foodWidth);
        this.Y = Math.floor(Math.random() * (maxHeight/(foodHeight))) * (foodHeight);
        this.Width = foodWidth;
        this.Height = foodHeight;
        this.MaxWidth = maxWidth;
        this.MaxHeight = maxHeight;
    }

    Draw(graphics)
    {
        graphics.fillStyle = "#ff0000";
        graphics.fillRect(this.X, this.Y, this.Width, this.Height);
    }

    UpdatePosition()
    {
        this.X = Math.floor(Math.random() * (this.MaxWidth/(this.Width))) * (this.Width);
        this.Y = Math.floor(Math.random() * (this.MaxHeight/(this.Height))) * (this.Height);
    }
}
