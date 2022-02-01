function validaArray(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError('Parâmetros inválidos, por favor insira os parâmetros');

    if (typeof arr !== 'object') throw new TypeError('O array não é um objeto, tente novamente.');

    if (typeof num !== 'number') throw new TypeError('O número não é válido, favor inserir novamente.');

    if (arr.length !== num) throw new RangeError('Tamanho inválido! O tamanho do array não é compátivel com o número inserido');

    return arr
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este é um ReferenceError!");
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log("Este é um TypeError!");
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log("Este é um RangeError!");
      console.log(e.message)
    } else {
      console.log("Ocorreu um erro inesperado: " + e)
    }
  }
}

console.log(validaArray([10, 2], 2))