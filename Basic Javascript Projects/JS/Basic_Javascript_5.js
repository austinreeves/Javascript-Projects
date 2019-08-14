document.write(typeof "Emilee");

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function_1() {
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_Function_2() {
    document.getElementById("Test2").innerHTML = isNaN(007);
}

function my_Function_3() {
    document.getElementById("Test3").innerHTML = 3E310;
}

function my_Function_4() {
    document.getElementById("Test4").innerHTML = -3E310;
}

function my_Function_5() {
    document.getElementById("Test5").innerHTML = 10>2;
}

function my_Function_6() {
    document.getElementById("Test6").innerHTML = 10<2;
}

console.log(5 < 2);

document.write("10" + 5);

function my_Function_7() {
    document.getElementById("Test7").innerHTML = 10 == 10;
}

function my_Function_8() {
    document.getElementById("Test8").innerHTML = 10 == 4;
}

function my_Function_9() {
    X = 10;
    Y = 10;
    document.getElementById("Test9").innerHTML = X === Y;
}

function my_Function_10() {
    X = 82;
    Y = "50";
    document.getElementById("Test10").innerHTML = X === Y;
}

function my_Function_11() {
    X = 82;
    Y = "82";
    document.getElementById("Test11").innerHTML = X === Y;
}

function my_Function_12() {
    X = 10;
    Y = 12;
    document.getElementById("Test12").innerHTML = X === Y;
}

function my_Function_13() {
    document.getElementById("Test13").innerHTML = 5 > 2 && 10 > 4;
}

function my_Function_14() {
    document.getElementById("Test14").innerHTML = 2 > 5 && 10 > 4;
}

function my_Function_15() {
    document.getElementById("Test15").innerHTML = 10 > 20 || 10 > 5;
}

function my_Function_16() {
    document.getElementById("Test16").innerHTML = 10 > 20 || 5 > 10;
}

function my_Function_17() {
    document.getElementById("Test17").innerHTML = !(8 > 10);
}

function my_Function_18() {
    document.getElementById("Test18").innerHTML = !(10 > 8);
}