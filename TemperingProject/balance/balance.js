var ctx;
var canvas;
var part;
var theta = 0;

window.onload = () => {
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
        } else if (e.key == "Backspace") {
            location.replace("../index/index.html");
        }
    });

    canvas = document.getElementById("balance-canvas");
    ctx = canvas.getContext("2d");
    console.log(canvas.width + ", " + canvas.height);

    const compStyles = window.getComputedStyle(canvas);
    canvas.width = compStyles.width.substring(0, compStyles.width.length - 2);
    canvas.height = compStyles.height.substring(0, compStyles.height.length - 2);
    console.log(canvas.width + ", " + canvas.height);

    let count = 7;
    let lengthPer = 50;
    let prev = null;
    let currHeight = canvas.height - lengthPer * count;
    for (let i = 0; i < count; i++) {
        part = new Part(canvas.width / 2, currHeight, lengthPer, prev);
        currHeight += lengthPer;
        prev = part;
    }
    update();
};

function update() {
    theta += 0.01;
    let range = Math.PI / 8;

    let change = Math.cos(theta) * range;
    part.rotate(change / 100);

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    //todo:
    //align flash to be with unbalanced sections
    let ad = Math.abs(part.theta + Math.PI / 2) / range;

    // console.log(ad);
    if (ad > 0.5) {
        canvas.classList.add('flash-red');
        if (ad > 0.95) {
            canvas.style.animationDuration = '100ms';
            console.log('100ms');
        }
        else {
            canvas.style.animationDuration = '200ms';
            console.log('200ms');
        }
    } else {
        canvas.classList.remove('flash-red');
    }

    ctx.strokeStyle = '#00C2D1';//'#246EB9';
    ctx.lineWidth = 20;
    ctx.beginPath();
    part.draw(ctx);
    ctx.stroke();

    setTimeout(update, 10);
}

class Part {

    constructor(x, y, radius, prev) {
        this.setPos(x, y);
        this.radius = radius;
        this.prev = prev;

        this.theta = -Math.PI / 2;
        this.findDiffs();
    }

    rotate(dt) {
        this._rotate(dt, 0);
    }
    _rotate(dt, count) {
        let diff = 1 + 0.2 * count;// + Math.sin(count * Math.PI * 2 / 14);
        this.theta += dt * diff;
        this.findDiffs();
        if (this.prev != null) {
            this.prev.setPos(this.x + this.diffX, this.y + this.diffY);
            this.prev._rotate(dt, count + 1);
        }
    }

    findDiffs() {
        this.diffX = Math.cos(this.theta) * this.radius;
        this.diffY = Math.sin(this.theta) * this.radius;
    }

    setPos(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.diffX, this.y + this.diffY);
        if (this.prev != null) {
            this.prev.draw(ctx);
        }
    }
}