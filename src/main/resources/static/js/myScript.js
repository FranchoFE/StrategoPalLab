
var s = Snap(850, 600);
var bigCircle = s.circle(300, 300, 100);

window.onload = function() {
  var inputElement = document.getElementById("demo")
  inputElement.addEventListener('click', function(){
      gotoNode(document.getElementById("aaa"));
  });
};

function myFunction(param) {
    document.getElementById("demo").style.color = "blue";

    bigCircle.attr({fill: "green"});
    bigCircle.attr({r: 200});
}

function gotoNode (name)
{
    document.getElementById("demo").style.color = "green";
    var aaa = document.getElementById("aaa").innerHTML;
    var radiousString = "${radious}";
    alert (radiousString)
}