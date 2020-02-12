var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var isToggled = true;

var clear = function() {
  ctx.clearRect(0, 0, c.width, c.height);
}

var clean = document.getElementById("clean");
clean.addEventListener("click", clear);
