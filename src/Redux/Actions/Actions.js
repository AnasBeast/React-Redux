import { DECREMENT, INCREMENT } from "../Constants/Action_type"


export const increment = (payload) => {
    return {
        type :INCREMENT ,
        payload
    }
}

export const decrement = (payload) => {
    return {
        type:DECREMENT,
        payload
    }
}