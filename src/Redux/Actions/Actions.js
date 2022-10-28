import { EDITTASK, TASKS } from "../Constants/Action_type"
import { ADDTASK } from "../Constants/Action_type"
import { DONETASK } from "../Constants/Action_type"
import { UNDONETASK } from "../Constants/Action_type"


export const taskslist = (payload) => {
    return {
        type :TASKS ,
        payload
    }
}

export const addTask = (payload) => {
    return {
        type :ADDTASK ,
        payload
    }
}

export const doneTask = (payload) => {
    return {
        type :DONETASK ,
        payload
    }
}

export const undoneTask = (payload) => {
    return {
        type :UNDONETASK ,
        payload
    }
}

export const editTask = (payload) => {
    return {
        type :EDITTASK ,
        payload
    }
}