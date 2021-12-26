
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