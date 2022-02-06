const digitScreenCurrentNum = document.querySelector('.digit-screen .current-number');
const digitScreenCurrentEquation = document.querySelector('.digit-screen .current-equation');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', handleButtons));
buttons.forEach(button => button.addEventListener('ontouch', handleButtons));
let currentNum = [];
let currentNumsAndOperators = [];

function handleInputButtons(char) {
  currentNum.push(char);
  digitScreenCurrentNum.textContent = currentNum.join('');
  console.log(currentNum)
}

function afterEqualsReset() {
  currentNum = [];
  digitScreenCurrentNum.textContent = currentNum.join('');
  digitScreenCurrentEquation.textContent = currentNumsAndOperators.join(' ')
  console.log(currentNumsAndOperators)
}

function handleOperatorButtons(char) {
  currentNumsAndOperators.push(parseFloat(currentNum.join('')));
  currentNum = [];
  currentNumsAndOperators.push(char);

  if (currentNumsAndOperators.length >= 3) {
    switch (currentNumsAndOperators[1]) {
      case '+':
        currentNumsAndOperators[0] = operations.add(currentNumsAndOperators[0], currentNumsAndOperators[2]);
        currentNumsAndOperators.splice(1, 2);
        break;
      case '-':
        currentNumsAndOperators[0] = operations.subtract(currentNumsAndOperators[0], currentNumsAndOperators[2]);
        currentNumsAndOperators.splice(1, 2);
        break;
      case '*':
        currentNumsAndOperators[0] = operations.multiply(currentNumsAndOperators[0], currentNumsAndOperators[2]);
        currentNumsAndOperators.splice(1, 2);
        break;
      case '/':
        currentNumsAndOperators[0] = operations.divide(currentNumsAndOperators[0], currentNumsAndOperators[2]);
        currentNumsAndOperators.splice(1, 2);
        break;
      default:
        currentNumsAndOperators.splice(1,1);
        break;
    }
  }

  digitScreenCurrentEquation.textContent = currentNumsAndOperators.join(' ')
  console.log(currentNumsAndOperators)
}

function handleClearButton() {
  if(!currentNum) {
    currentNumsAndOperators.pop(currentNumsAndOperators[1])
  } else {
    currentNum.pop();
  }; 
  digitScreenCurrentNum.textContent = currentNum.join('');
  digitScreenCurrentEquation.textContent = currentNumsAndOperators.join(' ')
}

function handleClearAllButton() {
  currentNum = [];
  digitScreenCurrentNum.textContent = currentNum.join('');
  currentNumsAndOperators = [];
  digitScreenCurrentEquation.textContent = currentNum.join('');
}

function handleEqualsButton() {
  // let myArray = currentNumsAndOperators.map()
  if (currentNumsAndOperators.length !== 2) return;

  switch (currentNumsAndOperators[1]) {
    case '+':
      currentNumsAndOperators.push(parseFloat(currentNum.join('')));  
      currentNumsAndOperators[0] = operations.add(currentNumsAndOperators[0], currentNumsAndOperators[2]);
      currentNumsAndOperators.splice(1, 2);
      afterEqualsReset();
      break;
    case '-':
      currentNumsAndOperators.push(parseFloat(currentNum.join('')));
      currentNumsAndOperators[0] = operations.subtract(currentNumsAndOperators[0], currentNumsAndOperators[2]);
      currentNumsAndOperators.splice(1, 2);
      afterEqualsReset();
      break;
    case '*':
      currentNumsAndOperators.push(parseFloat(currentNum.join('')));
      currentNumsAndOperators[0] = operations.multiply(currentNumsAndOperators[0], currentNumsAndOperators[2]);
      currentNumsAndOperators.splice(1, 2);
      afterEqualsReset();
      break;
    case '/':
      currentNumsAndOperators.push(parseFloat(currentNum.join('')));
      currentNumsAndOperators[0] = operations.divide(currentNumsAndOperators[0], currentNumsAndOperators[2]);
      currentNumsAndOperators.splice(1, 2);
      afterEqualsReset();
      break;
    default:
        console.log('Wut')
      break;
  }
}

const operations = {

  add: function() {
      return arguments[0] + arguments[1];
    },

  subtract: function() {
    return arguments[0] - arguments[1];
    },
    
  multiply: function() {
      let mltplyResult = 1;
      let mltplyArray = arguments;
      for (let i = 0; i < mltplyArray.length; i++) {
        let nextItem = mltplyArray[i];
        mltplyResult *= nextItem;
      }
      return mltplyResult;
    },

  divide: function() {
    let divideResult = arguments[0];
    let divideArray = arguments;
    for (let i = 1; i < divideArray.length; i++) {
      let nextItem = divideArray[i];
      divideResult /= nextItem;
    }
    return divideResult;
  },
}

function handleButtons(e) {
  switch (e.currentTarget.innerText) {
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '.':
      handleInputButtons(e.currentTarget.innerText)
      break;
    case '+': case '-': case '*': case '/':
      handleOperatorButtons(e.currentTarget.innerText);
      break;
    case 'C':
      handleClearButton();
      break;
    case 'CA':
      handleClearAllButton();
      break;
    case '=':
       handleEqualsButton();
       break;    
    default:
      console.log('wut')
  }
}