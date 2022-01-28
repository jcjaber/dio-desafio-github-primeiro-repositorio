// ### STRINGS ###

// let nome = "João"
// let sobrenome = "Pedro"
// let concatenado = nome.concat(sobrenome)
// let exemplo = new String("blablabla") //Cria um objeto
// let vazio = "" //string vazia
// let letraOJoao = nome[1] //index das letras
// let concatenado2 = nome + " " + sobrenome
// let concatenado3 = nome + "\n" + sobrenome
// let concatenado4 = `${nome} ${sobrenome}`
// let concatenado5 = `${nome} 
// ${sobrenome}`
// let scape = "\""
// //split
// let frase = "Olá, tudo bem?"
// frase.split("")
// frase.split(" ") 
// frase.includes("tudo") //Contém a palavra tudo? true
// frase.startsWith("R") //Começa com a palavra R? false
// frase.endsWith("?") //Termina com "?" ? true
// frase.replace(",", "!") //substitui "," por "!"

// // ### NUMBERS ###

// let num = 100;
//   num + 3; 
//   num / 2;
//   num * 5;
// Math // Math é uma biblioteca js 
// typeof(Math) //Ela é um objeto 
// Math.PI //e possui vários métodos
// let fiveByThree = 5 / 3
// Math.floor(fiveByThree) //Arredonda pra baixo
// Math.ceil(fiveByThree) //Arredonda pra cima

// // ### BOOLEANS ###

// let validation = 3 === 0 //analisa se uma condição é verdadeira ou falsa
// !validation //retorna o contrário da expressão booleana

// // #### ARRAYS ####
// let array = [] // forma mais usada pra se criar um array
// // let array = new Array()
// array.push(3) // adiciona ao final do array
// array.push(2)
// array.pop() // tira o elemento no final do array
// array.push(2, 5)
// array.shift(2) // tira o primeiro elemento do array
// array.unshift(1) // coloca um elemento no começo do array
// for (let i = 0; i < array.length; i++) { // enquanto i for menor que o número de elementos dentro do array, dê um console log no array índice i e adicione i + 1
//   console.log(array[i]) 
// } // esse é um exemplo de funcionalidade da iterabilidade dos arrays

// /* array. existem vários métodos
// Exemplo: */
// array.includes(3) // O array contém o number 3?
// array.every(item => item === 5) // Todos os meus elementos dentro do array são iguais a 5?
// array.some(item => item === 5) // Algum dos meus elementos dentro do array é igual a 5?
// array.reverse() // inverte a ordem do array

// #### OBJECTS ####

let obj = {} // cria um objeto

obj.name = "julia" // adiciona uma chave chamada 'name' com o valor 'Júlia'
obj.age = "20"
Object.values(obj) // mostra os valores do objeto
Object.keys(obj) // mostra as chaves do objeto
let person = {
  name: 'Júlia',
  age: '20',
  adress: "Rua 2"
} // posso criar um objeto já com as chaves e valores
person.name // retorna o valor da chave "name" do objeto "person"
person["name"] // outro tipo de sintaxe para retornar valor de chave de um objeto
person["numberOfSiblings"] = 3 // Podemos usar essa mesma sintaxe para criar chaves e valores ao nosso objeto
//Veja aqui outra forma
let mom = "nameOfMom" // aqui estpa uma variável com um nome de chave
person[mom] = "Maria" // nessa sintaxe, em vez de criar uma chave chamada "mom", na verdade irá usar o valor contido na variável para criar a chave, no caso "nameOfMom"

console.log(person)
