/* eslint-disable */
import { addToDo, removeToDo, markCompleted, changeItem, clear, clearAll, getToDoList } from '../__mocks__/crud.js'
import Storage from '../__mocks__/storage.js'

describe('Testing the add toDo function', () => {
  test('add item to array of items', () => {
    const storage = JSON.parse(localStorage.getItem('to-do-item'));
    const addItems = addToDo(storage)
    expect(addItems).toEqual([{
      description: null,
      completed: false,
      index: 1
    }])
  })

  test('testing local storage', () => {
    const toDo = {
      description: 'value',
      completed: false,
      index: 1,
    };
    localStorage.setItem('to-do-item', JSON.stringify([toDo]));
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
    addToDo(storage, '2')
    expect(removeToDo(1)).toEqual(1)
  })
  test('Should clear completed', () => {
    localStorage.clear()
    addToDo('1')
    markCompleted(1)
    clear()
    const storage = localStorage.getItem('to-do-item');
    expect(storage).toEqual("[]")
  })
  test('remove all items', () => {
    const storage = JSON.parse(localStorage.getItem('to-do-item'))
    expect(clearAll(storage)).toEqual()
  })
})

describe('Should Edit Item values', () => {
  test('Should update value', () => {
    localStorage.clear()
    addToDo('1')
    changeItem('2', 1);
    const storage = localStorage.getItem('to-do-item');
    expect(storage).toEqual(JSON.stringify([{
      description: '2',
      completed: false,
      index: 1,
    }]))
  })

})