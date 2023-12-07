import React, { useState } from 'react'

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    if (todo !== '') {
      onAdd({ id: Date.now(), text: todo })
      setTodo('')
    }
  }

  return (
    <div className='mt-20'>
      <input
        placeholder='Add new task'
        className='outline-none rounded-xl p-1 text-xl w-[600px]'
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className='bg-green-600 text-white rounded-xl ml-10 p-1 pl-2 pr-2 text-xl'
        onClick={addTodo}
      >
        ADD
      </button>
    </div>
  )
}

export default TodoForm
