//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [5,10,15,20];
alert(nums.reduce((total, num) => total + num, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numsSquared = nums => nums.map( num => num**2);


//Create a function that takes string
//Print the reverse of that string to the console
let strReverse = str => str.map( console.log(str.split('').reverse().join('')));


//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindromeChecker = str => alert( str === strReverse(str))
palindromeChecker('racecar')