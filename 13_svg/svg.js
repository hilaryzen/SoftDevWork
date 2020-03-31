var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

// variable for tracking whether a circle has moved or changed color
var action = false;

var draw = function(e) {
  if (action == false) {
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
  } else {
    // if mouse already clicked on a circle, nothing is drawn
    action = false;
  }
};

var change = function(e) {
  x = e.offsetX;
  y = e.offsetY;
  circles = pic.children; // gets collection of all circles
  i = circles.length - 1;
  // check if mouse has clicked on any circles, starting from the last one
  while (i >= 0 && action == false) {
    c = circles.item(i);
    if (dist(x, y, c.getAttribute("cx"), c.getAttribute("cy"))) {
      if (c.getAttribute("fill") == "blue") {
        c.setAttribute("fill", "red");
      } else {
        // send circle to new location and change it to blue
        c.setAttribute("cx", Math.floor(Math.random() * 500));
        c.setAttribute("cy", Math.floor(Math.random() * 500));
        c.setAttribute("fill", "blue");
      }
      action = true;
    }
    i--;
  }
}

// calculates distance between mouse coords x,y and circle coords
var dist = function(x, y, cx, cy) {
  d = Math.pow(cx - x, 2) + Math.pow(cy - y, 2);
  return d <= 400;
}

var clear = function(e) {
  console.log("clear pressed");
  pic.innerHTML = "";
}


pic.addEventListener('click', change);
pic.addEventListener('click', draw);
button.addEventListener('click', clear);
