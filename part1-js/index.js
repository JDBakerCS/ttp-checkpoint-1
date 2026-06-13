// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.
const x = 100;
let y = 45;
console.log(x);
console.log(y);

// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.


console.log((((x + y) - 20) * 2) / 5);
// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
//
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: let variables can be reassigned but const cannot, 
//                  and causes an error
//let y = 46;
//const x = j;

// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer:
const num= 47;

if(num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd.`);
}


// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
const NewInput = rawInput.trim();
  console.log(NewInput);

// B2.
// Log the string converted to all lowercase.
const lowerCase = NewInput.toLowerCase();
  console.log(lowerCase);

// B3.
// Log the number of characters in rawInput (including spaces).
const strLength = rawInput.length;
  console.log(strLength);

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
 
console.log(lowerCase.includes("awesome"));


// B5.
// Log the first 10 characters of rawInput.
console.log(rawInput.slice(0, 10));

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: trim() removes the spaces at the beginning and end
//                 split(/\s+/) breaks the string into words
//                  then log wordsArray
const wordsArray = rawInput.trim().split(/\s+/);
  console.log(wordsArray);
// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
 const first = scores[0];
 const last = scores[scores.length-1];

 console.log(first);
 console.log(last);


// C2.
// Log the total number of scores we see in the array.
let total=0;

for(const sum of scores) {
  total += num;
}
console.log(total);

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78);
console.log(scores);


// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log(scores[2]);

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
console.log(scores.includes(50));

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
for(let index = 0;index <scores.length; index++) {
  console.log(scores[index]);
}

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
// A for loop and for each are simailar but you have more control over a loop
//like where you start and where you stop and how to increment
//forEach automatically goes thru each element for you. its just slightly more simple.
scores.forEach(score => {
  console.log(score);
});

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
const result = scores.filter(checkScore);

function checkScore(scores) {
  return scores > 80;
  
}
  console.log(result);
// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer:
const newArr = scores.map(DoubleScore);

function DoubleScore(num) {
  return num * 2;
}
console.log(newArr);



// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name);
console.log(student["city"]);

// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = "B+";

console.log(student);

// D3.
// Use a method to log all of the keys in the object.
console.log(Object.keys(student));

// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student));

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
for(const key in student) {
  console.log(`${key}: ${student[key]}`);
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer:dot = direct propety access
//                bracket notation is need when the property name is 
//                dynamic, stored in a variable, or not written in a way dot
//                notation can use easily
// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.
console.log(roster[2].name);

// E2.
// Using forEach, log the name of every student who is present.
roster.forEach(student => {
  if(student.present)
    console.log(student.name);
});


// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.
roster.forEach(student => {
  if (student.grade >= 70)
    console.log(student.name, student.grade);
})

// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.

const newArray = roster.map(student => student.name);
    console.log(newArray);
  
// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer:


// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"


// F2.
// Write a function called square that takes a number and returns its square.
//
function square(nums){
  return nums**2;
}
console.log(square(4))   // → 16
console.log(square(9))   // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer:


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
function isEven(numm) {
  if(numm % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//

function sum(numArray) {
    let total = 0;

    for (const num of numArray) {
      total += num;
    }
    return total;
console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0
}

// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
function myForEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
myForEach([1, 2, 3], function(n) {
  console.log(n);
});
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer:a callback function is a function passed into another function so it can
//                be run later


// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.

function myMap(arr, cb) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
     let NewValue = cb(arr[i]);
      
     newArr.push(NewValue)

  }
  return newArr;
}


console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
function myFilter(Arr, callback) {
  let FilteredArray = [];
  for (let i = 0; i < Arr.length; i++) {
    let FiltValue = callback(Arr[i]) 
    if (callback(Arr[i])===true) {
        FilteredArray.push(Arr[i]);
    }

  }
    return FilteredArray;


}

console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer:
