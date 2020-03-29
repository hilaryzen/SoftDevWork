var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

// variables for coords of last circle
var first = true;
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
    c.setAttribute("fill", "red");
    c.setAttribute("stroke","black");
    pic.appendChild(c);

    // determines if we connect the circles
    if (first == true) {
        console.log("TRUE");
        lastX = x
        lastY = y
        first = false;
    }
    else {
        console.log("FALSE");
        var c = document.createElementNS(
            "http://www.w3.org/2000/svg", "line");
        // draw line
        c.setAttribute("x1",lastX)
        c.setAttribute("y1",lastY)
        c.setAttribute("x2",x)
        c.setAttribute("y2",y)
        c.setAttribute("fill", "red");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
        lastX = x;
        lastY = y;

    }

};

var clear = function(e) {
  console.log("clear pressed");
  pic.innerHTML = "";
  first = true;
}


pic.addEventListener('click', draw);
button.addEventListener('click', clear);
