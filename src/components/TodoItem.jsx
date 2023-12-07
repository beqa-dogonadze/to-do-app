import React from 'react'

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li className='text-white w-full justify-around flex mt-5 gap-5 items-start'>
      <h1 className='bg-yellow-500 p-1 text-md rounded-md'>{todo.text}</h1>
      <button
        className='ml-5 bg-red-500 rounded-md p-1'
        onClick={() => onRemove(todo.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default TodoItem
