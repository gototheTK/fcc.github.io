/*
Write a function to return the factorial of a number.

Factorial of a number is given by:

n! = n * (n-1) * (n-2) * ..... * 1
For example:

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
Note: 0! = 1
*/


function factorial(n) {
    return n > 1 ? n * factorial(n-1) : 1;
  }