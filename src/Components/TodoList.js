import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {
    const list = useSelector(state => state.listTasks)
  return (
    <div>
{
    list.map((task)=> <TodoCard task={task} key={task.id} />)
}
    </div>
  )
}

export default TodoList