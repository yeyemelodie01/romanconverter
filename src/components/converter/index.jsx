import { useState } from 'react'
import '../../utils/styles/converter.css'
import { useForm } from 'react-hook-form'

function RomanConverter(){
  const [inputValue, setInputValue] = useState('');
  const { register, handleSubmit } = useForm();

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

    let divParent = document.getElementById('divParent');
    divParent.innerHTML = '';
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
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleConvertClick)}>
        <label form='number'/>
        <input
          id="number"
          className="inputStyle"
          type="text"
          placeholder="Ecrivez..."
          {...register("text", {
              pattern:{
                value: /^(((((1[26]|2[048])00)|[12]\d([2468][048]|[13579][26]|0[48]))-((((0[13578]|1[02])-(0[1-9]|[12]\d|3[01]))|((0[469]|11)-(0[1-9]|[12]\d|30)))|(02-(0[1-9]|[12]\d))))|((([12]\d([02468][1235679]|[13579][01345789]))|((1[1345789]|2[1235679])00))-((((0[13578]|1[02])-(0[1-9]|[12]\d|3[01]))|((0[469]|11)-(0[1-9]|[12]\d|30)))|(02-(0[1-9]|1\d|2[0-8])))))$/,
                message: "Nombre ou Date non valide",
              }
          }
          )}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btnInput" onClick={handleConvertClick}>Convertir</button>
      </form>
      <ul className="listInput">
        <li>Nombre: 0 - 9999.</li>
        <li>Date: JJ/MM/AAAA ou YYYY/MM/DD.</li>
      </ul>
    </>
  )
}

export default RomanConverter;
