# 13. Debugging e Error Handling

# Tipos de Erro

## ECMAScript Error

- Erros que acontecem em tempo de execução.
- Composto por:
    - Mensagem
    - Nome
    - Linha
    - Call Stack

## DOMException

- Erros realacionados ao Document Object Model (DOM).

# Tratando erros

## Throw

- Cria um erro personalizável

```jsx
function verificaPalindromo(string) {
  if(!string) throw "string inválida"; 
  
  return string.split("").reverse().join("") === string; 
}

console.log(verificaPalindromo())
```

## Try/Catch

- Permite que manipulemos melhor o erro e suas propriedades, de maneira mais personalizada e organizada.

```jsx
function verificaPalindromo(string) {
  if(!string) throw "string inválida"; 
  
  return string.split("").reverse().join("") === string; 
}

function tryCatchExample(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    console.log(e)
  }
}

tryCatchExample() 
// Expected output: "Senha Inválida"
```

```jsx
function verificaPalindromo(string) {
  if(!string) throw "string inválida"; 
  
  return string.split("").reverse().join("") === string; 
}

function tryCatchExample(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    throw e
  }
}

tryCatchExample()
```

## Finally

- Uma instrução que será chamada independente se houver erro ou não.

```jsx
function verificaPalindromo(string) {
  if(!string) throw "string inválida"; 
  
  return string.split("").reverse().join("") === string; 
}

function tryCatchExample(string) {
  try {
    verificaPalindromo(string)
  }
  catch(e) {
    throw e
  }
  finally {
    console.log('A string enviada foi: ' + string);
  }
}

tryCatchExample('cat')
```

# Criando erros personalizados

## Objeto Error

```jsx
new Error(message, fileName, lineNumber)

//todos os parâmetros são opcionais

const MeuErro = new Error ('Mensagem inválida');

throw MeuErro
```

### nomeando erro:

```jsx
const meuErro = new Error('mensagem inválida');
meuErro.name = 'invalidMessage';

throw meuErro
```

## Links Auxiliares

### Object Error

[Error - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

### Instanceof

[instanceof - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)

### Typeof

[typeof - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)

### Try...Catch

[try...catch - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)