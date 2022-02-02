const dois = {
  value: 2,
}

const tres = {
  value: 3,
}

function mapThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const multiplicandos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('This -> Dois ', mapThis(multiplicandos, dois));
console.log('This -> Três ', mapThis(multiplicandos, tres));