iniciaContador();

function iniciaContador () {
  alert("### COMPARADOR DE NÚMEROS###\n Bem-vindo ao comparador de números. Me diga dois números e te direi se são iguais e se a soma de ambos é maior ou menor que 10 e maior ou menor que 20.");
  const n1 = Number(prompt('Me diga o primeiro número:'));
  const n2 = Number(prompt('Agora, me diga o segundo número:'));

  alert(comparaNumeros(n1, n2));
};

function comparaNumeros(num1, num2) {

  if(!num1 || !num2 ) { alert('###### Erro ###### \nAceito apenas números e diferentes de 0. \nPor favor, insira números válidos!'); iniciaContador()}
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`
};

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
      saoIguais = 'não '
    }

    return `Os números ${num1} e ${num2} ${saoIguais}são iguais.`
};

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  
  let resultado10 = 'menor';
  let resultado20 = 'menor';
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if(compara10) {
    resultado10 = 'maior';
  };

  if(compara20) {
    resultado20 = 'maior';
  };

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
