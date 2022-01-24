//O QUE SÃO VETORES OU ARRAYS

//Como declarar um array
// let array = ['string', 1, true];
// console.log(array)

// pode guardar vários tipos de dados
let array = ['strings', 1, true, ['arrayA'], ['ArrayB'], ['ArrayC'], ['ArrayD']];
// console.log(array[3]);

// array.forEach(function(item, index){console.log(item, index)})
//  array.push('novo item')
//  array.pop();
// array.shift();
// array.unshift('novo item');
// console.log(array.indexOf(true));
// array.splice(0, 3)
// let novoArray = array.slice(0, 3)


let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: [" array"],
  interObject: {InnerObject: 'innerCore'}
};

var string = object.string;
var arrayInterno = object.array
var {string, boolean, interObject} = object;
console.log(string, boolean, interObject)