// // #### ESTRUTURA PROMISSE ####
// const myPromise = new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     resolve('Resolvida!');
//   }, 2000);
// });

// await myPromise
//   .then((result) => result + ' passando pelo then')
//   .then((result) => result + ' e agora acabou!')
//   .catch((err) => console.log(err.message))

//   // Após 2 segundos retornará o valor
//   // 'Resolvida! passando pelo then e agora acabou!'

// // #### Async/Await

// async function resolvePromise() {
//   const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       resolve('Resolvida!')
//     }, 3000);
//   });

//   const resolved = await myPromise
//     .then((result) => result + ' passando pelo then')
//     .then((result) => result + ' e agora acabou!')
//     .catch((err) => console.log(err.message));
  
//   return resolved;
// }

// // usando try...catch

// async function resolvePromise() {
//   const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//       resolve('Resolvida!')
//     }, 3000);
//   });

//   let result;

//     try {
//     result = await myPromise
//       .then((result) => result + ' passando pelo then')
//       .then((result) => result + ' e agora acabou!')
//     } catch(err) {
//       result = err.message;
//     }

//   return result;
// }

// ### FETCH ###

fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

// retorna uma Promise

fetch('https://endereco-api.com/', {
  method: 'GET',
  cache: 'no-cache'
})
  .then(response => response.json())
  .then(json => console.log(json))

  // retorna uma Promise

fetch('https://endereco-api.com/', {
  method: 'POST',
  cache: 'no-cache',
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))

  // retorna uma Promise