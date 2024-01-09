import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions'

const AddTask = () => {
    const dispatch = useDispatch()
    const [todo, setTodo]=useState("")
    const handleAddtask = () =>{
        dispatch(add_task({id: Math.random(), title: todo.slice(0 , 5).concat('....'), description :todo , isDone:false}))
    }
    
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <Form.Control onChange={(e)=> setTodo(e.target.value)} placeholder='type hereee .....'/>
        <Button onClick={handleAddtask}>ADD</Button>
    </div>
  )
}

export default AddTask