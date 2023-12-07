import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='m-auto mt-10 mb-10 flex flex-col items-center text-end w-[900px] justify-start bg-gray-950 h-max'>
      <div>
        <div className=''>
          <h1 className='text-gray-300 mt-10 border-b w-full p-2'>TODO APP</h1>
        </div>
        <TodoForm onAdd={addTodo} />
      </div>
      <TodoList todos={todos} onRemove={removeTodo} />
    </div>
  )
}

export default App
