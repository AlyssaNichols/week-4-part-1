console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
 console.log('should say "Hello Mason!"', helloName('Mason'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer
  // return firstNumber + secondNumber;
}
console.log ('adding numbers with 8 & 12:', addNumbers(8, 12));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer
}
console.log('multiplying numbers with 8 & 12 & 10:', multiplyThree(8, 12, 10));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
   }
  else {
    return false;
  }
}
console.log('is number positive', isPositive(3))

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0) {
    return 'undefined';
  }
  else {
    return array[array.length - 1]
  }
}

let myArray = [1, 2, 3, 4];
const lastItem = getLast(myArray);
console.log(lastItem);



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array) {
  for ( let i = 0; i < array.length; i++ ) {
    if (array[i] === value) {
      return true;
    }
}
return false
}

let ourArray = [1, 2, 3, 4, 5];
console.log('value is found within array', find(6, ourArray));






// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
  if (string.length === 0 ){
    return false;
  }
  return string[0] === letter;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
   // TODO: loop to add items
  return sum;
}
console.log('the sum is:', sumAll());

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



function returnPositiveNumbers() {
  const array = [2, 6, -1, 9, -3, -12, 15];
  const positiveNumbers = array.filter(num => num > -1);
  return positiveNumbers;

}
console.log(returnPositiveNumbers());




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// I picked a problem where I am told to write a function converting minutes into seconds

function minutesToSeconds () {
  return minutes * 60
}
const minutes = 20;
const seconds = minutesToSeconds(minutes);
console.log(`${minutes} minutes is equal to ${seconds} seconds.`)

