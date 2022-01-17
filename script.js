const digitButtons = document.querySelectorAll('.digit-button button');
digitButtons.forEach(button => button.addEventListener('click', handleDigitButtons))

const operatorButtons = document.querySelectorAll('.operator-button button');
operatorButtons.forEach(button => button.addEventListener('click', handleOperatorButtons))

const digitScreen = document.querySelector('.digit-screen p')

let arrOfDigits = [];
let currentNum = null; 
let arrOfNumbers = [];

const add = function() {
    return arguments[0] + arguments[1];
  };

  const subtract = function() {
	return arguments[0] - arguments[1];
};

const multiply = function() {
    let mltplyResult = 1;
    let mltplyArray = arguments;
    for (let i = 0; i < mltplyArray.length; i++) {
      let nextItem = mltplyArray[i];
      mltplyResult *= nextItem;
    }
    return mltplyResult;
  };

  function handleDigitButtons(e) {
    arrOfDigits.push(Number(e.currentTarget.textContent));

    currentNum = Number(arrOfDigits.join(''));
    digitScreen.textContent = currentNum;
  }

  function handleOperatorButtons(e) {
    console.log(e.currentTarget.textContent);

    let result = 0;

    switch (e.currentTarget.textContent) {
      case '+': 
        console.log('its a +');
        arrOfNumbers.push(currentNum);
        arrOfDigits = [];
        currentNum = null;
        digitScreen.textContent = currentNum;    

        add(arrOfNumbers);

        break;
      case '-': 
        console.log('its a -');
        break;
      case '*': 
        console.log('its a *');
        break;
      case '/': 
        console.log('its a /');
        break;
      case 'CA': 
        console.log('its CA');
        break;
      case 'C': 
        console.log('its a C');
        break;
      case '=': 
        console.log('its a =');
        digitScreen.textContent = result;

        break;
      default:
        console.log('How did you fuck this up?');
    }
  };
