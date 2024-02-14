'use strict';

//Coding challenge #1-
/*Given an array of forcasted maximum temperatures, the thermometer displays a string with these tempeatures

Example [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]
*/

//1. Understanding the problem -
//- Array transformed to string ,seperated by ...
//- What is the X days? Answer: index+1
//2. Breaking into sub-problems -
//- Transform the array into string
//- Transform each element to string with °C
//- String needs to contain day(index+1)
//- Add ... between elements and start and end of strings
//- Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
    //str = str + that template literal
  }
  console.log('... ' + str);
};

printForecast(data1);
printForecast(data2);
