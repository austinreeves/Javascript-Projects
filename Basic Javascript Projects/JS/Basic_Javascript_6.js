function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emilee = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Name, Breed, Color) {
    this.Dog_Name = Name;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Austin = new Dog("Apollo", "Great Dane", "Fawn");
var Emilee = new Dog("Ruby", "Corgi", "Sable");
var Chris = new Dog("Dennis", "Brussels Griffon", "Yellow");
function DogFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Austin got a new " + Austin.Dog_Color + "-colored " + Austin.Dog_Breed +
    " named " + Austin.Dog_Name;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
}
}