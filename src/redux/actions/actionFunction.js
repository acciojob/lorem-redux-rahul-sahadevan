import { FETCH_SUCCESS,FETCH_RESULT,ERROR } from "./actionType";
import axios from "axios";


export const fetch = ()=>{
    return {
        type:FETCH_SUCCESS,
        value:true
    }
}
export const data = (data)=>{
    return {
        type:FETCH_RESULT,
        value:data,
    }
}


export const error = (error)=>{
    return{
        type:ERROR,
        value:error
    }
}

export const fetchApi = ()=>{
    return async function (dispatch){
           
        
            try {
                dispatch(fetch())
                const response = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json");
                dispatch(data(response.data))
                console.log(response.data);
            } catch (error) {
                dispatch(error(error.message))
                console.error(error);
            }

    }
    
}