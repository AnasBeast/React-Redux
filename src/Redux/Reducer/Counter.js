import { DECREMENT, INCREMENT } from "../Constants/Action_type";


let initialState= {
    counter : 0
}

export const counterReducer = (state=initialState,action) => {

    const {type,payload} = action ;

    switch (type) {
        case INCREMENT:
            return {
                counter : state.counter + payload
            }
            
            break;
        case DECREMENT : 
        return {
            counter : state.counter - payload
        }
    
        default: return state;
    }
}