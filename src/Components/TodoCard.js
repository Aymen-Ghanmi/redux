import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delete_task, done_task, edit_task } from '../JS/Actions'

const TodoCard = ({task}) => {
  const [show, setShow] = useState(false);
  const [showedit, setShowedit] = useState(false);
 
  const [newtitle, setNewtitle] = useState("")
  const [newdescription, setNewdescription] = useState("")
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseedit = () => setShowedit(false);
  const handleShowedit = () => setShowedit(true);

  const dispatch = useDispatch()

  const HandleDeletetask = () =>{
    dispatch(delete_task(task.id))
  }

  const HandleDonetask = () =>{
    dispatch(done_task(task.id))
  }

 const HandleEdittask = () => {
  dispatch(edit_task(task.id, newtitle, newdescription))
  handleCloseedit()
 }
 
  return (
    <div  style={{backgroundColor : task.isDone ? 'lightgreen' : 'white',display:'flex', justifyContent:'space-between' , margin:"10px 10px"}}>
        
           <h1>{task.title}</h1>
           <h3>{task.description}</h3>
            
       
        <div style={{ display:'flex', justifyContent:'space-between',margin:'10px'}}>
            <Button onClick={()=>HandleDonetask()} variant='success'>{task.isDone ? 'unDone' : 'done'}</Button>
            <Button onClick={()=>handleShowedit()} variant='warning'>Edit</Button>
            <Button onClick={handleShow} variant='danger'>X</Button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete task !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Deny
          </Button>
          <Button variant="danger" onClick={HandleDeletetask}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>



 {/* **************************************************this modal for edit *************************************************************************** */}

 <Modal show={showedit} onHide={handleCloseedit}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task {task.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit your task</Modal.Body>
        <Form.Control  onChange={(e)=> setNewtitle(e.target.value)} placeholder='Your title here ... '/>
        <Form.Control  onChange={(e)=> setNewdescription(e.target.value)} placeholder='Your description here ... '/>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseedit}>
            Deny
          </Button>
          <Button onClick={()=> HandleEdittask()} variant="success" >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  )
}

export default TodoCard