function filterPairs(array) {
  return array.filter(callBack);
};

function callBack(num) {
  return num % 2 === 0;
};

const arrayExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterPairs(arrayExample));