var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 20;
var increasing = 0; //0 if increasing, 1 if decreasing
var state = 0; //0 if stopped, 1 if running
var id;

var animateFunction = function() {
  //console.log("animate called");
  if (state) {
    render_frame();
  } else {
    state = 1;
    render_frame();
  }
  //window.requestAnimationFrame(animateFunction);
}

var render_frame = function() {
  id = window.requestAnimationFrame(render_frame);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.arc(300, 300, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  if (increasing) {
    radius -= 1;
  } else {
    radius += 1;
  }
  if (radius < 20) {
    increasing = 0;
  } else if (radius > 280) {
    increasing = 1;
  }
}

var stopFunction = function() {
  //state = 0;
  window.cancelAnimationFrame(id);
}

var animate = document.getElementById("animate");
animate.addEventListener("click", animateFunction);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopFunction);
