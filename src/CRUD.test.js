/* eslint-disable */
import { add, remove } from 'lodash'
import { display, addToDo, clear, clearAll, removeToDo, markCompleted} from './CRUD.js'

describe('Testing the add toDo function', () =>{
    test('add item to array of items', () => {
        const storage = JSON.parse(localStorage.getItem('to-do-item'))
        const addItems = addToDo(storage)
        expect(addItems).toEqual([{
            description: null,
            completed: false,
            index: 1
        }])
    })
    test('testing local storage', () => {
        const obj = {
          description: 'value',
          completed: false,
          index: 1,
        };
        localStorage.setItem('to-do-item', JSON.stringify([obj]));
        const storage = localStorage.getItem('to-do-item');
        expect(storage).toEqual(JSON.stringify([{
          description: 'value',
          completed: false,
          index: 1,
        }]))
      })
    })

describe('testing remove function', () => {
  test('removing items', () => {
    const storage = JSON.parse(localStorage.getItem('to-do-item'));

    addToDo(storage, '1')
    addToDo (storage, '2')
    addToDo (storage, '3')

    const removeItems = removeToDo(2)
    expect(removeItems).toEqual(2)
  })
})

    
