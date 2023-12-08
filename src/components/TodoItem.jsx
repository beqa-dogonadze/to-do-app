import React from 'react'

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li className='w-full justify-start flex break-words border-b border-gray-600 pb-2 mt-5 gap-5 items-center'>
      <button
        className='bg-blue-500 rounded-full p-1 text-center w-[30px]'
        onClick={() => onRemove(todo.id)}
      >
        X
      </button>
      <h1 className={`text-gray-500 p-1 text-md rounded-md text-start w-[600px] `}>
        {todo.text}
      </h1>
    </li>
  )
}

export default TodoItem
