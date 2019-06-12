var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(food, x) {
  return [x, ...food]
}

function destructivelyAddElementToBeginningOfArray(food, x) {
  food.unshift(x);
  return food
}

function addElementToEndOfArray(food, x) {
  return [...food, x];
}

function destructivelyAddElementToEndOfArray(food, x) {
  food.push(x);
  return food
}

