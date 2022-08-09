import _ from 'lodash';
import './style.css';
import menu from '/assets/images/3-dots.png'

const listContainer = document.querySelector('.to-do-list-ul')

window.onload;
listContainer.innerHTML

const toDos = [
  {
    description: 'Workout',
    completed: false,
    index: 1
  },

  {
    description: 'Grocery Shopping',
    completed: false,
    index: 2
  },

  {
    description: 'Watch The Bat-Man',
    completed: false,
    index: 3
  }

]

document.querySelector('.to-do-list-ul').innerHTML = toDos.map((data) =>

  `<li class="to-do-item">
  <div class="li-div">
  <input class="to-do-check" type="checkbox">
  <p>${data.description}</p>
  </div>
  <div class="img-div">
  <img src="${menu}" alt="3-dots" class="li-img">
  </div>
  </li>`).join('')









