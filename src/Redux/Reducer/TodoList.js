import {EDITTASK, TASKS } from "../Constants/Action_type";
import {ADDTASK } from "../Constants/Action_type";
import {DONETASK } from "../Constants/Action_type";
import {UNDONETASK } from "../Constants/Action_type";


let initialState= {
    tasksList : []
}

export const tasksReducer = (state=initialState,action) => {

    const {type,payload} = action ;

    switch (type) {
        case ADDTASK:
            
            state.tasksList.push({
                id : Math.random(),
                description : payload.task,
                isDone : false
            })
            return{
                tasksList : state.tasksList
            }
            break;
        case DONETASK : 
            
            state.tasksList.find((task)=>task.id==payload).isDone = true;
            
            return{
                tasksList : state.tasksList
            }
            break;
        case UNDONETASK : 
            
            state.tasksList.find((task)=>task.id==payload).isDone = false;
            
            return{
                tasksList : state.tasksList
            }
            break;
        case EDITTASK : 
            
            state.tasksList.find((task)=>task.id==payload.id).description = payload.description;
            
            return{
                tasksList : state.tasksList
            }
            break;
        default: return state;
    }
}