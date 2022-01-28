// ### PALINDROMO ###
// Autor: José Cássio Jaber

//solução 1
function verificaPalindromo(string) {
  if(!string) return "string inexistente"; // return: sai da função
  
  return string.split("").reverse().join("") === string; // 1- o método split com o parâmetro "" irá separar cada letra em elementos de um array; 2- o método reverse irá inverter a ordem dos elementos do array, de traz pra frente; 3- o método join com o parâmetro ""
}

//solução 2

function verificaPalindromo2(string) {
  if(!string) return "string inexistente";

  for(let i=0; i < string.length/2; i++){
    if(string[i] !== string[string.length -1 -i]){
      return false
    }
  }

  return true;
}

console.log(verificaPalindromo2("gato"))

