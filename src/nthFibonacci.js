// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3
// etc...


var nthFibonacci = function(n) {
  // create an empty array
  // create a 0 num variable
  // create a decorator function
  // if num is equal n return the last element of the array
  // else push the fibonacci num to the array
  // return the function until num = n
  
  if(n === 0) {
    return 0;
  }

  var fib = [];
  var num = 0

  var results = function(num) {
    if (num === n) {
      return fib[fib.length - 1];
    } else {
      num ++;
      var Phi = (1 + Math.sqrt(5))/2
      var phi = (1 - Math.sqrt(5))/2
      var p = ( Phi**num - (phi)**num ) / Math.sqrt(5);
      fib.push(Math.floor(p));
    }
    return results(num)
  }
  return results(num);
};

/*Iterative Method

var nthFibonacci = function(n) {
  
  if(n === 0) {
    return 0;
  }

  var fib = [];
  var num = 0

  for (var i = 0; i <= n; i++) {
    var Phi = (1 + Math.sqrt(5))/2
    var phi = (1 - Math.sqrt(5))/2
    var p = ( Phi**i - (phi)**i ) / Math.sqrt(5);
    fib.push(Math.floor(p));
  }

  return fib[fib.length - 1];
};
*/