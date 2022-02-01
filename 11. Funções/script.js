// function exponencial(array, num = 1) {
// 	const result = []
	
// 	for(let i = 0; i < array.length; i++) {
// 	result.push(array[i] ** num);
// 	}
	
// 	return result;
// }

// console.log(exponencial([1, 2, 3, 4]))
// // [1, 2, 3, 4]

// console.log(exponencial([1, 2, 3, 4], 4))
// // [1, 8, 27, 64]


// function findMax() {
// 	let max = -Infinity;
	
// 	for(let i = 0; i < arguments.length; i++) {
// 		if(arguments[i] > max) {
// 			max = arguments[i]
// 		}
// 	}

// 	return max;
// }

// console.log(findMax(1, 2, 3, 6, 90, 1))
// // 90

// function logLetras(palavra) {
// 	for(letra of palavra) { //para cada index de uma string
// 		console.log(letra); // imprima um index
// 	}
// }

// const palavra = "abacaxi";

// logLetras(palavra)

// (function () {
// 	console.log(this);
// })()

// const pessoa = {
// 	nome: 'Miguel',
// };

// const animal = {
// 	nome: 'Murphy',
// };

// function getSomething() {
// 	console.log(this.nome);
// }

// getSomething.call(pessoa);

const myObj = {
	num1: 2,
	num2: 4
};

function soma(a, b) {
	console.log(this.num1 + this.num2 + a + b)
}

soma.apply(myObj, [1, 5]);
// 12