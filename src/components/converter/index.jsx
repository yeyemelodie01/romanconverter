import { useState } from 'react'
import '../../utils/styles/converter.css'


function RomanConverter(){
  const [inputValue, setInputValue] = useState('');
  let divParent = document.getElementById('divParent');

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
    if (dateArray.length > 1) {
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
    let romanConverted = '';
    if (romanNumeralMap[convertedNumber] !== undefined) {
      romanConverted+=romanNumeralMap[convertedNumber]
    } else {
      for (let i = 0; i < tens; i++) {
        romanConverted+=romanNumeralMap[10]
      }
    }

    romanConverted+=romanNumeralMap[units];

    return romanConverted;
  }

  function convertHundreds(numberToConvert) {
    const tens = numberToConvert % 100;
    const hund  = (numberToConvert - tens) / 100;
    const convertedNumber = hund * 100;
    let romanConverted = '';
    if (romanNumeralMap[convertedNumber] !== undefined) {
      romanConverted+=romanNumeralMap[convertedNumber]
    } else {
      for (let i = 0; i < hund; i++) {
        romanConverted+=romanNumeralMap[100]
      }
    }
    romanConverted += convertTens(tens);

    return romanConverted;
  }

  function convertThousands(numberToConvert) {
    const hund = numberToConvert % 1000;
    const thous  = (numberToConvert - hund) / 1000;
    const convertedNumber = thous * 1000;
    let romanConverted = '';
    if (romanNumeralMap[convertedNumber] !== undefined) {
      romanConverted+=romanNumeralMap[convertedNumber]
    } else {
      for (let i = 0; i < thous; i++) {
        romanConverted+=romanNumeralMap[1000]
      }
    }

    romanConverted += convertHundreds(hund);

    return romanConverted;
  }

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleConvertClick = () => {
    let number = splitDate(inputValue);
    let result = [];
    if (Array.isArray(number)) {
      for (let i = 0; i < number.length; i++) {
        result.push({
          'number': number[i],
          'convertedNumber': convertNumber(parseInt(number[i])),
        });
      }
    } else {
      result.push({
        'number': number,
        'convertedNumber': convertNumber(parseInt(number)),
      });
    }

    for ( let i=0; i < result.length; i++) {
      let divContentFlex = document.createElement('div');
      let divNormal = document.createElement('div');
      let divRoman = document.createElement('div');

      divContentFlex.setAttribute('class', 'contentFlex');
      divNormal.setAttribute('class', 'normalNumber');
      divRoman.setAttribute('class', 'romanNumber');

      divNormal.setAttribute('id', 'numInit_'+ i);
      divRoman.setAttribute('id', 'numResult_'+ i);

      divParent.appendChild(divContentFlex);
      divContentFlex.appendChild(divNormal);
      divContentFlex.appendChild(divRoman);

      document.getElementById('numInit_'+i).innerHTML = result[i].number;
      document.getElementById('numResult_'+i).innerHTML = result[i].convertedNumber;
    }
    // setTimeout(() => {
    //   document.location.reload();
    // }, 150000)

  };
  return (
    <>
      <div>
        <label form='number'/>
        <input
          id="number"
          className="inputStyle"
          type="text"
          placeholder="Ecrivez..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btnInput" onClick={handleConvertClick}>Convertir</button>
      </div>
      <ul className="listInput">
        <li>nombre: 0 - 9999</li>
        <li>date: JJ/MM/AAAA ou YYYY/MM/DD</li>
      </ul>
    </>
  )
}

export default RomanConverter;
