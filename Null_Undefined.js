// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

// var x;
// console.log(x);

// var audi = null;
// console.log(audi);

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log(userName);
console.log(typeof userName);