// let N = 34
// const myString = 'LIFE IS NOT A PROBLEM TO BE SOLVED'.split("");
// let newString = newArray(N)

// function newArray(n) {
//   let newArray = [];

//   for(i=0; i < N; i++) {
//     newArray.push(myString[i])
//   };
  
//   return newArray;
// }

// const reduceString = newString.reduce(function (prev, current){
//   return prev + current;
// })


// console.log(reduceString)

n = 7

if (n>=1 && n<=34) {

  const texto="Life is not a problem to be solved, but a reality to be experienced.";
  
  const parcial = texto.substr(0, n)
  
  const maiuscula = parcial.toUpperCase();
  
  console.log(maiuscula);
}