
import Storage from './storage.js'
import menu from '../src/assets/images/3-dots.png'

const toDoList = document.querySelector('.to-do-list-ul')

export const addToDo = (value) => {
  let arr
  if (Storage.getLocalStorage() == null) {
    arr = []
  } else {
    arr = Storage.getLocalStorage()
  }

  const length = arr.length + 1
  const toDo = {
    description: value,
    completed: false,
    index: length
  }
  arr.push(toDo)
  Storage.SetLocalStorage(arr)
  return arr
}

export const removeToDo = (id) => {
  let arr = Storage.getLocalStorage()
  arr = arr.filter((e) => e.index.toString() !== id.toString())
  arr.forEach((item, index) => {
    item.index = index + 1
  })
  Storage.SetLocalStorage(arr)
  return id
}

export const display = (output) => {
  const storeManage = Storage.getLocalStorage()
  output.innerHTML = null
  storeManage.forEach((item) => {
    output.innerHTML += `<li class="to-do-item">
      <div class="li-div">
      <input class="to-do-check" type="checkbox" id="check-${item.index}">
      <input  type='text' value="${item.description}" class="to-do-item-form" id=${item.index} readOnly></input>
      </div>
      <div class="img-div">
      <img src="${menu}" alt="3-dots"  id="${item.index}" class="li-img">
      </div>
      </li>`
  })

  const removeButton = document.querySelectorAll('.li-img')
  if (removeButton.length !== 0) {
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].addEventListener('click', (e) => {
        const { id } = e.target
        removeToDo(id)
        display(toDoList)
      })
    }
  }
}
