import { DECREMENT, INCREMENT } from "../Constants/Action_type";


let initialState= {
    Scounter : 0
}

export const stringReducer = (state=initialState,action) => {

    const {type,payload} = action ;

    switch (type) {
        case INCREMENT:
            return {
                Scounter : state.Scounter + payload
            }
            
            break;
        case DECREMENT : 
        return {
            Scounter : state.Scounter - payload
        }
    
        default: return state;
    }
}