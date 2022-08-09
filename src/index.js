import _ from 'lodash';
import './style.css';
import menu from '../src/assets/images/3-dots.png'
import arrow from '../src/assets/images/add-item-img.png'
import refresh from '../src/assets/images/refresh.png'

const listContainer = document.querySelector('.to-do-list-ul')

// document.getElementById('.refresh').innerHTML = refresh.src
// document.getElementById('.arrow').innerHTML = arrow.src
document.querySelector('.refresh').src = `${refresh}`
document.querySelector('.arrow').src = `${arrow}`


window.onload;
listContainer.innerHTML

const toDos = [
  {
    description: 'Lift Heavy Things',
    completed: false,
    index: 1
  },

  {
    description: 'Eat a 12 oz Steak',
    completed: false,
    index: 2
  },

  {
    description: 'Watch The Bat-Man(Specifically the one with Robert Pattinson)',
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









