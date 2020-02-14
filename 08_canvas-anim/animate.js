// Joseph Yusufov, Hilary Zen
// SoftDev pd2
// K08: What is it saving the screen from
// 2020-02-14

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 20;
var increasing = 0; //0 if increasing, 1 if decreasing
var ballState = 0; //0 if stopped, 1 if running
var dvdState = 0;
var id;
var dvdImage = document.getElementById("dvd-image");

var animateFunction = function() {
    //console.log("animate called");
    if (dvdState == 1) {
        window.cancelAnimationFrame(id);
    }
    dvdState = 0;
  if (!ballState) {
    ballState = 1;
    render_frame();
  }
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
  } else if (radius > 200) {
    increasing = 1;
  }
}

var stopFunction = function() {
    ballState = 0;
    dvdState = 0;
    window.cancelAnimationFrame(id);
}

var dvdX = 100;
var dvdY = 100;
var dvdDir = "SE";

var dvdAnimate = function() {
    // if (!state) {
    // 	state = 1;
    if (ballState == 1) {
        window.cancelAnimationFrame(id);
    }
    ballState = 0;
    randomizeDVD();
    dvdDir = "SE";
    if (dvdState == 0) {
        dvdState = 1;
        dvdFunction();
    }
}
var dvdFunction = function() {
    id = window.requestAnimationFrame(dvdFunction)
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(dvdImage,dvdX,dvdY,100,70);
    console.log("(" + dvdX + ", " + dvdY + ")");


    // code block that checks for walls, and changes direction
    // accordingly
    if(dvdX == 500) {
        if(dvdDir == "NE"){dvdDir = "NW";}
        if(dvdDir == "SE"){dvdDir = "SW";}
    }
    if(dvdX == 0) {
        if(dvdDir == "NW"){dvdDir = "NE";}
        if(dvdDir == "SW"){dvdDir = "SE";}
    }
    if(dvdY == 530) {
        if(dvdDir == "SE"){dvdDir = "NE";}
        if(dvdDir == "SW"){dvdDir = "NW";}
    }
    if(dvdY == 0) {
        if(dvdDir == "NE"){dvdDir = "SE";}
        if(dvdDir == "NW"){dvdDir = "SW";}
    }

    // code block that moves symbol based on direction
    if(dvdDir == "SE"){
        dvdX += 1;
        dvdY += 1;
    }
    if(dvdDir == "SW"){
        dvdX -= 1;
        dvdY += 1;
    }
    if(dvdDir == "NE"){
        dvdX += 1;
        dvdY -= 1;
    }
    if(dvdDir == "NW"){
        dvdX -= 1;
        dvdY -= 1;
    }
}


var animate = document.getElementById("animate");
animate.addEventListener("click", animateFunction);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopFunction);

var dvd = document.getElementById("dvd-button");
dvd.addEventListener("click", dvdAnimate);

// Helper Function
var randomizeDVD = function() {
    dvdX = Math.floor(Math.random() * 400);
    dvdY = Math.floor(Math.random() * 400);
}
