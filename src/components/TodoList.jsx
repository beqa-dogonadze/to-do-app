import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onRemove }) => {

  return (
    <ul className='mb-20 w-full flex flex-col items-center justify-center mt-5'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  )
}

export default TodoList
