// Please do not use methods. You need to do it with loops.
// Make sure you  try each problem in 2-3 different ways and also try to understand time complexity( time taken to execute) as well.

// Difficulty Level : Easy

// 1.Create a function that takes two numbers as arguments and returns their sum.
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 4));
// -----------------------------------------------------------------------------------------------------------

// 2.Write a function that 5takes an integer minutes and converts it to seconds.
function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(5));

// -----------------------------------------------------------------------------------------------------------

// 3.Create a function that takes a number as an argument, increments the number by +1
//  and returns the result.
function increments(num) {
  return num + 1;
}
console.log(increments(6));

// -----------------------------------------------------------------------------------------------------------

// 4.Create a function that takes the age in years and returns the age in days.

// -----------------------------------------------------------------------------------------------------------

// 5. Create a function that takes voltage and current and returns the calculated power.

function calculatePower(voltage, current) {
  return voltage * current;
}
console.log("power:", calculatePower(18, 6));

// ------------------------------------------------------------------------------------------------------------

// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.
function add(a) {
  //   return "somthing" + "" + a;
  return "somthing " + a;
}
console.log(add(" is fishy"));

// --------------------------------------------------------------------------------------------------------------

// 7.Create a function that takes two arguments. Both arguments are integers, a and b.
//  Return true if one of them is 10 or if their sum is 10.

// function name(a,b) {
//     return a+b
// }console.log(10);

function hello(a, b) {
  return a === 10 || b === 10 || a + b === 10;
}
console.log(hello(10, 5));

//   ----------------------------------------------------------------------------------------------------------------

// 8.Create a function that takes two strings as arguments and returns either true or false
// depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function checkString(str1, str2) {
  return str1.length === str2.length;
}
console.log(checkString("car", "van"));

// ----------------------------------------------------------------------------------------------------------------------

// 9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
function greeting(name) {
  return `hai ${name} `;
}
console.log(greeting("darling"));

// -------------------------------------------------------------------------------------------------------------------------
// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers
//  formatted as a phone number (e.g. (555) 555-5555).
function phoneNumber(num) {
    if(num.length>10){
        return `give only 10 members`
    }
    return `(${num[0]}${num[1]}${num[2]})${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`
}console.log(phoneNumber([5,5,5,5,5,5,5,5,5,]));

