// import axios from 'axios';

// export const fetchSmurfs = ()=>dispatch => {
//     dispatch({type: FETCH_START });
//     axios
//         .get("http://localhost:3333/smurfs")
//         .then((res)=>{
//             dispatch({ type: FETCH_SUCCESS, payload: res.data})
           
//         })
//         .catch((err)=>{
//             dispatch({ type: FETCH_FAIL, error:err})
//             console.log(err);
//         })
        
    
// }


// export default {
//     addSmurf:() => {
//         const {name,summary, position, nickname} = res.data;
//         return {
//             type:ADD_SMURF,
//             name,
//           summary,
//           position, 
//           nickname
//         }
//     }
//     // addError:()=> {
        
//     // }
// }
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.