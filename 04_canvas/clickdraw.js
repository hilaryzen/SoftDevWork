var clear = function() {
  console.log("clear function called");
  var c = document.getElementById("slate");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 600, 600);
  console.log("Cleared");
}

var clean = document.getElementById("clean");
clean.addEventListener("click", clear);
