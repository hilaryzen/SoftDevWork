var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

// variable for coords of all circles
var coords = [];
var action = false;

var draw = function(e) {
    action = false;
    // makes new object so old one doesn't get overwritten
    var c = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
    //console.log("draw");

    // determine mouse position
    x = e.offsetX;
    y = e.offsetY;
    coords.push([x,y]);

    // draw new Circle
    c.setAttribute("cx",x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "20");
    c.setAttribute("fill", "blue");
    pic.appendChild(c);

};

var change = function(e) {
  x = e.offsetX;
  y = e.offsetY;
  circles = pic.children;
  i = circles.length - 1;
  while (i >= 0 && action == false) {
    c = circles.item(i);
    //console.log(c.getAttribute("cx"));
    if (dist(x, y, c.getAttribute("cx"), c.getAttribute("cy"))) {
      c.setAttribute("fill", "red");
      action = true;
    }
    i--;
  }
}

var dist = function(x, y, cx, cy) {
  d = Math.pow(cx - x, 2) + Math.pow(cy - y, 2);
  console.log(d <= 400);
  return d <= 400;
}

var clear = function(e) {
  console.log("clear pressed");
  pic.innerHTML = "";
}


pic.addEventListener('click', change);
pic.addEventListener('click', draw);
button.addEventListener('click', clear);
