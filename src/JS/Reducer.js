import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./Actionstypes";

const initialState = {
    listTasks : [
        {id: Math.random(), title : "title 1" , description :"description 1" , isDone:false},
        {id: Math.random(), title : "title 2" , description :"description 2" , isDone:true},
        {id: Math.random(), title : "title 3" , description :"description 3" , isDone:false}
    ]
}

export const todoReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ADD_TASK :
            return {...state, listTasks : [...state.listTasks, payload]}

        case DELETE_TASK : 
            return {...state, listTasks : state.listTasks.filter((task) => task.id != payload)}
            
        case DONE_TASK :
            return {...state , listTasks: state.listTasks.map((task) => task.id == payload ? {...task, isDone : !task.isDone} : task)}   
            
        case EDIT_TASK : 
            return {...state , listTasks: state.listTasks.map((task)=> task.id == payload.id ? {...task, title : payload.newtitle , description : payload.newdescription   } : task)} 
                  


        default:
           return state; 
    }
}