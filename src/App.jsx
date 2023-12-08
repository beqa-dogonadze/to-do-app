import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './index.css'
const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme((document.body.className = 'dark'))
    } else {
      setTheme((document.body.className = 'light'))
    }
  }

  return (
    <div
      className={`${theme} m-auto mt-10 mb-10 flex flex-col items-center text-end w-[900px] justify-start bg-gray-950 h-max`}
    >
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <div>
        <div className=''>
          <h1 className='text-gray-300 mt-10 border-b w-full p-2'>TODO APP</h1>
        </div>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onRemove={removeTodo} />
      </div>
    </div>
  )
}

export default App
