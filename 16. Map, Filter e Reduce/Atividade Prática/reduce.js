// ### SUM NUMBERS ###
// Autor: José Cássio Jaber

function sumNumbers(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev });
    console.log({ current })
    return prev + current;
  })
};

const numbers = [1, 2, 3, 4, 5];

console.log('A soma dos números é: ', sumNumbers(numbers));

// ### SHOP LIST CALCULATOR ###

const shopList = [
  {
    name: 'Sabonete',
    price: 3
  },
  {
    name: 'Nuggets',
    price: 15
  },
  {
    name: 'Chocolate',
    price: 7
  },
  {
    name: 'Vinho',
    price: 40
  }
];

const accountBalance = 100;

function computeBalance(balance, list) {
  return list.reduce(function(prev, current, index){
    console.log('Item ', index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.price; 
  }, balance )
}

console.log('O saldo disponível após a compra é: ', computeBalance(accountBalance, shopList))
