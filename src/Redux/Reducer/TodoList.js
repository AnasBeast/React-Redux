import {TASKS } from "../Constants/Action_type";
import {ADDTASK } from "../Constants/Action_type";
import {DONETASK } from "../Constants/Action_type";


let initialState= {
    tasksList : []
}

export const tasksReducer = (state=initialState,action) => {

    const {type,payload} = action ;

    switch (type) {
        case TASKS:
            
            return {
                
                tasksList : state.tasksList
            }
            
            break;
        case ADDTASK:
            const len = state.tasksList.length-1;
            state.tasksList.push({
                id : len +1,
                description : payload.task,
                isDone : false
            })
            return{
                tasksList : state.tasksList
            }
            break;
        case DONETASK : 
            const id = payload;
            state.tasksList[id].isDone = true;
            
            return{
                tasksList : state.tasksList
            }
            break;
        default: return state;
    }
}