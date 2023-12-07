const InputTodo = ({ todo, addTodo, setTodo }) => {
  return (
    <div className='mt-5'>
      <input
        className='rounded-xl focus:outline-none focus:border-red-500 border bg-gray-600 text-green-600 border-none text-xl pl-3 p-1'
        type='text'
        name='todo'
        value={todo}
        placeholder='Add new task'
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <button
        className='p-1 rounded-xl w-[80px] ml-5 text-white text-xl bg-green-500'
        onClick={addTodo}
      >
        ADD
      </button>
    </div>
  )
}
export default InputTodo
