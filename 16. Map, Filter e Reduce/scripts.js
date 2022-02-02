// // #### MAP ####

// array.map(callback, thisArg)
// callback(item, index, array)

// ### MAPS VS. FOREACH ###

// usando map

// const array = [1, 2, 3, 4, 5];

// array.map((item) => item * 2);

// // usando forEach

// const array = [1, 2, 3, 4, 5];

// array.forEach((item) => item * 2);

// #### FILTER ####


// array.filter(callbak, thisArg);


// const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

// frutas.filter((fruta) => fruta.includes('maçã'));

// #### REDUCE ####
const array = []

const callbackFn = function(accumulator, currentValue, index, array){
  //do something
}

array.reduce(callbackFn, initialValue)