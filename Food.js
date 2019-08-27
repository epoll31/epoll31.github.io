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

    UpdatePosition(snakeParts)
    {
      this.X = Math.floor(Math.random() * (this.MaxWidth/(this.Width))) * (this.Width);
      this.Y = Math.floor(Math.random() * (this.MaxHeight/(this.Height))) * (this.Height);


      for (let i = 0; i < snakeParts.length; i++)
      {
        if (snakeParts[i].X == this.X && snakeParts[i].Y == this.Y)
        {
          this.X = Math.floor(Math.random() * (this.MaxWidth/(this.Width))) * (this.Width);
          this.Y = Math.floor(Math.random() * (this.MaxHeight/(this.Height))) * (this.Height);

          i = 0;
        }
      }


      /*var shouldContinue = false;
      var temp = sp;
      do
      {
        this.X = Math.floor(Math.random() * (this.MaxWidth/(this.Width))) * (this.Width);
        this.Y = Math.floor(Math.random() * (this.MaxHeight/(this.Height))) * (this.Height);
        shouldContinue = false;

        while (temp != null){
          if (this.X == temp.X && this.Y == temp.Y)
          {
            this.X = Math.floor(Math.random() * (this.MaxWidth/(this.Width))) * (this.Width);
            this.Y = Math.floor(Math.random() * (this.MaxHeight/(this.Height))) * (this.Height);
            temp = sp;
            shouldContinue = true;
            continue;
          }
        }

      } while (shouldContinue);a*/
    }
}
