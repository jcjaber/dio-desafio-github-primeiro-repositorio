window.addEventListener("load", () => {

  
  const createTask = () => {
    
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const inputValue = input.value

    const task = document.createElement('li')
    task.classList.add('items')
    const content = `<input type="checkbox" check-box-input>${inputValue}</input>`

    task.innerHTML = content

    list.appendChild(task)
    input.value = " "
  }
  
  const newTask = document.querySelector('[data-form-button]')

  newTask.addEventListener('click', createTask)
})
  
  