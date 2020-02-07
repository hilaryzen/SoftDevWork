/*
Hilary Zen, Jason Zheng
SoftDev Pd. 2
K #04: I See a Red Door...
2020-02-05
*/

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var isToggled = true;

var clear = function() {
  ctx.clearRect(0, 0, c.width, c.height);
}

var rect = function() {
  //offsetX and offsetY return the event's mouse location inside the canvas
  ctx.fillRect(event.offsetX, event.offsetY, 50, 100);
}

var dot = function(){
  //Starts a new path
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

var change = function(){
  isToggled = !isToggled;
  if (isToggled){
    toggle.innerHTML = "Rectangle";
  }
  else{
    toggle.innerHTML = "Dot";
  }
}

var draw = function(){
  if (isToggled){
    rect();
  }
  else {
    dot();
  }
}

var clean = document.getElementById("clean");
clean.addEventListener("click", clear);

var toggle = document.getElementById("toggle");
toggle.addEventListener("click", change);

c.addEventListener("click", draw)
