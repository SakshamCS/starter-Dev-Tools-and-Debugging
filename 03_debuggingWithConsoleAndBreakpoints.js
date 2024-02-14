'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) Fix the bug
    // value: Number(prompt('Degree celsius:')),
    //prompt function always returns a string
    value: 10,
  };

  // B) Find the bug
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  //creating a bug here to test
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    // debugger; //That's the debugger statement in JS
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(`Max is ${max}, Min is ${min}`);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 53, 5], [40, 1]);
console.log(amplitudeBug);
