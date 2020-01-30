var fibonacci = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

var gcd = function(a,b) {
  var x;
  var ans = 0;
  for (x = 0; x <= a && x <= b; x++) {
    if (a % x == 0 && b % x == 0) {
      ans = x;
    }
  }
  return ans;
}

var randomStudent = function() {
  var names = ["Amy", "Bob", "Claire", "Dave"];
  var index = Math.floor(Math.random() * names.length);
  return names[index];
}
