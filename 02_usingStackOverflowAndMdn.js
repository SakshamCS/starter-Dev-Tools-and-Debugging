'use strict';

//PROBLEM 1-
//We work for a company building a smart home thermometer. Our recent tasks is this: "Given an array of temperatures in one day, calculate the temperature amplitude. Keep in mind that sometimes there might an sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understanding the problem -
// - What is temperature amplitude? Answer: Difference between lowest and highest temp.
// - How to compute the max and min temperatures?
// - What is a sensor error? And what to do?

//2. Breaking into sub-problems -
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(`Max is ${max}, Min is ${min}`);
  return max - min;
};

const amplitude = calcTemp(temperatures);
console.log(amplitude);

//PROBLEM 2-
//Function should now recieve two arrays of temperatures

//1. Understanding the problem -
//With Two arrays should we implement the same functionality twice? No just merge the two arrays

//2. Breaking into sub-problems -
//Merge two arrays

const calcTempNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(`Max is ${max}, Min is ${min}`);
  return max - min;
};

const amplitudeNew = calcTempNew(temperatures, [40, -12]);
console.log(amplitudeNew);
