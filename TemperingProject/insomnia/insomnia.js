count = 0;

window.onload = () => {
    document.addEventListener('keydown', (e) => {
        if (e.key == "Escape") {
            document.getElementById("stress").innerHTML = "";
        }
        else if (e.key == "Backspace") {
            location.replace("../index/index.html");
        }
    });
    setTimeout(() => {
    setInterval(() => {count++; document.getElementById("sheep-count").innerHTML = count + " Sheep"}, 3000);
    }, 1500);
};
