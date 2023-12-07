const ListTodo = ({ todos, removeTodo }) => {
  return (
    <div className='mt-5 mb-5'>
      {/* check if array is emptry or not */}
      {todos?.length > 0 ? (
        // if array is not empty add new items
        <ul className='mb-5'>
          {todos.map((todo, index) => (
            <div className='flex gap-5 mb-5'>
              <li
                key={index}
                className='text-white bg-yellow-400 pl-4 pr-4 text-xl'
              >
                {todo}
              </li>
              <button
                onClick={() => removeTodo(todo)}
                className='rounded-xl text-white bg-red-500 p-1 text-xl w-[90px]'
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      ) : (
        // if array is empty display text
        <div className=''>
          <h1 className='text-xl text-green-400'>Your list is clear</h1>
        </div>
      )}
    </div>
  )
}
export default ListTodo
