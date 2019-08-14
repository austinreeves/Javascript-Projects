function Multiply() {
    var mMath = 5 * 2;
    document.getElementById("MMath").innerHTML = "5 * 2 = " + mMath;
}

function Divide() {
    var dMath = 12/4;
    document.getElementById("DMath").innerHTML = "12 / 4 = " + dMath;
}

function All() {
    var aMath = (5 +5) * 3 / 2 - 5;
    document.getElementById("allMath").innerHTML = "5 plus 5, times 3, divided by 2 and then subtracted by 5 equals " + aMath;
}

function Remainder() {
    var rMath = 25 % 10;
    document.getElementById("RMath").innerHTML = "The remainder of 25 / 10 is " + rMath;
}

function Negate() {
    var nOp = 10;
    document.getElementById("Neg").innerHTML = -nOp;
}

function In() {
    var X = 24;
    X++;
    document.write(X);
}

function De() {
    var Y = 26;
    Y--;
    document.write(Y);
}

function Random() {
    window.alert(Math.random()  * 100);
}

function sqr() {
document.getElementById("demo").innerHTML = Math.sqrt(69);
}