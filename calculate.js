var q = 0;

var prej = 0, prek = 0, preclk = 0;
var running = false;
var currentx = 0;
var timerID;
function not(x) {
    var xnot = (x == 0) ? 1 : 0;
    return xnot;
}
function tfVal(x) {
    return val = (x == true) ? 1 : 0;
}
function calculate() {
    preq = q;

    if (currentx / 40 >= max) {
        lastfirstx = parseInt(lastfirstx) + parseInt(max);
        currentx = 0;
        ready("jcanvas");
        ready("kcanvas");
        ready("clkcanvas");
        ready("qcanvas");
    }
    j = tfVal(document.getElementById('checkJ').checked);
    k = tfVal(document.getElementById('checkK').checked);
    clk = tfVal(document.getElementById('checkCLK').checked);

    if (preclk == 0 && clk == 1) {
        //CLK Latch
        if (clk == 0) {
            q = q;
        }
        else {
            //Latch
            if (j == 0 && k == 0) {
                q = q;
            }
            //Reset
            if (j == 0 && k == 1) {
                q = 0;
            }
            //Set
            if (j == 1 && k == 0) {
                q = 1;
            }
            //Toggle
            if (j == 1 && k == 1) {
                q = not(q);
            }
        }
    }

    draw("jcanvas", currentx, prej, j);
    draw("kcanvas", currentx, prek, k);
    draw("clkcanvas", currentx, preclk, clk);
    draw("qcanvas", currentx, preq, q);
    prej = j;
    prek = k;
    preclk = clk;
    currentx = parseInt(currentx) + 40;
}
function run() {

    if (running == false) {
        timerID = setInterval(calculate, 800);
        running = true;
        document.getElementById("run").style.backgroundColor = "green";
    } else {
        document.getElementById("run").style.backgroundColor = "red";
        clearInterval(timerID);
        running = false;
    }
}