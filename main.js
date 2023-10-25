// practice
//Q1
const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  // the action that leads towards the stop condition `number-1` if the number is positive then this action will keep decreasing the number till it reaches zero
  return number * factorial(number - 1);
};

factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
factorial(3); // 1 * 2 * 3 => 6
factorial(1); // => 1
factorial(0); // => 1
//Q2
const sumCubes = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  // the action that leads towards the stop condition `number-1` if the number is positive then this action will keep decreasing the number till it reaches zero
  return numbers[0] ** 3 + sumCubes(numbers.slice(1));
};

sumCubes([1, 2]); // => 9
sumCubes([1, 2, 3]); // => 36
sumCubes([5, 3, 3]); // => 179
sumCubes([]); // => 0
//Q3

const getLength = function (string) {
  if (string === "") {
    return 0;
  }

  return getLength(string.slice(1)) + 1;
};

getLength("Hello"); // => 5
getLength("John"); // => 4
getLength(""); // => 0
//Q4
const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  return string[string.length - 1] + reverseString(string.slice(0, -1));
};

reverseString("Hello World"); // => "dlroW olleH"
reverseString("John Doe"); // => "eoD nhoJ"
reverseString(""); // => ""
//Q5
let y = 0;
const countCharacter = function (string, character) {
  if (string === "") {
    return 0;
  }
  if (string[0] === character) {
    return countCharacter(string.slice(1), character) + 1;
  }
  return countCharacter(string.slice(1), character);
};

countCharacter("hello", "l"); // => 2
countCharacter("hello", "e"); // => 1
countCharacter("hello", "z"); // => 0
//Q6
let str = "";

const oddOrEven = function (number) {
  if (number === 0) {
    str = "The number is even";
    return str;
  }
  if (number === 1) {
    str = "The number is odd";
    return str;
  }

  return oddOrEven(number - 2);
};

oddOrEven(8); // => "The number is even"
oddOrEven(1); // => "The number is odd"
//Q7
const multiply = function (numberOne, numberTwo) {
  if (numberOne===0) {
    return 0
  }
  
  return multiply(numberOne-1,numberTwo)+numberTwo
};

multiply(2, 3); // => 6
multiply(4, 5); // => 20
//Q8
const isPalindrome = function (string) {
  if (string===reverseString(string.replaceAll(" ",""))) {
    return true
  }else{
  return false}
};

isPalindrome("dad"); // => true
isPalindrome("dads"); // => false
isPalindrome("John doe"); // => false
isPalindrome("a bcdcba"); // => true
isPalindrome("a santa at nasa"); // => true
isPalindrome("was it a car or a cat i saw"); // => true
