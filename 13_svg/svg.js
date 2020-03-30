var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

// variables for coords of last circle
var lastX = 0.0;
var lastY = 0.0;

var draw = function(e) {
    // makes new object so old one doesn't get overwritten
    var c = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
    //console.log("draw");

    // determine mouse position
    x = e.offsetX;
    y = e.offsetY;
    console.log(x);
    console.log(y);

    // draw new Circle
    c.setAttribute("cx",x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    //c.setAttribute("stroke","black");
    pic.appendChild(c);

};

var clear = function(e) {
  console.log("clear pressed");
  pic.innerHTML = "";
}


pic.addEventListener('click', draw);
button.addEventListener('click', clear);
