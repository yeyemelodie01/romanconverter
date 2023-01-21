import React, { useState } from 'react';

const RomanNumeralConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleConvertClick = () => {
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

    let number = parseInt(inputValue);
    let romanNumeral = '';
    let diz = 0;
    let unit = 0;
    let cent = number % 1000;
    const thous  = (number - cent) / 1000;
    for (let i = 0; i < thous; i++) {
      romanNumeral+=romanNumeralMap[1000]
    }

    if (cent > 0) {
      diz = cent % 100;
      cent = (cent - diz) / 100;
      const convertToCent = cent * 100;
      if (romanNumeralMap[convertToCent] !== undefined) {
        romanNumeral+=romanNumeralMap[convertToCent]
      } else {
        for (let i = 0; i < cent; i++) {
          romanNumeral += romanNumeralMap[100]
        }
      }
    }

    if (diz > 0) {
      unit = diz % 10;
      diz = (diz - unit) / 10;
      const convertToDiz = diz * 10;
      if (romanNumeralMap[convertToDiz] !== undefined) {
        romanNumeral+=romanNumeralMap[convertToDiz]
      } else {
        for (let i = 0; i < cent; i++) {
          romanNumeral += romanNumeralMap[10]
        }
      }
    }

    if (unit > 0) {
      if (romanNumeralMap[unit] !== undefined) {
        romanNumeral+=romanNumeralMap[unit]
      }
    }

    setOutputValue(romanNumeral);
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