var max;
var lastfirstx = 0;
function converty(y, canvas) {
    return canvas.height / 2 - y;
}
function convertx(x, canvas) {
    return 30 + x;
}

function fix_dpi(canvasId) {
    //get DPI
    let dpi = window.devicePixelRatio;
    //get canvas
    let canvas = document.getElementById(canvasId);
    //get context
    let ctx = canvas.getContext('2d');
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}
function ready(canvasId) {
    fix_dpi(canvasId);
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";
    ctx.fill();
    // x vector
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.setLineDash([1, 1]);
    ctx.moveTo(convertx(0, c), converty(0, c));
    ctx.lineTo(convertx(c.width, c), converty(0, c));
    ctx.lineTo(convertx(c.width - 9, c), converty(3, c));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(convertx(c.width, c), converty(0, c));
    ctx.lineTo(convertx(c.width - 9, c), converty(-3, c));
    ctx.stroke();

    // y vector
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(convertx(0, c), converty(-c.height / 2, c));
    ctx.lineTo(convertx(0, c), converty(c.height / 2, c));
    ctx.lineTo(convertx(3, c), converty(c.height / 2 - 9, c));
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(convertx(0, c), converty(c.height / 2, c));
    ctx.lineTo(convertx(-3, c), converty(c.height / 2 - 9, c));
    ctx.stroke();

    ctx.setLineDash([]);
    // measure
    var n = convertx(c.width, c)
    var i;
    for (i = 0; i < n; i = parseInt(i) + 40) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(convertx(i, c), converty(-2, c));
        ctx.lineTo(convertx(i, c), converty(+2, c));
        ctx.font = "10px cursive";
        ctx.fillText(i / 40 + lastfirstx, convertx(i - 5, c), converty(-10, c));
        ctx.stroke();
    }
    i = parseInt((i) / 40) - 2;
    max = i;
    var text;
    if (c.id == "clkcanvas") {
        text = "CLK";
        ctx.font = "15px cursive";
        ctx.fillText(text, convertx(-30, c), 12);
        ctx.stroke();
    } else {
        text = ((c.id).charAt(0)).toUpperCase();
        ctx.font = "15px cursive";
        ctx.fillText(text, convertx(-20, c), 12);
        ctx.stroke();
    }
}
function draw(canvasId, x, prevalue, value) {
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(convertx(x, c), converty(value * 40, c));
    ctx.lineTo(convertx(x + 40, c), converty(value * 40, c));
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(convertx(x, c), converty(prevalue * 40, c));
    ctx.lineTo(convertx(x, c), converty(value * 40, c));
    ctx.stroke();
    if (prevalue == 0 && value == 1 && c.id == "clkcanvas") {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(convertx(x, c), converty(value * 40, c));
        ctx.lineTo(convertx(x - 3, c), converty(value * 40 - 9, c));
        ctx.stroke();
        
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(convertx(x, c), converty(value * 40, c));
        ctx.lineTo(convertx(x + 3, c), converty(value * 40 - 9, c));
        ctx.stroke();
    }
}