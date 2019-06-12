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

function accessElementInArray(food, x) {
  return food[x]
}

function destructivelyRemoveElementFromBeginningOfArray(food, x) {
  food.shift(x);
  return food
}

function removeElementFromBeginningOfArray(food) {
  return food.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(food) {
  return food.pop();
}