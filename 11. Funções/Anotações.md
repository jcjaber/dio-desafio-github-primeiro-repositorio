# 11. Funções

# Tipos de Função

## Estrutura

```jsx
function nome(parametros) {
	//instruções
return; //valor de retorno
}
```

- variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
- quando invocamos o “return”, a função para ser executada.

## Função Anônima

Funções que representam expressões

```jsx
const soma = function (a, b) {
return a + b;
}

soma(1, 2) // 3
soma(5, 4) // 9
```

## Função Autoinvocável

IFE (Immediately Invoked Function Expression)

```jsx
(
	function() {
		let name = "Digital Innovation One"
		return name;
	}
)();
```

Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

outros exemplos:

```jsx
(
	function(a + b) {
		return a + b;
	}
)(1,2);
```

```jsx
const soma3 = (
	function(a + b) {
		return a + b;
	}
)(1,2);
```

## Callbacks

Uma função passada como argumento para outra função.

```jsx
const calc = function(operacao, num1, num2){
	return operacao(num1, num2);
}
const soma = function(num1, num2) {
	return num1 + num2;
}
const sub = function(num1, num2) {
	return num1 - num2;
}
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); //-1
console.log(resultSoma); //3
```

Utilizando callbacks, você tem maior controle da ordem de chamadas.

# Parâmetros

### Valores Padrão

```jsx
function exponencial(array, num = 1) {
	const result = []
	
	for(let i = 0; i < array.length; i++) {
	result.push(array[i] ** num);
	}
	
	return result;
}

exponencial([1, 2, 3, 4])
// [ 1, 2, 3, 4 ]

exponencial([1, 2, 3, 4], 4)
// [ 1, 16, 81, 256 ]
```

## Objeto “arguments”

O objeto `arguments` é uma variável local disponível dentro de todas as funções. Você pode referenciar os argumentos de uma função dentro da função usando o objeto `arguments`. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. Fonte:

[Arguments object - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)

```jsx
function findMax() {
	let max = -Infinity; // garantir que podemos mandar números positivos e negativos
	
	for(let i = 0; i < arguments.length; i++) {
		if(arguments[i] > max) {
			max = arguments[i]
		}
	}

	return max;
}

findmax(1, 2, 3, 6, 90, 1) 
// 90
```

# Arrays

- **Spread**: um forma de lidar separadamente com elementos.

```jsx
function sum(x, y, z) {
	return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers)); //spread ...
```

O que era parte de um array se torna um elemento independente

- Rest: combina os argumentos em um array

```jsx
function confereTamanho(...args) {
	console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) //3
```

O que era um elemento independente se torna parte de um array

## Objetos

### Object Destructuring

```jsx
const user = {
	id: 42,
	displayName: 'jdoe',
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	}
};

function userId({id}) {
	return id;
}

function getFullName({FullName: {firstName: first, lastName: last}}) {
	return `${first} ${last}`;
}

userId(user)

getFullName(user)

```

Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

# If/Else

```jsx
function numeroPositivo(num) {
	let resultado;

	if(num < 0) { //condição
		resultado = false; //Declaração 1: Ocorre caso a condição seja verdadeira
	} else {
		resultado = true; //Declaração 2: Ocorre caso a condição seja falsa
	}

	return resultado;
}

numeroPositivo(2)
//true

numeroPositivo(-3)
//false

```

```jsx
function numeroPositivo(num) {
	let resultado;

	const ehNegativo = num < 0

	if(ehNegativo) { 
		resultado = false; 
	} else {
		resultado = true; 
	}

	return resultado;
}
```

```jsx
function numeroPositivo(num) {
	const ehNegativo = num < 0

	if(ehNegativo) { 
		return false; 
	} 

	return true;
}
```

```jsx
function numeroPositivo(num) {
	const ehNegativo = num < 0
	const maiorQueDez = num > 10

	if(ehNegativo) { 
		return "Esse número é negativo!"; 
	} else if (!ehNegativo && maiorQueDez) {
		return "Esse número é positivo e maior que 10!"
	}

	return "Esse númeero é positivo!";
}
```

# Switch/Case

```jsx
function getAnimal(id) { 
	switch(id) {
		case 1:
			return "cão";
		case 2:
			return "gato";
		case 3:
			return "pássaro";
		default:
			return "peixe";
	}
}

getAnimal(1) //Cão
getAnimal(4) //peixe
getAnimal("peixe") //peixe
```

- Equivale a uma comparação de tipo e valor(===)
- Sempre precisa de um valor “default”
- ideal para quando se precisa comparar muitos valores;

# For

loop dentro de elementos interáveis (arrays, strings)

```jsx
function multiplicaPorDois(arr) {
	let multiplicados = [];

	for(let i = 0; i < arr.length; i++) {
		multiplicados.push(arr[i] * 2);
	}

	return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicadoPorDois(meusNumeros);
// [ 4, 66, 912, 712, 80 ]
```

## For in

Loop entre propriedades enumeráveis de um objeto.

```jsx
function forInExemplo(obj) {
	for(prop in obj) { //o parâmetro nomeado 'prop' vai ser entendido como cada uma das propriedades.
		console.log(prop); //se deixarmos como `console.log(obj[prop])` será imprimido no console os valores das propriedades;
	}
}

const meuObjeto = {
	nome: "João",
	idade: "20",
	cidade: "Salvador"
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade
```

## For of

- Loop entre estruturas  iteráveis(arrays, strings)

```jsx
function logLetras(palavra) {
	for(letra of palavra) { //para cada index de uma string
		console.log(letra); // imprima um index
	}
}

const palavra = "abacaxi";

logLetras(palavra)
//a
//b
//a
//c
//a
//x
//i
```

```jsx
function logNumeros(nums){
	for(num of nums) { //para cada index do array
		console.log(num); //imprima um index
	}
}

const nums = [30, 20, 233, 2];

logNumeros(nums)
```

## While

- executa instruções até que a condição se torne falsa.

```jsx
function exemploWhile() {
	let num = 0

	while(num <= 5){
		console.log(num);
		num++;
	}
}

exemploWhile()
// 0
// 1
// ...
// 5
```

## Do...while

- Executa instruções até que a condição se torna falsa.
- Porém a primeira execução sempre ocorre.

```jsx
function exemploDoWhile() {
	let num = 0;

	do {
		console.log(num);
		num++;
	} while(num <= 5)
}

exemploDoWhile()
//6
```

# THIS

## O que é?

- A palavra reservada *this* é uma referência de contexto.
- No exemplo, *this* refere-se ao objeto pessoa:

```jsx
const pessoa ={
	firstName: "André",
	lastName: "Soares",
	id: 1,
	fullName: function() { // sempre que uma função está dentro de um objeto, nós a chamamos de método 
		return this.firstName + " " + this.lastName; // sempre que usamos this dentro de um método, ele vai se referir ao objeto pai do mesmo (no caso, "pessoa")
	},
	getId: function() { 
		return this.id;
	}
};

pessoa.fullName();
// "André Soares"

pessoa.getId();
// 1
```

| contexto | referência |
| --- | --- |
| Em um objeto (método) | Próprio objeto dono do método |
| sozinha | Objeto global (em navegadores, window) |
| Função | Objeto global |
|  Evento | Elemento que recebeu o evento |

## Manipulando seu valor

### Call

- Quando usamos o método call, queremos dizer o objeto pelo qual this se refira.

```jsx
const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Murphy',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.call(pessoa);

```

- É possível passar parâmetros para essa função separando-os por vírgulas:

```jsx
const myObj = {
	num1: 2,
	num2: 4
};

function soma(a, b) {
	console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 5);
// 12
```

### Apply

- funciona como o Call, com uma pequena diferença.

```jsx
const pessoa = {
	nome: 'Miguel',
};

const animal = {
	nome: 'Godi',
};

function getSomething() {
	console.log(this.nome);
}

getSomething.apply(pessoa);
```

- É possível passar parâmetros para essa função dentro de um array:

```jsx
const myObj = {
	num1: 2,
	num2: 4
};

function soma(a, b) {
	console.log(this.num1 + this.num2 + a + b)
}

soma.apply(myObj, [1, 5]);
// 12
```

### Bind

- Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

```jsx
const retornaNome = function () {
	return this.nome;
}

let bruno = retornaNomes.bind({ nome: 'Bruno' })

bruno()
```

# Arrow Function

[Arrow functions - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Sintaxe

- Uma função anônima comum:

```jsx
const helloWorld = function () {
	return "Hello World";
}
```

- Uma Arrow Function:

```jsx
const helloWorld = () => {
	return "Hello World";
}
```

- Se há apenas uma linha, pode-se dispensar os colchetes e o *return*:

```jsx
const soma = (a, b) => a + b;

soma(4, 6);
// 10
```

- Se houver apenas um parâmetro, pode-se dispensar os parênteses do mesmo:

```jsx
const soma = a => a;

soma(4);
// 4
```

- *Arrow Function* **NÃO** faz *hoisting*

## Outras restrições

- “this” sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o objeto “arguments”;
- O construtor (ex: new MeuObjeto()) também não pode ser utilizado.