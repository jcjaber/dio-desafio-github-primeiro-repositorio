window.addEventListener('load', () => {

  //adiciona ou subtrai contador
  var currentNumberWrapper = document.getElementById('currentNumber')
  var currentNumber = 0;

  function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 10) {
      currentNumber = 9;
    }
    if(currentNumber >= 0) {
      currentNumberWrapper.style.color = "black";
    }
  }

  function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber <= -10) {
      currentNumber = -9;
    }
    if(currentNumber < 0) {
      currentNumberWrapper.style.color = "red";
    } 
    
  }

  //eventos de cliques para os botões '+' e '-'
  const subtractButton = document.getElementById('subtract')
  const sumButton = document.getElementById('sum')
  
  subtractButton.addEventListener('click', decrement);
  sumButton.addEventListener('click', increment);

})

