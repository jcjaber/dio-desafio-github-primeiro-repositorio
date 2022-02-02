class ContaBancaria {
  constructor(agencia, numero, tipo) {// constrói parâmetros para propriedades da classe
    this.agencia = agencia; // A propriedade agencia da classe ContaBancaria será o parâmetro agencia
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; // sempre que tivermos um getter ou um setter colocamos um '_' na frente pra que a nossa função get e set possa ter o nome 'saldo'
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor){
    this._saldo = valor 
  }

  sacar(valor){
    if(valor > this._saldo) {
      return 'saldo indisponível'
    }

    this._saldo = this._saldo - valor;
    
    return this._saldo
  }

  depositar(valor){
    this._saldo = this._saldo + valor;

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'poupança';
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'universitária';
  }

  sacar(valor){
    if(valor > this._saldo) {
      return 'saldo indisponível'
    };
    
    if(valor > 500) {
      return 'Limite para saque ultrapassado'
    };

    this._saldo = this._saldo - valor;
    
    return this._saldo
  }
}