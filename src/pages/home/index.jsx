import React, { useState } from 'react';

let romanNumeral = '';
const romanNumeralMap = {
  1000: 'M',
  900: 'CM',
  800: 'DCCC',
  700: 'DCC',
  600: 'DC',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  80: 'LXXX',
  70: 'LXX',
  60: 'LX',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  8: 'VIII',
  7: 'VII',
  6: 'VI',
  5: 'V',
  4: 'IV',
  3: 'III',
  2: 'II',
  1: 'I',
};

function splitDate(inputValue) {
  const dateArray = inputValue.split('/');
  if (dateArray.length === 3) {
    return dateArray;
  }

  return inputValue;
}

function convertNumber(numberToConvert) {
  if (numberToConvert < 100) {
    return convertTens(numberToConvert);
  } else if (numberToConvert < 1000) {
    return convertHundreds(numberToConvert);
  }

  return convertThousands(numberToConvert);
}


function convertTens(numberToConvert) {
  const units = numberToConvert % 10;
  const tens  = (numberToConvert - units) / 10;
  const convertedNumber = tens * 10;
  if (romanNumeralMap[convertedNumber] !== undefined) {
    romanNumeral+=romanNumeralMap[convertedNumber]
  } else {
    for (let i = 0; i < tens; i++) {
      romanNumeral+=romanNumeralMap[10]
    }
  }

  romanNumeral+=romanNumeralMap[units];
}

function convertHundreds(numberToConvert) {
  const tens = numberToConvert % 100;
  const hund  = (numberToConvert - tens) / 100;
  const convertedNumber = hund * 100;
  if (romanNumeralMap[convertedNumber] !== undefined) {
    romanNumeral+=romanNumeralMap[convertedNumber]
  } else {
    for (let i = 0; i < hund; i++) {
      romanNumeral+=romanNumeralMap[100]
    }
  }
  convertTens(tens);
}

function convertThousands(numberToConvert) {
  const hund = numberToConvert % 1000;
  const thous  = (numberToConvert - hund) / 1000;
  const convertedNumber = thous * 1000;
  if (romanNumeralMap[convertedNumber] !== undefined) {
    romanNumeral+=romanNumeralMap[convertedNumber]
  } else {
    for (let i = 0; i < thous; i++) {
      romanNumeral+=romanNumeralMap[1000]
    }
  }

  convertHundreds(hund);
}

const RomanNumeralConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleConvertClick = () => {


    let number = splitDate(inputValue);
    if (Array.isArray(number)) {
      number.map((element) => {
        return convertNumber(parseInt(element));
      })
    } else {
      convertNumber(parseInt(number));
    }
console.log(romanNumeral);
    setOutputValue('');
  };

  return (
      <div>
        <h1>Roman Numeral Converter</h1>
        <input
            type="text"
            placeholder="Enter a number"
            value={inputValue}
            onChange={handleInputChange}
        />
        <button onClick={handleConvertClick}>Convert</button>
        <p>{outputValue}</p>
      </div>
  );
};

export default RomanNumeralConverter;