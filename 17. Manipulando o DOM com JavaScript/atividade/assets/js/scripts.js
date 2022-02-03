const title = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode'

function changeMode() {
  changeClasses();
  changeText()
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  title.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = 'Light Mode'
  const darkMode = 'Dark Mode'

  if(body.classList.contains(darkModeClass)) {
    title.innerHTML = darkMode + ' ON' ;
    button.innerHTML = lightMode;
    return;
  };

  title.innerHTML = lightMode + ' ON';
  button.innerHTML = darkMode;
}

button.addEventListener('click', changeMode)