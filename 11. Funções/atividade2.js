const pessoa1 = {
  nome: "Claúdia",
  idade: 28
}

const pessoa2 = {
    nome: "João",
    idade: 34
}

const animal = {
    nome: "Jujuba",
    idade: 3
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(animal, 10))
console.log(calculaIdade.apply(animal, [10]))