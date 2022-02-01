const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet] // retornamos um array [] e usamos o argumento spread (...) para colocar cada elemento do Set em um index do array.
}


console.log(valoresUnicos(myArray))