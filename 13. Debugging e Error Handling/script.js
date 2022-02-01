// // #### THROW ####

// function verificaPalindromo(string) {
//   if(!string) throw "string inválida"; 
  
//   return string.split("").reverse().join("") === string; 
// }

// console.log(verificaPalindromo())

// #### TRY CATCH ####

// function verificaPalindromo(string) {
//   if(!string) throw "string inválida"; 
  
//   return string.split("").reverse().join("") === string; 
// }

// function tryCatchExample(string) {
//   try {
//     verificaPalindromo(string)
//   }
//   catch(e) {
//     throw e
//   }
// }

// tryCatchExample()

// // #### FINALLY ####

// function verificaPalindromo(string) {
//   if(!string) throw "string inválida"; 
  
//   return string.split("").reverse().join("") === string; 
// }

// function tryCatchExample(string) {
//   try {
//     verificaPalindromo(string)
//   }
//   catch(e) {
//     throw e
//   }
//   finally {
//     console.log('A string enviada foi: ' + string);
//   }
// }

// tryCatchExample('cat')

// // #### OBJETO ERROR ####

// //new Error(message, fileName, lineNumber)

// //todos os parâmetros são opcionais

// const MeuErro = new Error ('Mensagem inválida');

// throw MeuErro

// NOMEANDO ERRO

const meuErro = new Error('mensagem inválida');
meuErro.name = 'invalidMessage';

throw meuErro