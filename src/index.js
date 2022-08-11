// eslint-disable-next-line no-unused-vars
import _, { update } from 'lodash'
import './style.css'
import arrow from '../src/assets/images/add-item-img.png'
import refresh from '../src/assets/images/refresh.png'
import { display, addToDo } from './CRUD.js'

document.querySelector('.refresh').src = `${refresh}`
document.querySelector('.arrow').src = `${arrow}`

const form = document.querySelector('.form')
const input = document.querySelector('.add-item')
const arrowImg = document.querySelector('.arrow')

window.addEventListener('load', () => {
  const toDoList = document.querySelector('.to-do-list-ul')
  display(toDoList)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const toDoList = document.querySelector('.to-do-list-ul')
  const inputVal = input.value
  addToDo(inputVal)
  input.value = ''
  display(toDoList)
})

arrowImg.addEventListener('click', (e) => {
  e.preventDefault()
  const toDoList = document.querySelector('.to-do-list-ul')
  const inputVal = input.value
  addToDo(inputVal)
  input.value = ''
  display(toDoList)
})
