var count = 0;
var minButton;
var maxButton;


window.onload = () => {
    maxButton = Math.min(window.innerWidth, window.innerHeight) / 2;
    minButton = maxButton / 4;

    resizeButton(addButton());

    document.addEventListener('click', (e) => {
        let element = e.target;
        if (element.tagName == "BUTTON") {
            resizeButton(element);
            let a = Math.floor(Math.random() * 3 + 1);
            for (let i = 0; i < a; i++) {
                resizeButton(addButton());
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key == "Escape") {
            document.getElementById("stress").innerHTML = "";
            count = 0;
            resizeButton(addButton());
        }
        else if (e.key == "Backspace") {
            location.replace("../index/index.html");
        }
    })
};

function addButton() {
    count++;
    let button = document.createElement("button");
    button.id = "stress-button-" + count;
    button.innerHTML = "click me";
    button.classList.add("stress-button");
    let color= "stress-color"+Math.floor(Math.random() * 5);
    button.classList.add(color);
    document.getElementById("stress").appendChild(button);
    return button;
}

function resizeButton(b) {
    var width = Math.floor(Math.random() * maxButton + minButton);
    var height = Math.floor(Math.random() * maxButton + minButton);

    var i = Math.floor(Math.random() * (window.innerWidth - width));
    var j = Math.floor(Math.random() * (window.innerHeight - height));
    b.style.left = i+"px";
    b.style.top = j+"px";
    b.style.width = width+"px";
    b.style.height = height+"px";    
}