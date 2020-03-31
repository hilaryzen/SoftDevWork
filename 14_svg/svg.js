//Albert wan
//softdev1 pd09
//k13 -- Ask Circles
//2020-03-31
var xIncrem = 1;
var yIncrem = 1;
var clear = document.getElementById("clear");
var canvas = document.getElementById("canvas");
var xtra = document.getElementById("xtra");
var movement = document.getElementById("move");
var draw = function() {

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cy", event.offsetY);
    c.setAttribute("cx", event.offsetX);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "black");
    canvas.appendChild(c);


}

var circleMove = function(e) {
  window.requestAnimationFrame(circleMove);
  var allCircles = canvas.children;
  var length = allCircles.length;
  for (var x = 0; x < length; x++){
    var state = allCircles[x].getAttribute("state");
    if (state !== "moving"){

      if (Math.floor(Math.random() * 2) == 0){
        xIncrem = 1;
      }else{
        xIncrem = -1;
      }
      if (Math.floor(Math.random() * 2) == 0){
        yIncrem = 1;
      }else{
        yIncrem = -1;
      }
      allCircles[x].setAttribute("state", "moving");
      allCircles[x].setAttribute("xIncrem", xIncrem);
      allCircles[x].setAttribute("yIncrem", yIncrem);
    }
    var xCor =  parseInt(allCircles[x].getAttribute("cx")) + parseInt(allCircles[x].getAttribute("xIncrem"));
    var yCor =  parseInt(allCircles[x].getAttribute("cy")) + parseInt(allCircles[x].getAttribute("yIncrem"));
    if (yCor <= 5 || yCor >= 590){
      allCircles[x].setAttribute("yIncrem", parseInt(allCircles[x].getAttribute("yIncrem") * -1));
    }
    if (xCor <= 5 || xCor >= 590){
      allCircles[x].setAttribute("xIncrem", parseInt(allCircles[x].getAttribute("xIncrem") * -1));
    }


    allCircles[x].setAttribute("cy", yCor);
    allCircles[x].setAttribute("cx", xCor);
  }


}

var circleXtra = function(e) {
  var allCircles = canvas.children;
  var length = allCircles.length;
  for (var x = 0; x < length; x++) {
    allCircles[x].setAttribute("cx", Math.floor(Math.random() * 500));
    allCircles[x].setAttribute("cy", Math.floor(Math.random() * 500));
  }
}

var clearC = function() {
  while(canvas.childElementCount > 0){
    canvas.removeChild(canvas.children[0]);
  }
}
clear.addEventListener("click", clearC);
movement.addEventListener("click", circleMove);
xtra.addEventListener("click", circleXtra);
canvas.addEventListener("click",draw);
