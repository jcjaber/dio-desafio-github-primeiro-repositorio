# 16. Map, Filter e Reduce

# MAP

## O que é?

- Quando um *array* passa por uma operação e retorna outro *array*;
- Cria um novo *array*;
- Não modifica o *array* original;
- Realiza as operações em ordem

## Sintaxe

```jsx
array.map(callback, thisArg)
```

```jsx
callback(item, index, array)
```

- **Callback**: função a ser executada em cada elemento;
- **thisArg(opcional)**: valor de *this* dentro da função de *callback*.

## Map vs forEach

```jsx
// usando map

const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); // expected output: [ 2, 4, 6, 8, 10 ]

// usando forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // expected output: undefined
```

- valor de retorno
- considere se o *array* de retorno será necessário

# FILTER

## O que é?

- filtra o *array* a partir de determinada condição;
- cria um novo *array*;
- não modifica o *array* original;

## Sintaxe

```jsx
array.filter(callbak, thisArg);
```

- **Callback**: função a ser executada em cada elemento
- **thisArg(opcional)**: valor de *this* dentro da função *callback*

## Exemplo

```jsx
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã'));

// [ 'maçã fuji', 'maçã verde' ]
```

# REDUCE

## O que é

- Executa uma função em todos os elementos do array, retornando um valor único;

## Sintaxe

```jsx
array.reduce(callbackFn, initialValue)
```

- **Callback:** função a ser executada a partir do acumulador;
- **initialValue:** valor sobre o qual o retorno final irá atuar;

```jsx
const array = []

const callbackFn = function(accumulator, currentValue, index, array){
  //do something
}

array.reduce(callbackFn, initialValue)
```

- Accumu;ator/prevValue: acumulador de todas as chamadas de callbackFn;
- currentValue: elemento atual sendo acessado pela função;

## **Atividades**

### **Map**

- Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

### **Filter**

- Filtre e retorne todos os números pares de um array.

### **Reduce**

1. Some todos os números de um array
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.