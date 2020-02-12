var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var lastX = -1;
var lastY = -1;

var clear = function() {
  ctx.clearRect(0, 0, c.width, c.height);
  lastX = -1;
  lastY = -1;
}

var dot = function(){
  //Starts a new path
  ctx.beginPath();
  ctx.arc(event.offsetX, event.offsetY, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

var draw = function() {
  dot();
  if (lastX > 0) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
  lastX = event.offsetX;
  lastY = event.offsetY;
}

var clean = document.getElementById("clean");
clean.addEventListener("click", clear);
c.addEventListener("click", draw)
