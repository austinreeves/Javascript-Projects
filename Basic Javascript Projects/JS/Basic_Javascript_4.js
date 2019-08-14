function Dict() {
    var Car = {
        Brand:"Porsche",
        Model:944,
        Trim:"Turbo",
        Year:1988,
        Color:"Red"
    };
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML = Car.Model;
}