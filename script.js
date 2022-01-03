const digitButtons = document.querySelectorAll('.digit-button button');
const operatorButtons = document.querySelectorAll('.operator-button button');
const digitScreen = document.querySelector('.digit-screen p')

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