var current = 0;
var max = 43;

onload = () =>
{

}

NextButtonClicked = () =>
{
    current = (current + 1) % max;

    image = document.getElementById("image");
    image.src = "Nicole/Photos/Nicole" + current + ".jpg";
}

BackButtonClicked = () =>
{
    current = (current + max - 1) % max;

    image = document.getElementById("image");
    image.src = "Nicole/Photos/Nicole" + current + ".jpg";
}