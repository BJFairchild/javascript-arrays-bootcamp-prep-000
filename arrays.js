var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(x) {
  return [x, ...food]
}

function destructivelyAddElementToBeginningOfArray(x) {
  food.unshift(x);
  return food
}

function addElementToEndOfArray(x) {
  return [...food, x];
}

function destructivelyAddElementToEndOfArray(x) {
  food.push(x);
  return food
}

