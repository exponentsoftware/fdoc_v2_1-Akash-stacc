//1.c. Write a function called `sumOfPrimes` that takes a number as input and returns the sum of all prime numbers less than or equal to the input number.
//```js

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfPrimes(10)); // Output: 17

//we first define a helper function called isPrime that checks whether a given number is prime or not. It returns false if the number is less than 2 (as prime numbers start from 2), and it checks for divisibility from 2 up to the square root of the number. If any divisor is found, it returns false, indicating that the number is not prime. Otherwise, it returns true.
//The sumOfPrimes function takes a number num as input and initializes the sum variable to 0. It then iterates from 2 up to num and checks if each number is prime using the isPrime helper function. If a number is prime, it adds it to the sum
//Finally, the function returns the sum of all prime numbers less than or equal to the input number.
