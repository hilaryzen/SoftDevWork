var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 300;
var state = 0; //0 if stopped, 1 if true

var animateFunction = function() {
  //console.log("animate called");
  if (state == 1) {
    render_frame();
  } else {
    state = 1;
  }
  //window.requestAnimationFrame(animateFunction);
}

var render_frame = function() {
  window.requestAnimationFrame(render_frame);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.arc(300, 300, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  radius -= 1;
}

var stopFunction = function() {
  state = 0;
}

var animate = document.getElementById("animate");
animate.addEventListener("click", animateFunction);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopFunction);
