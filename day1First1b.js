// 1.b.Write a function called `filterByLength` that takes an array of strings and a number as input and returns an array of all the strings in the input array whose length is greater than or equal to the input number.
//```js

function filterByLength(arr, length) {
  return arr.filter((str) => str.length >= length);
}
const arr = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByLength(arr, 6));

//In this function, we use the filter method on the input array arr to create a new array that contains only the elements, The condition is defined using an arrow function that checks if the length of each string in the array is greater than or equal to the input number length.
