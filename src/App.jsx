import { useState } from 'react'
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    if (todo !== '') {
      //if input field is not empty get value and add
      setTodos([...todos, todo])
      //reset input field value after submit
      setTodo('')
    }
  }

  const removeTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }

  return (
    <div className='flex flex-col m-auto mt-24 rounded-xl items-center text-center justify-start w-[800px] h-[100vh bg-[#232327]'>
      <h1 className='text-3xl text-gray-500 pb-3 mt-5 border-b border-gray-600 w-[600px]'>
        TODO APP
      </h1>
      <div className='text-start gap-4 mt-5'>
        <InputTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <ListTodo todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  )
}

export default App
