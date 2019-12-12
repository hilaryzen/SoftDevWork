var fibonacci = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var fibClick = function() {
  var display = document.getElementById("display");
  var ans = fibonacci(10);
  console.log(ans);
  display.innerHTML = ans;
}

var gcd = function(a,b) {
  var x;
  var ans = 1;
  for (x = 2; x <= Math.min(a,b); x++) {
    if (a % x == 0 && b % x == 0) {
      ans = x;
    }
  }
  console.log(ans);
  return ans;
}

var gcdClick = function() {
  var display = document.getElementById("display");
  display.innerHTML = gcd(4,20);
}

var randomStudent = function() {
  var names = ["Amy", "Bob", "Claire", "Dave"];
  var index = Math.floor(Math.random() * names.length);
  console.log(names[index]);
  return names[index];
}

var randomClick = function() {
  var display = document.getElementById("display");
  display.innerHTML = randomStudent();
}

var fibButton = document.getElementById("fib");
fibButton.addEventListener("click", fibClick);

var gcdButton = document.getElementById("gcd");
gcdButton.addEventListener("click", gcdClick);

var randomButton = document.getElementById("random");
randomButton.addEventListener("click", randomClick);
