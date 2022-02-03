// document.querySelectorAll('.primeira-classe .segunda-classe')
// /* [
//   <div class="primeira-classe segunda-classe">
//   <ul>
//     <li class="opcao">Opção 1</li>
//     <li class="opcao">Opção 2</li>
//     <li class="opcao">Opção 3</li>
//     <li class="opcao">Opção 4</li>
//   </ul>
// </div>
// ] */

// document.querySelectorAll('li .opcao')
// /* [
//   <li class="opcao">Opção 1</li>
//   <li class="opcao">Opção 2</li>
//   <li class="opcao">Opção 3</li>
//   <li class="opcao">Opção 4</li>
// ]*/


// const meuElemento = document.getElementById('meu-id');
//   meuElemento.classList.add("novo-estilo");
//   // Adiciona a classe "novo-estilo"
//   meuElemento.classList.remove("classe");
//   // Remove a classe "classe"
//   meuElemento.classList.toggle("dark-mode");
//   // Adiciona a classe "dark-mode" caso ela não faça parte da
//   // lista e remove ela caso faça

// document.getElementsByTagName("p").style.color = "blue"

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);