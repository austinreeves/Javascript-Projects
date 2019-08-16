var X = 10;
function Add_numbers_1() {
    document.write(20 + X);
}

function Add_numbers_2() {
   var Y = 50;
    document.write(X + Y);
}

function Add_numbers_3() {
    console.log(X + Y);
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

function get_Date() {
    if (new Date() .getHours() <18) {
        document.getElementById("Time").innerHTML = "How are you today?";
    }
}

function Mood() {
    if (new Date() .getHours() <17) {
        document.getElementById("how_are_you").innerHTML = "Almost off of work!";
    }
}

function Age_Function() {
    Age = document.getElementById("how_old_are_you").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("Vote").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}