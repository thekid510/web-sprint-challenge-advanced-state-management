import {state} from './state'

export function reducer (currentState=state,action){
    console.log(action.type);
    switch(action.type){
     
        case "FETCH_SUCCESS":{
            return {
                ...currentState, isLoading:false 
            }
        }
        case "ADD_SMURF":{
            console.log(currentState,action);
            return {
                ...currentState, isLoading:false ,
                smurfs:[...currentState.smurfs, action.payload]
            }
        } 
        default: return currentState
    }
}