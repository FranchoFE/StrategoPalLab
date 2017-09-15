
var s = Snap(850, 600);
var bigCircle = s.circle(300, 300, 100);


function myFunction(param) {
    document.getElementById("demo").style.color = "blue";

    bigCircle.attr("radius", 100);
}