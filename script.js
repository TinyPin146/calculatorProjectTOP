const digitScreen = document.querySelector('.digit-screen p');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', handleButtons));
buttons.forEach(button => button.addEventListener('ontouch', handleButtons));
let currentString = [];

function returnNumOrChar(char) {
  const regex = /[0-9]/
  if (regex.test(char)) {
    return parseInt(char);
  } else return char;  
}

function handleButtons(e) {
  currentString.push(returnNumOrChar(e.currentTarget.innerText));
  currentString.join()
  digitScreen.textContent = currentString.join('');
  console.log(currentString)
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
    
    
