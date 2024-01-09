import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./Actionstypes"

export const add_task = (newtask) => {
 return {
    type: ADD_TASK,
    payload: newtask
 }
}

export const delete_task = (id) => {
   return {
   type: DELETE_TASK,
   payload: id
   }
}

export const done_task = id => {
   return {
      type: DONE_TASK,
      payload : id
   }
}

export const edit_task = (id, newtitle , newdescription
   ) => {
   return {
      type:EDIT_TASK,
      payload: {id, newtitle , newdescription}
   }
} 
